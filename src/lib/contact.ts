import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

/**
 * Server side of the contact form. Emails each message to Rivky through Resend,
 * so the key stays on the server.
 *
 * Required env vars: RESEND_API_KEY + NOTIFY_EMAIL (see .env.example).
 */

const MAX_NAME_CHARS = 100;
const MAX_EMAIL_CHARS = 200;
const MAX_MESSAGE_CHARS = 5000;
const REQUEST_TIMEOUT_MS = 20_000;

// Rate limit: a single visitor gets this many messages per window.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  /** Honeypot — real visitors never see it, so anything here is a bot. */
  website?: string;
};

/** Per-IP counters. Resets whenever the server restarts — good enough here. */
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    if (hits.size > 5000) {
      for (const [key, value] of hits) if (now > value.resetAt) hits.delete(key);
    }
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

/** Never trust the browser: whatever arrives is checked and trimmed here. */
function parseContact(input: unknown): ContactMessage {
  const data = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const field = (key: string, max: number) =>
    typeof data[key] === "string" ? (data[key] as string).trim().slice(0, max) : "";

  const result = {
    name: field("name", MAX_NAME_CHARS),
    email: field("email", MAX_EMAIL_CHARS),
    message: field("message", MAX_MESSAGE_CHARS),
    website: field("website", 200),
  };

  if (!result.name || !result.message || !EMAIL_PATTERN.test(result.email)) {
    throw new Error("Invalid contact payload");
  }
  return result;
}

const escape = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(parseContact)
  .handler(async ({ data }): Promise<{ ok: boolean; error?: string }> => {
    // Pretend it worked so bots don't learn to skip the honeypot.
    if (data.website) return { ok: true };

    const apiKey = process.env["RESEND_API_KEY"];
    const to = process.env["NOTIFY_EMAIL"];
    if (!apiKey || !to) {
      console.error("RESEND_API_KEY / NOTIFY_EMAIL are not set — contact form can't send.");
      return { ok: false, error: "not-configured" };
    }

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    if (isRateLimited(ip)) return { ok: false, error: "rate-limited" };

    const html = `
      <p style="margin:0 0 8px"><strong>Name:</strong> ${escape(data.name)}</p>
      <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${escape(data.email)}">${escape(data.email)}</a></p>
      <p style="margin:16px 0 0;white-space:pre-wrap">${escape(data.message)}</p>`;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        body: JSON.stringify({
          // Resend's shared sender works without owning a domain, but it can
          // only deliver to the address on your Resend account.
          from: process.env["NOTIFY_FROM"] || "Portfolio <onboarding@resend.dev>",
          to: [to],
          // "Reply" in your mail app goes straight to the visitor.
          reply_to: data.email,
          subject: `Portfolio message from ${data.name}`,
          html,
          text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
        }),
      });

      if (!response.ok) {
        console.error("Resend request failed", response.status, await response.text());
        return { ok: false, error: "send-failed" };
      }
      return { ok: true };
    } catch (error) {
      console.error("Contact email error", error);
      return { ok: false, error: "send-failed" };
    }
  });

import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { sendContactMessage } from "@/lib/contact";
import { ArrowUpRight, Github, Mail, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <h2 className="eyebrow">Contact</h2>
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="max-w-[18ch] font-display text-4xl leading-tight text-balance md:text-5xl">
              Open to backend and full-stack opportunities.
            </h3>
            <p className="mt-4 max-w-[42ch] leading-relaxed text-muted-foreground">
              Have a role, project or question? Fill out the form or reach out directly - I'll get
              back to you as soon as I can.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {[
                {
                  label: "rivky.grinberg@gmail.com",
                  href: "mailto:rivky.grinberg@gmail.com",
                  icon: Mail,
                },
                { label: "github.com/r1700", href: "https://github.com/r1700", icon: Github },
                {
                  label: "linkedin.com/in/rivky-grinberg",
                  href: "https://www.linkedin.com/in/rivky-grinberg",
                  icon: Linkedin,
                },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <Icon
                      className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                      strokeWidth={1.8}
                    />
                    <span className="underline-sweep">{link.label}</span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("That email address doesn't look right.");
      return;
    }

    setSending(true);
    try {
      const result = await sendContactMessage({
        data: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website: honeypot,
        },
      });

      if (result.error === "rate-limited") {
        toast.error("Too many messages in a short time - please try again in a few minutes.");
        return;
      }
      if (!result.ok) throw new Error(`Contact form failed: ${result.error}`);

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent - I'll get back to you soon.");
    } catch (error) {
      console.error(error);
      toast.error(
        "Couldn't send the message. Please email me directly at rivky.grinberg@gmail.com.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border bg-card p-6">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the opportunity..."
          rows={4}
          className="w-full resize-none rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
        />
      </div>
      {/* Honeypot: hidden from people, tempting to bots. The server drops anything that fills it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
      <button
        type="submit"
        disabled={sending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {sending ? "Sending..." : "Send message"}
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
      <p aria-live="polite" className="min-h-5 text-center text-xs text-muted-foreground">
        {sent ? "Thanks - your message is on its way." : ""}
      </p>
    </form>
  );
}

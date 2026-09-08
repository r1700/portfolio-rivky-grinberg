# Rivky Grinberg — Portfolio

Personal portfolio site: experience, selected projects, skills and contact.

## Tech stack

- **React 19** + **TypeScript**
- **TanStack Start** / **TanStack Router** — file-based routing with SSR
- **Vite 8** — build tooling
- **Tailwind CSS v4** — styling, themed via CSS variables
- **Nitro** — server build (auto-detects the deploy target)

## Getting started

Requires Node.js 20+.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Production build into `.output/`   |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Run ESLint                         |
| `npm run format`  | Format with Prettier               |

## Project structure

Most of the site lives in a single route.

```
src/
  routes/
    __root.tsx      Document shell, <head> metadata, 404 and error pages
    index.tsx       The entire page — content lives in arrays at the top
  data/
    bio.ts          Everything the AI assistant knows about Rivky
  components/
    ChatBot.tsx     Floating "Ask about Rivky" assistant
    Reveal.tsx      Scroll-triggered reveal animation
    TypedWord.tsx   Typewriter effect in the hero
    ThemeProvider.tsx / ThemeToggle.tsx   Dark mode
    ui/sonner.tsx   Toast styling
  hooks/
    use-reveal.ts   IntersectionObserver hook behind <Reveal>
  lib/
    ask-bot.ts      Server functions behind the assistant (API keys live here)
    error-capture.ts / error-page.ts   SSR error handling
  styles.css        Design tokens: colors, fonts, animations
public/
  Rivky_Grinberg_CV.pdf
  og-image.png      Social share preview
```

To edit page content — experience, projects, skills — change the arrays at the
top of `src/routes/index.tsx`.

## AI assistant

A floating button in the bottom-right opens a chat where visitors can ask
questions about Rivky. Answers come from Google's Gemini API, constrained to the
profile in `src/data/bio.ts`.

**To change what the bot knows, edit `src/data/bio.ts` — nothing else.** It is
plain text. Anything not written there, the bot is instructed to admit it doesn't
know and point to the contact email.

### Setup

1. Get a free API key at https://aistudio.google.com/apikey.
2. `cp .env.example .env` and paste the key into `GEMINI_API_KEY`.
3. `npm run dev` — the assistant is live.
4. For the deployed site, add the same variable in your host's dashboard
   (Vercel/Netlify → Settings → Environment Variables), then redeploy.

Without a key the widget still opens and replies with a polite "not configured
yet" message, so the site never breaks.

### Conversation emails (optional)

Set `RESEND_API_KEY` (free at https://resend.com) and `NOTIFY_EMAIL` to receive
each conversation by email once the visitor closes the chat or leaves the page.
The default sender `onboarding@resend.dev` needs no domain, but Resend will only
deliver it to the address your Resend account is registered with. Leave the
variables empty to turn the feature off.

### Cost and limits

Gemini's free tier has a daily quota; there is no charge unless you enable
billing. The server also caps each visitor at 20 questions per 10 minutes, each
message at 500 characters, and keeps only the last 12 turns as context. Adjust
these at the top of `src/lib/ask-bot.ts`.

Never put an API key anywhere under `src/` other than reading it from
`process.env` inside a `.handler()` — those run on the server only. `.env` is
git-ignored; keys committed to GitHub get scraped within minutes.

## Deployment

`npm run build` produces `.output/`. Nitro detects the host at build time, so
the same build works on Vercel, Netlify, Cloudflare or a plain Node server
without extra configuration.

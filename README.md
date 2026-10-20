<div align="center">

# Rivky Grinberg

**Software Developer: Backend & Full Stack**

My personal portfolio: who I am, what I've built, and a way to get in touch.
It also has an AI assistant that answers questions about me.

[Live site](https://portfolio-rivky-grinberg.vercel.app/) · [GitHub](https://github.com/r1700) · [LinkedIn](https://www.linkedin.com/in/rivky-grinberg) · [Email](mailto:rivky.grinberg@gmail.com)

</div>

---

## About the site

A single-page portfolio, designed to be read quickly by a recruiter or a hiring
manager and to leave a good impression in under a minute.

| Section        | What's there                                                              |
| -------------- | ------------------------------------------------------------------------- |
| **Hero**       | Short intro, animated tagline, and buttons for contact, projects and CV   |
| **Experience** | Current backend role and previous full-stack work, with the tech used      |
| **Projects**   | ClickQuiz, the Subscription & Advertising Platform and MultiChatSender     |
| **Skills**     | AI, backend, frontend, databases, tools and core concepts                  |
| **Contact**    | A contact form that emails me directly, plus my links                      |

## Highlights

- **"Ask about Rivky" AI assistant.** A chat widget where visitors can ask about
  my experience, projects and way of working. It answers only from a profile I
  wrote, and says so honestly when it doesn't know something.
- **Contact form that really sends mail.** Messages arrive in my inbox, with
  spam protection (a hidden honeypot field and per-visitor rate limiting).
- **Project demos.** Each project links to its code, and MultiChatSender has a
  demo video that opens in a pop-up.
- **Light and dark mode**, scroll animations, and a layout that works on phones,
  tablets and desktops.
- **Download CV** straight from the hero section.

## Projects featured

- **ClickQuiz:** AI-assisted exam creation for teachers. Generates ready-to-use
  exams and answer sheets. ([demo](https://click-quiz.vercel.app) ·
  [code](https://github.com/r1700/ClickQuiz-Creating-tests))
- **Subscription & Advertising Platform:** full-stack system for business
  subscriptions and ad management, built with C#, .NET Core and React.
  ([code](https://github.com/r1700/advertising_project))
- **MultiChatSender:** a Chrome extension that sends one prompt to ChatGPT,
  Claude and Gemini at once and shows all the answers together in a side panel.
  ([code](https://github.com/r1700/multi-ai-chat-extension))

## How it's built

React 19 and TypeScript on **TanStack Start** (file-based routing with
server-side rendering), bundled with Vite and styled with Tailwind CSS v4.
Server functions handle the chatbot (Google Gemini) and the contact form
(Resend), so API keys never reach the browser.

```
src/
  routes/       The page itself (index.tsx) and the document shell
  components/   Chat widget, scroll reveal, typed hero word, theme toggle
  data/bio.ts   Everything the AI assistant knows about me
  lib/          Server functions: chatbot and contact form
public/         CV, social preview image, project demo video
```

Page content (experience, projects, skills) lives in arrays at the top of
`src/routes/index.tsx`. To change what the assistant knows, edit only
`src/data/bio.ts`.

## Run it locally

Requires Node.js 20+.

```sh
npm install
cp .env.example .env   # then fill in the keys below
npm run dev            # http://localhost:3000
```

| Variable                          | Needed for                        |
| --------------------------------- | --------------------------------- |
| `GEMINI_API_KEY`                  | The AI assistant                  |
| `RESEND_API_KEY`, `NOTIFY_EMAIL`  | Contact form and chat transcripts |

Without the keys the site still works: the assistant replies that it isn't
configured yet. Never commit `.env`; it is git-ignored.

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run format`.

## Deployment

`npm run build` produces a `.output/` folder. Nitro detects the host at build
time, so the same build runs on Vercel, Netlify, Cloudflare or a plain Node
server. Add the environment variables above in the host's dashboard.

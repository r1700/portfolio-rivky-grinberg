import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { TypedWord } from "@/components/TypedWord";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Brain,
  Megaphone,
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  Monitor,
  ArrowUpRight,
  Github,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Send,
  FileDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rivky Grinberg — Software Developer" },
      {
        name: "description",
        content:
          "Backend & full-stack developer specializing in REST APIs, ASP.NET Core, Node.js and AI-integrated features.",
      },
      { property: "og:title", content: "Rivky Grinberg — Software Developer" },
      {
        property: "og:description",
        content:
          "Backend & full-stack developer specializing in REST APIs, ASP.NET Core, Node.js and AI-integrated features.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rivky Grinberg",
          jobTitle: "Software Developer",
          email: "mailto:r6731700@gmail.com",
          telephone: "+972-55-6731700",
          url: "https://github.com/r1700",
          sameAs: [
            "https://github.com/r1700",
            "https://www.linkedin.com/in/rivky-grinberg",
          ],
          knowsLanguage: ["Hebrew", "English"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const marquee = [
  "ASP.NET Core",
  "C#",
  "Node.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "MongoDB",
  "SQL Server",
  "LLM Integration",
];

const experience = [
  {
    period: "2026 — Present",
    role: "Backend Developer",
    org: "Early-stage startup",
    points: [
      "Build backend services and REST APIs with ASP.NET Core (C#).",
      "Ship AI-powered backend features by integrating LLMs into application workflows.",
      "Implement JWT-based authentication and authorization.",
      "Improve API performance through query optimization and caching.",
      "Work in Docker-based development environments.",
    ],
    stack: [
      "ASP.NET Core",
      "C#",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "JWT",
      "LLM Integration",
    ],
  },
  {
    period: "2025",
    role: "Full Stack Developer Intern",
    org: "DE-PARK — Autonomous Parking System",
    points: [
      "Developed a real-time autonomous parking management system for vehicles, queues and parking slots, including mobile and tablet interfaces.",
      "Built backend services with Node.js (Express), PostgreSQL and Sequelize, including testing.",
      "Developed responsive frontend interfaces with React and TypeScript.",
      "Collaborated in a team environment using Git/GitHub.",
    ],
    stack: ["Node.js", "Express", "React", "TypeScript", "PostgreSQL", "Sequelize", "Jest", "Git"],
  },
];

const projects = [
  {
    name: "ClickQuiz — AI Exam Creation",
    summary:
      "Web system that lets teachers create, edit, manage and export exams with AI assistance.",
    stack: ["Node.js", "Express", "React", "MongoDB", "OpenAI API"],
    icon: Brain,
    accent: "from-primary/20 to-accent/20",
    links: [
      { label: "Live demo", href: "https://click-quiz.vercel.app" },
      { label: "Source", href: "https://github.com/r1700/ClickQuiz-Creating-tests" },
    ],
  },
  {
    name: "Subscription & Advertising Platform",
    summary:
      "Full-stack platform for business subscriptions and advertisement management, designed end to end.",
    stack: ["C#", ".NET Core", "React", "Redux", "SQL Server", "Material-UI"],
    icon: Megaphone,
    accent: "from-accent/20 to-primary/20",
    links: [{ label: "Source", href: "https://github.com/r1700/advertising_project" }],
  },
];

const skills = [
  { label: "Programming\u00A0Languages", icon: Code2, items: "C#, Java, Python, JavaScript, TypeScript, C, C++" },
  { label: "Backend", icon: Server, items: "ASP.NET Core, Node.js, Express.js, .NET Core, REST APIs" },
  { label: "Frontend", icon: Layout, items: "React.js, Redux, Angular, HTML5, CSS3" },
  { label: "Databases", icon: Database, items: "PostgreSQL, MongoDB, SQL Server, Supabase, Redis" },
  { label: "Tools", icon: Wrench, items: "Git, GitHub, Docker, Postman, Sequelize, Entity Framework, OpenAI API,  LLM Integration, JWT, Kafka, Jest" },
  { label: "Concepts", icon: Monitor, items: "Algorithms & Data Structures, Software Architecture, Operating Systems,\u00A0OOP, Design Patterns, Microservices" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="font-display text-xl">Rivky Grinberg</span>
          <div className="flex items-center gap-4">
            <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
              {["Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="underline-sweep transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="float-slow pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="float-slow pointer-events-none absolute top-40 -left-40 size-[26rem] rounded-full bg-accent/15 blur-3xl [animation-delay:-6s]"
          />
          <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-20 md:pt-32 md:pb-28">
            <div className="animate-rise flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/40 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.16em] text-success uppercase">
                Available for opportunities
              </span>
            </div>
            <p className="animate-rise mt-8 font-display text-4xl leading-[1] text-balance text-foreground/80 md:text-6xl lg:text-7xl">
              Software&nbsp; Developer
            </p>
            <h1 className="animate-rise mt-4 max-w-[18ch] font-display text-6xl leading-[1] text-balance md:text-8xl lg:text-9xl">
              Rivky
              <br />
              Grinberg
            </h1>
            <p className="animate-rise mt-8 max-w-[42ch] font-display text-2xl leading-snug text-balance text-foreground/90 md:text-3xl">
              I build <TypedWord /> that quietly do the hard work.
            </p>
            <p className="animate-rise mt-8 max-w-[62ch] text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              Software developer with experience in backend and full-stack development, specializing
              in REST APIs, backend architecture and AI-integrated features. I care about clean,
              maintainable code, fast learning, and working well inside a team.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:r6731700@gmail.com"
                className="group rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get in touch
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#projects"
                className="rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-surface"
              >
                See projects
              </a>
              <a
                href="/Rivky_Grinberg_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:text-foreground"
              >
                <FileDown className="size-4" />
                Download CV
              </a>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y bg-surface py-4">
          <div className="marquee-track gap-10">
            {[...marquee, ...marquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="font-mono text-xs tracking-[0.16em] whitespace-nowrap text-muted-foreground uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <section id="experience" className="bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Reveal>
              <h2 className="eyebrow">Professional experience</h2>
            </Reveal>
            <div className="mt-12 space-y-4">
              {experience.map((job, i) => (
                <Reveal key={job.role} delay={i * 120}>
                  <article className="card-lift rounded-2xl border bg-card p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl">{job.role}</h3>
                      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-primary">{job.org}</p>
                    <ul className="mt-6 space-y-2.5 text-muted-foreground">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                          <span className="text-pretty">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="eyebrow">Selected projects</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.name} delay={i * 140}>
                  <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
                    <div
                      className={`relative h-32 bg-gradient-to-br ${project.accent} p-6`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-card/90 shadow-sm backdrop-blur-sm">
                        <Icon className="size-6 text-primary" strokeWidth={1.8} />
                      </div>
                      <div className="absolute top-4 right-4 flex gap-1.5">
                        <span className="size-2.5 rounded-full bg-card/60" />
                        <span className="size-2.5 rounded-full bg-card/60" />
                        <span className="size-2.5 rounded-full bg-card/60" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl leading-tight">
                          {project.name}
                        </h3>
                        <a
                          href={project.links[0]?.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 shrink-0 rounded-full border p-2 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
                          aria-label={`Open ${project.name}`}
                        >
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground text-pretty">
                        {project.summary}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-3 border-t pt-5">
                        {project.links.map((link) => {
                          const isSource =
                            link.label.toLowerCase().includes("source") ||
                            link.href.includes("github.com");
                          const LinkIcon = isSource ? Github : Globe;
                          const shortLabel = isSource ? "Code" : "Live";
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:text-foreground"
                            >
                              <LinkIcon className="size-4" />
                              {shortLabel}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="skills" className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Reveal>
              <h2 className="font-mono text-[11px] tracking-[0.18em] text-ink-foreground/50 uppercase">
                Skills
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <Reveal key={skill.label} delay={i * 80}>
                    <div className="card-lift group flex h-full flex-col rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-foreground/10 bg-ink-foreground/5">
                        <Icon className="size-5 text-ink-foreground/70" strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-5 font-display text-lg">{skill.label}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-foreground/55 text-pretty">
                        {skill.items}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

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
                  Have a role, project or question? Fill out the form or reach out directly — I'll get back to you as soon as I can.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  {[
                    { label: "r6731700@gmail.com", href: "mailto:r6731700@gmail.com", icon: Mail },
                    { label: "+972-55-6731700", href: "tel:+972556731700", icon: Phone },
                    { label: "github.com/r1700", href: "https://github.com/r1700", icon: Github },
                    { label: "linkedin.com/in/rivky-grinberg", href: "https://www.linkedin.com/in/rivky-grinberg", icon: Linkedin },
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
                        <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.8} />
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
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-xs tracking-widest text-muted-foreground uppercase sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Rivky Grinberg</span>
          <span>Software Developer</span>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = `Message from ${name} via portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:r6731700@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client...");
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
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
      >
        Send message
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

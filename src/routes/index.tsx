import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { TypedWord } from "@/components/TypedWord";

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
    links: [{ label: "Source", href: "https://github.com/r1700/advertising_project" }],
  },
];

const skills = [
  { label: "Languages", items: "C#, Java, Python, JavaScript, TypeScript, C, C++" },
  { label: "Backend", items: "Node.js (Express.js), .NET Core" },
  { label: "Frontend", items: "React.js, Redux, Angular, HTML5, CSS3" },
  { label: "Databases", items: "PostgreSQL, MongoDB, SQL Server, Supabase" },
  { label: "Tools", items: "Git, GitHub, Docker, Postman, Sequelize, Entity Framework, OpenAI API" },
  { label: "Systems", items: "Windows, Linux" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="font-display text-xl">Rivky Grinberg</span>
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
            <p className="eyebrow animate-rise">Software Developer · Backend & Full Stack</p>
            <h1 className="animate-rise mt-6 max-w-[26ch] font-display text-5xl leading-[1.05] text-balance md:text-7xl">
              I build <TypedWord />
              <br />
              that quietly do the hard work.
            </h1>
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
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 140}>
                <article className="group">
                  <div className="h-px w-full origin-left scale-x-100 bg-border transition-colors duration-500 group-hover:bg-primary" />
                  <h3 className="mt-6 font-display text-2xl transition-transform duration-500 group-hover:translate-x-1">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-[42ch] leading-relaxed text-muted-foreground text-pretty">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:text-foreground"
                      >
                        {link.label}
                        <span className="text-[10px] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] tracking-wide text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="font-mono text-[11px] tracking-[0.18em] text-ink-foreground/50 uppercase">
                  Skills
                </h2>
              </Reveal>
              <dl className="mt-10 space-y-6">
                {skills.map((skill, i) => (
                  <Reveal key={skill.label} delay={i * 70}>
                    <dt className="text-sm font-medium">{skill.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-foreground/60">
                      {skill.items}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
            <div>
              <Reveal>
                <h2 className="font-mono text-[11px] tracking-[0.18em] text-ink-foreground/50 uppercase">
                  Education & languages
                </h2>
              </Reveal>
              <div className="mt-10 space-y-8">
                <Reveal delay={80}>
                  <p className="font-display text-2xl">Diploma in Software Engineering</p>
                  <p className="mt-1 text-sm text-ink-foreground/60">
                    MAHAT, 2023 — 2025 · Graduated with High Honors
                  </p>
                </Reveal>
                <Reveal delay={160} className="border-t border-ink-foreground/10 pt-8">
                  <p className="text-sm font-medium">KamaTech Program — extended studies</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-foreground/60">
                    Algorithms & Data Structures, Operating Systems, Design Patterns, Software
                    Architecture, System Analysis, Networks & Communication.
                  </p>
                </Reveal>
                <Reveal delay={240} className="border-t border-ink-foreground/10 pt-8">
                  <p className="text-sm font-medium">Languages</p>
                  <p className="mt-1 text-sm text-ink-foreground/60">
                    Hebrew — Native · English — Advanced
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
          <Reveal>
            <h2 className="max-w-[20ch] font-display text-4xl leading-tight text-balance md:text-5xl">
              Open to backend and full-stack opportunities.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col items-start gap-4 font-mono text-sm">
            {[
              { label: "r6731700@gmail.com", href: "mailto:r6731700@gmail.com" },
              { label: "055-6731700", href: "tel:+972556731700" },
              { label: "GitHub", href: "https://github.com/" },
            ].map((link, i) => (
              <Reveal key={link.label} delay={i * 100}>
                <a
                  href={link.href}
                  className="underline-sweep w-fit transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              </Reveal>
            ))}
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

import { TypedWord } from "@/components/TypedWord";
import { FileDown } from "lucide-react";
import { marquee } from "@/data/portfolio";

export function Hero() {
  return (
    <>
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
              href="#contact"
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
    </>
  );
}

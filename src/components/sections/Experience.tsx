import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
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
  );
}

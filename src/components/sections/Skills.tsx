import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
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
  );
}

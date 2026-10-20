import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Github, Globe, Play } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects({ onWatchVideo }: { onWatchVideo: (src: string) => void }) {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="eyebrow">Selected projects</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.name} delay={i * 140}>
              <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
                <div className={`relative h-32 bg-gradient-to-br ${project.accent} p-6`}>
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
                    <h3 className="font-display text-2xl leading-tight">{project.name}</h3>
                    {"video" in project && project.video ? (
                      <button
                        type="button"
                        onClick={() => onWatchVideo(project.video)}
                        className="mt-1 shrink-0 rounded-full border p-2 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
                        aria-label={`Watch ${project.name} demo`}
                      >
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    ) : (
                      <a
                        href={project.links[0]?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 shrink-0 rounded-full border p-2 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
                        aria-label={`Open ${project.name}`}
                      >
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
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
                    {project.links
                      .filter((link) => link.href)
                      .map((link) => {
                        const isSource =
                          link.label.toLowerCase().includes("source") ||
                          link.href.includes("github.com");
                        const isVideo = link.label.toLowerCase().includes("video");
                        const LinkIcon = isVideo ? Play : isSource ? Github : Globe;
                        const shortLabel = isVideo ? "Demo" : isSource ? "Code" : "Live";
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
                    {"video" in project && project.video && (
                      <button
                        type="button"
                        onClick={() => onWatchVideo(project.video)}
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:text-foreground"
                      >
                        <Play className="size-4" />
                        Watch demo
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

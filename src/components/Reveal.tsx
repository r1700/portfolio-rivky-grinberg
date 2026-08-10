import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "p" | "h2";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}

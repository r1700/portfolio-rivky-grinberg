import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
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
  );
}

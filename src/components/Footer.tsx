export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-xs tracking-widest text-muted-foreground uppercase sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Rivky Grinberg</span>
        <span>Software Developer</span>
      </div>
    </footer>
  );
}

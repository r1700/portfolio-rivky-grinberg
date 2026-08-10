import { useEffect, useState } from "react";

const WORDS = ["REST APIs", "backend systems", "AI-powered features", "clean architecture"];

export function TypedWord() {
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index] ?? "";
    if (!deleting && len === word.length) {
      const hold = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(hold);
    }
    if (deleting && len === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % WORDS.length);
      return;
    }
    const t = setTimeout(() => setLen((l) => l + (deleting ? -1 : 1)), deleting ? 34 : 68);
    return () => clearTimeout(t);
  }, [len, deleting, index]);

  return (
    <span className="text-primary">
      {(WORDS[index] ?? "").slice(0, len)}
      <span className="caret font-sans font-light">|</span>
    </span>
  );
}

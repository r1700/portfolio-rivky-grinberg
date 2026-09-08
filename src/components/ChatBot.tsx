import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { askBot, sendTranscript, type ChatMessage } from "@/lib/ask-bot";

const GREETING =
  "Hi! I'm Rivky's AI assistant - ask me anything about her experience, projects or availability.";

/**
 * Clickable starter questions. They live here rather than in `src/data/bio.ts`
 * so the full profile text stays out of the browser bundle.
 */
const SUGGESTED_QUESTIONS = [
  "Who is Rivky?",
  "What does Rivky specialize in?",
  "What has Rivky worked on?",
  "What makes Rivky a great developer?",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<ChatMessage>>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // How much of the conversation has already been emailed, so leaving and
  // coming back doesn't send the same lines twice.
  const emailedUpTo = useRef(0);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const flushTranscript = useCallback(() => {
    const pending = messagesRef.current;
    if (pending.length <= emailedUpTo.current) return;
    emailedUpTo.current = pending.length;
    // Fire and forget: the visitor should never wait on this.
    void sendTranscript({ data: { messages: pending } }).catch(() => {});
  }, []);

  const closeChat = useCallback(() => {
    setOpen(false);
    flushTranscript();
  }, [flushTranscript]);

  // Send the transcript when the visitor leaves or backgrounds the tab.
  useEffect(() => {
    function onHidden() {
      if (document.visibilityState === "hidden") flushTranscript();
    }
    document.addEventListener("visibilitychange", onHidden);
    return () => document.removeEventListener("visibilitychange", onHidden);
  }, [flushTranscript]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeChat();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeChat]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || thinking) return;

    const next: Array<ChatMessage> = [...messagesRef.current, { role: "user", text: question }];
    setMessages(next);
    setInput("");
    setThinking(true);

    try {
      const { reply } = await askBot({ data: { messages: next } });
      setMessages((current) => [...current, { role: "bot", text: reply }]);
    } catch (error) {
      console.error(error);
      setMessages((current) => [
        ...current,
        {
          role: "bot",
          text: "I lost the connection there. Please try again, or email Rivky at rivky.grinberg@gmail.com.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => (open ? closeChat() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? "Close the assistant" : "Ask the AI assistant about Rivky"}
        className="group fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/50" />
            <span className="relative inline-flex size-3 rounded-full bg-accent" />
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="AI assistant"
          className="animate-rise fixed right-6 bottom-24 z-50 flex h-[30rem] max-h-[calc(100vh-8rem)] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border bg-card shadow-2xl"
        >
          <header className="flex items-center gap-2.5 border-b px-4 py-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="size-4 text-primary" strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm">Ask about Rivky</p>
              <p className="truncate text-[11px] text-muted-foreground">
                AI assistant · answers may be imperfect
              </p>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <Bubble role="bot" text={GREETING} />

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => send(question)}
                    className="rounded-full border px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <Bubble key={index} role={message.role} text={message.text} />
            ))}

            {thinking && (
              <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t p-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              maxLength={500}
              dir="auto"
              placeholder="Ask a question..."
              className="max-h-24 flex-1 resize-none rounded-xl border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={thinking || !input.trim()}
              aria-label="Send"
              className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, text }: ChatMessage) {
  const isUser = role === "user";
  return (
    <div
      dir="auto"
      className={
        isUser
          ? "ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground"
          : "w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-foreground"
      }
    >
      {text}
    </div>
  );
}

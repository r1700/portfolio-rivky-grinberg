import { X } from "lucide-react";

export function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project demo video"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => onClose()}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          autoFocus
          onClick={() => onClose()}
          aria-label="Close video"
          className="absolute -top-3 -right-3 z-10 flex size-8 items-center justify-center rounded-full bg-card text-foreground shadow-md"
        >
          <X className="size-4" />
        </button>
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="max-h-[85vh] max-w-[90vw] rounded-2xl bg-black"
        />
      </div>
    </div>
  );
}

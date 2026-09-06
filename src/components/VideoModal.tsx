"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";

type VideoModalProps = {
  isOpen: boolean;
  videoUrl: string | null;
  onClose: () => void;
};

export function VideoModal({ isOpen, videoUrl, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocus.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "Tab" && event.shiftKey && document.activeElement === closeRef.current) {
        event.preventDefault();
        linkRef.current?.focus();
      } else if (
        event.key === "Tab" &&
        !event.shiftKey &&
        document.activeElement === linkRef.current
      ) {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  const videoId = new URL(videoUrl).pathname.split("/").filter(Boolean).pop();
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : videoUrl;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.currentTarget === event.target && onClose()}
    >
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="video-title">
        <h2 id="video-title" hidden>
          動態作品影片
        </h2>
        <button
          ref={closeRef}
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="關閉播放器"
        >
          <X size={20} />
        </button>
        <iframe
          src={videoUrl}
          title="動態作品影片"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <a
          ref={linkRef}
          className="modal-link"
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          前往 YouTube 完整觀看 <ExternalLink size={15} />
        </a>
      </section>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string | null;
  onClose: () => void;
}

export function VideoModal({ isOpen, videoUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  // Extract raw youtube watch URL
  const rawWatchUrl = videoUrl.includes("embed")
    ? videoUrl.replace("embed/", "watch?v=").split("?")[0]
    : videoUrl;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/15"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="關閉播放器"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-red-600 text-white transition-colors backdrop-blur-sm border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player iFrame */}
        <iframe
          src={videoUrl}
          title="YouTube Video Player"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Fallback External Link */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <a
            href={rawWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600/90 hover:bg-red-600 text-white rounded-full text-xs sm:text-sm font-bold shadow-xl hover:scale-105 transition-all backdrop-blur-md"
          >
            <ExternalLink className="w-4 h-4" />
            前往 YouTube 完整觀看 ↗
          </a>
        </div>
      </div>
    </div>
  );
}

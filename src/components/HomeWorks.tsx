"use client";

import { useState } from "react";
import { VideoModal } from "@/components/VideoModal";
import { WorksSection } from "@/components/WorksSection";

export function HomeWorks() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <WorksSection onOpenVideo={setActiveVideoUrl} />
      <VideoModal
        isOpen={Boolean(activeVideoUrl)}
        videoUrl={activeVideoUrl}
        onClose={() => setActiveVideoUrl(null)}
      />
    </>
  );
}

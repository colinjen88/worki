"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const VideoModal = dynamic(() => import("@/components/VideoModal").then((mod) => mod.VideoModal), {
  ssr: false,
});
const WorksSection = dynamic(() => import("@/components/WorksSection").then((mod) => mod.WorksSection), {
  ssr: true,
});

export function HomeWorks() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <WorksSection onOpenVideo={setActiveVideoUrl} />
      {activeVideoUrl ? (
        <VideoModal
          isOpen
          videoUrl={activeVideoUrl}
          onClose={() => setActiveVideoUrl(null)}
        />
      ) : null}
    </>
  );
}

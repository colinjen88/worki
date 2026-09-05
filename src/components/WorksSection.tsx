"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowUpRight,
  Play,
  FileText,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { projects, Project, ProjectCategory } from "@/data/projects";

interface WorksSectionProps {
  onOpenVideo?: (url: string) => void;
}

export function WorksSection({ onOpenVideo }: WorksSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: "全部", value: "all" },
    { label: "動態式網頁", value: "dynamic-web" },
    { label: "功能型網站", value: "functional-web" },
    { label: "平面設計", value: "graphic-design" },
    { label: "SEO關鍵字", value: "seo" },
    { label: "動態設計", value: "motion-design" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="works" className="py-24 bg-black/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              精選作品庫
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                    : "border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenVideo={onOpenVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onOpenVideo,
}: {
  project: Project;
  onOpenVideo?: (url: string) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = project.images.length;
  const hasMultipleImages = totalImages > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (project.videoUrl && onOpenVideo) {
      e.preventDefault();
      onOpenVideo(project.videoUrl);
    }
  };

  const isVideo = !!project.videoUrl;
  const isPdf = !!project.pdfUrl;
  const isInProgress = project.status === "in-progress";

  return (
    <article className="group rounded-2xl border border-white/10 bg-[#0b1120] hover:border-indigo-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-xl">
      <div>
        {/* Cover / Carousel Container */}
        <div
          onClick={handleCardClick}
          className={`aspect-[16/10] relative overflow-hidden bg-slate-900 select-none ${
            isVideo || isPdf || project.liveUrl || project.slug
              ? "cursor-pointer"
              : ""
          }`}
        >
          {/* Background Layer for Graphic Design */}
          {project.bgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={project.bgImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              />
            </div>
          )}

          {/* Current Main Image */}
          <div className="relative w-full h-full z-10">
            <Image
              src={project.images[currentImageIndex]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-700 ${
                isPdf ? "object-contain p-6" : "group-hover:scale-105"
              }`}
            />
          </div>

          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />

          {/* Video Play Button Overlay */}
          {isVideo && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-600 transition-all">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* PDF Icon Overlay */}
          {isPdf && (
            <div className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white">
              <FileText className="w-5 h-5 text-indigo-300" />
            </div>
          )}

          {/* In-Progress Status Badge */}
          {isInProgress && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <span className="px-4 py-2 rounded-full border border-white/20 bg-slate-900/80 text-white text-xs font-semibold tracking-wider">
                整理中
              </span>
            </div>
          )}

          {/* Carousel Arrows (if multiple images) */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                aria-label="上一張圖片"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                aria-label="下一張圖片"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Counter / Dots */}
              <div className="absolute bottom-3 left-3 z-30 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-white font-mono">
                {currentImageIndex + 1} / {totalImages}
                {project.imageCaptions && (
                  <span className="ml-2 text-slate-300 hidden sm:inline border-l border-white/20 pl-2">
                    {project.imageCaptions[currentImageIndex]}
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] text-slate-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
        {/* Left Action: Deep Case Study Link if available */}
        <div>
          {project.slug ? (
            <Link
              href={`/work/${project.slug}/`}
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              閱讀案例解析 <span>→</span>
            </Link>
          ) : isVideo ? (
            <button
              onClick={() => onOpenVideo && onOpenVideo(project.videoUrl!)}
              className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              播放動態作品集
            </button>
          ) : isPdf ? (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <FileText className="w-4 h-4" />
              線上檢視 PDF 手冊
            </a>
          ) : null}
        </div>

        {/* Right Action: External Live Site */}
        <div className="flex items-center gap-3">
          {project.showcaseUrl && (
            <a
              href={project.showcaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              開發介紹 <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              線上網站 <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

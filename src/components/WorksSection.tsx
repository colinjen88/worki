"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Play,
  Layers,
} from "lucide-react";
import { projects, type Project, type ProjectFilter } from "@/data/projects";

const filters: { label: string; value: ProjectFilter }[] = [
  { label: "全部", value: "all" },
  { label: "動態式網頁", value: "dynamic-web" },
  { label: "功能型網站", value: "functional-web" },
  { label: "平面設計", value: "graphic-design" },
  { label: "SEO", value: "seo" },
  { label: "動態設計", value: "motion-design" },
];

export function WorksSection({
  onOpenVideo,
}: {
  onOpenVideo: (url: string) => void;
}) {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section id="works" className="section">
      <div className="site-container">
        <div className="works-head">
          <div>
            <p className="eyebrow">
              <Layers size={14} className="eyebrow-icon" /> All works
            </p>
            <h2 className="section-title">完整作品庫</h2>
          </div>
          <div className="filters" role="group" aria-label="作品類別篩選">
            {filters.map(({ label, value }) => {
              const isSelected = filter === value;
              const count =
                value === "all"
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(value)).length;
              return (
                <button
                  className={`filter ${isSelected ? "filter--active" : ""}`}
                  type="button"
                  key={value}
                  aria-pressed={isSelected}
                  onClick={() => setFilter(value)}
                >
                  <span>{label}</span>
                  <span className="filter-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="works-count" role="status">
          顯示 <strong>{filtered.length}</strong> 件作品
        </p>

        {filtered.length ? (
          <div className="works-grid">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenVideo={onOpenVideo}
              />
            ))}
          </div>
        ) : (
          <p className="section-intro">目前沒有符合此分類的作品。</p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onOpenVideo,
}: {
  project: Project;
  onOpenVideo: (url: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const hasMultipleImages = project.images.length > 1;
  const image = project.images[index];
  const caption =
    project.imageCaptions?.[index] ?? `${project.title} 畫面 ${index + 1}`;
  const changeImage = (direction: number) =>
    setIndex(
      (current) =>
        (current + direction + project.images.length) % project.images.length
    );

  return (
    <article className="card project-card">
      <div
        className={`project-media ${
          project.id === "graphic-portfolio" ? "project-media--contain" : ""
        }`}
      >
        <Image
          src={image}
          alt={caption}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1200px) 50vw, 560px"
        />
        {project.status === "in-progress" && (
          <span className="project-state">整理中</span>
        )}
        <span className="media-caption">
          {hasMultipleImages ? `${index + 1}/${project.images.length} · ` : ""}
          {caption}
        </span>
        {hasMultipleImages && (
          <div className="media-nav">
            <button
              className="icon-button"
              type="button"
              aria-label={`上一張圖片，目前為第 ${index + 1} 張`}
              onClick={() => changeImage(-1)}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label={`下一張圖片，目前為第 ${index + 1} 張`}
              onClick={() => changeImage(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="project-body">
        <p className="project-subtitle">{project.subtitle}</p>
        <h3>
          {project.slug ? (
            <Link href={`/work/${project.slug}/`} className="project-title-link">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-actions">
          {project.slug && (
            <Link href={`/work/${project.slug}/`} className="action-btn action-btn--primary">
              <BookOpen size={14} />
              <span>案例解析</span>
            </Link>
          )}
          {project.videoUrl && (
            <button
              type="button"
              className="action-btn"
              onClick={() => onOpenVideo(project.videoUrl!)}
            >
              <Play size={14} />
              <span>播放作品</span>
            </button>
          )}
          {project.pdfUrl && (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <FileText size={14} />
              <span>檢視 PDF</span>
            </a>
          )}
          {project.showcaseUrl && (
            <a
              href={project.showcaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <span>開發介紹</span>
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.liveUrl && project.status !== "in-progress" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <span>線上網站</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

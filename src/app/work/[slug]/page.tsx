import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map(({ slug }) => ({ slug: slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | WANG 案例解析`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />

      <main id="main-content" className="pt-28 pb-20 relative z-10">
        {/* Header Shell */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-12">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            回到作品列表
          </Link>

          <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3">
            Case Study
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery / Screenshots Showcase */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
          <div className="space-y-8">
            {project.images.map((img, idx) => (
              <div
                key={img}
                className="rounded-2xl border border-white/10 bg-[#0b1120] overflow-hidden shadow-2xl relative"
              >
                <div className="aspect-[16/10] relative w-full">
                  <Image
                    src={img}
                    alt={project.imageCaptions?.[idx] || `${project.title} 畫面 ${idx + 1}`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
                {project.imageCaptions?.[idx] && (
                  <div className="p-4 border-t border-white/5 bg-[#0b1120]/90 text-center sm:text-left text-xs sm:text-sm text-slate-300 font-mono">
                    <span className="text-indigo-400 font-bold mr-2">圖 {idx + 1}：</span>
                    {project.imageCaptions[idx]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* In-depth Details & Analysis */}
        {project.details && (
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Role & Live Links */}
              <div className="lg:col-span-4 rounded-2xl bg-[#0b1120] border border-white/10 p-6 sticky top-28 space-y-6">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    個人職責
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {project.details.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    真實性核實
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    本案例為 100% 真實專案，可前往線上真實網站檢驗實際運作狀態與介面。
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/30"
                    >
                      前往線上網站 <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.showcaseUrl && (
                    <a
                      href={project.showcaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-slate-200 font-semibold text-sm transition-colors"
                    >
                      查看 Showcase 開發介紹 <ArrowLeft className="w-4 h-4 rotate-180" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Challenge, Approach & Highlights */}
              <div className="lg:col-span-8 space-y-12">
                {/* 01. Challenge */}
                <section>
                  <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                    01 · Challenge
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">面對的問題與挑戰</h2>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {project.details.challenge}
                  </p>
                </section>

                {/* 02. Approach */}
                <section>
                  <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                    02 · Approach
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">設計與前端實作解法</h2>
                  <div className="space-y-4">
                    {project.details.approach.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <span className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          0{i + 1}
                        </span>
                        <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 03. Highlights */}
                <section>
                  <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                    03 · Highlights
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">核心亮點與成果</h2>
                  <ul className="space-y-3">
                    {project.details.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

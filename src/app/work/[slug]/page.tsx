import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { featuredWork, getWorkCase } from "@/data/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredWork.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const work = getWorkCase((await params).slug);
  if (!work) return {};
  return { title: work.title, description: work.summary, alternates: { canonical: `/work/${work.slug}/` } };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const work = getWorkCase((await params).slug);
  if (!work) notFound();
  return (
    <>
      <SiteHeader />
      <main id="main" className="case-page">
        <header className="case-hero section-shell">
          <Link className="back-link" href="/#work">← 回到精選案例</Link>
          <p className="eyebrow">{work.eyebrow}</p>
          <h1>{work.title}</h1>
          <p className="case-lead">{work.summary}</p>
          <ul className="tag-list" aria-label="專案技能">{work.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </header>
        <div className="case-cover section-shell"><Image src={work.cover} alt={work.coverAlt} fill priority sizes="100vw" /></div>
        <section className="case-content section-shell">
          <aside><p className="eyebrow">Case study · v1</p><p className="evidence-note">{work.verification}</p><a className="button button--primary" href={work.liveUrl} target="_blank" rel="noreferrer">查看線上網站 ↗</a></aside>
          <div>
            <section><p className="eyebrow">01 · Challenge</p><h2>面對的問題</h2><p>{work.challenge}</p></section>
            <section><p className="eyebrow">02 · Approach</p><h2>設計與實作選擇</h2><ol>{work.approach.map((item) => <li key={item}>{item}</li>)}</ol></section>
            <section><p className="eyebrow">03 · Next evidence</p><h2>下一階段補強</h2><p>補入已確認的個人職責、限制條件、流程產物、前後比較與成效；所有數字都必須能追溯來源。</p></section>
          </div>
        </section>
      </main>
    </>
  );
}

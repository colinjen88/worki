import Image from "next/image";
import Link from "next/link";
import type { WorkCase } from "@/data/work";

export function WorkCard({ work, featured = false }: { work: WorkCase; featured?: boolean }) {
  return (
    <article className={`work-card${featured ? " work-card--featured" : ""}`}>
      <Link className="work-card__image" href={`/work/${work.slug}/`} aria-label={`閱讀 ${work.title} 案例`}>
        <Image src={work.cover} alt={work.coverAlt} fill sizes={featured ? "(max-width: 900px) 100vw, 64vw" : "(max-width: 900px) 100vw, 32vw"} />
      </Link>
      <div className="work-card__body">
        <p className="eyebrow">{work.eyebrow}</p>
        <h3><Link href={`/work/${work.slug}/`}>{work.title}</Link></h3>
        <p>{work.summary}</p>
        <ul className="tag-list" aria-label="專案技能">
          {work.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <Link className="text-link" href={`/work/${work.slug}/`}>閱讀案例 <span>↗</span></Link>
      </div>
    </article>
  );
}

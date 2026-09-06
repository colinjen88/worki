import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">404 · Not found</p><h1>這個頁面還沒有被設計。</h1><Link className="button button--primary" href="/">回到首頁</Link><Link className="button button--secondary" href="/#works">查看作品</Link></main>; }

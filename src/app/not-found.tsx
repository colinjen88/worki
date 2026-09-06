import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404 · Not found</p>
      <h1>找不到這個頁面。</h1>
      <p>網址可能已變更，或內容已經移除。</p>
      <div className="not-found__actions">
        <Link className="button button--primary" href="/">回到首頁</Link>
        <Link className="button button--secondary" href="/#works">查看作品</Link>
      </div>
    </main>
  );
}

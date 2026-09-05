export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">下一個值得做好的產品</p>
        <h2>讓我們一起把它<br />做得清楚又漂亮。</h2>
      </div>
      <div className="footer-contact">
        <p>目前尋找前端工程、網頁設計與 UI/UX 相關機會。</p>
        <a href="mailto:service@gowork.run">service@gowork.run ↗</a>
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} WANG · Designed &amp; built with care.</p>
    </footer>
  );
}

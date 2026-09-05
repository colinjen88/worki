export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">跳到主要內容</a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="WANG 作品集首頁">WANG<span>®</span></a>
        <nav aria-label="主要導覽">
          <a href="/#work">案例</a>
          <a href="/#capabilities">能力</a>
          <a href="/#about">關於</a>
        </nav>
        <a className="header-contact" href="mailto:service@gowork.run">聯絡我 ↗</a>
      </header>
    </>
  );
}

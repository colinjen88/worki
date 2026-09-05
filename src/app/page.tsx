import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { featuredWork } from "@/data/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="availability"><span aria-hidden="true" /> Available for new opportunities · Taiwan</p>
            <h1 id="hero-title">設計思維，<br /><em>前端實現。</em></h1>
            <p className="hero__intro">我是 WANG，一位結合網頁設計與 UX 能力的前端工程師。我把複雜需求整理成清楚、細緻，而且真的能落地的數位體驗。</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">查看精選案例 <span>↓</span></a>
              <a className="button button--ghost" href="mailto:service@gowork.run">談談合作 <span>↗</span></a>
            </div>
          </div>
          <div className="hero__visual" aria-label="從需求到驗證的工作流程圖">
            <div className="orbit orbit--outer" />
            <div className="orbit orbit--inner" />
            <div className="process-node process-node--one"><span>01</span>需求</div>
            <div className="process-node process-node--two"><span>02</span>流程</div>
            <div className="process-node process-node--three"><span>03</span>介面</div>
            <div className="process-node process-node--four"><span>04</span>驗證</div>
            <div className="code-note" aria-hidden="true"><span>interface</span> BetterExperience &#123;<br />&nbsp;&nbsp;clear: true;<br />&nbsp;&nbsp;useful: true;<br />&#125;</div>
          </div>
        </section>

        <section className="proof-strip" aria-label="核心價值">
          <p><b>清楚</b><span>理解問題與資訊架構</span></p>
          <p><b>細緻</b><span>視覺、互動與內容節奏</span></p>
          <p><b>落地</b><span>可維護的前端實作</span></p>
        </section>

        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work · 2024—2026</p><h2 id="work-title">不是作品牆，<br />是解題的證據。</h2></div>
            <p>每個案例都從問題、限制與選擇出發，說明設計如何被實作，也誠實標示目前能被驗證的範圍。</p>
          </div>
          <div className="work-grid">
            {featuredWork.map((work, index) => <WorkCard key={work.slug} work={work} featured={index === 0} />)}
          </div>
        </section>

        <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-shell">
            <div className="section-heading section-heading--light">
              <div><p className="eyebrow">How I contribute</p><h2 id="capabilities-title">一個人，串起三種專業。</h2></div>
              <p>從模糊需求到可上線產品，我用同一條思考脈絡連結工程、體驗與視覺。</p>
            </div>
            <div className="capability-grid">
              <article><span>01</span><h3>Frontend<br />Engineering</h3><p>React / Next.js / TypeScript、響應式介面、效能與無障礙，讓設計可靠地進入真實環境。</p></article>
              <article><span>02</span><h3>UI/UX<br />Design</h3><p>從使用情境、資訊架構到互動原型，把「好不好用」轉化為能討論與驗證的決策。</p></article>
              <article><span>03</span><h3>Visual &amp;<br />Motion</h3><p>以版式、色彩、動態節奏建立專業辨識度，並讓每個效果服務內容而不是搶走注意力。</p></article>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <p className="eyebrow">About · WANG</p>
          <div>
            <h2 id="about-title">我在意畫面是否漂亮，<br />更在意它為什麼有效。</h2>
            <div className="about__copy"><p>跨越設計與工程，讓我能更早發現交接落差，也能在限制裡找到兼顧品牌、使用者與開發成本的解法。</p><p>這個新版作品集會持續補入決策脈絡、過程產物與可公開成果；不以華麗效果代替證據。</p></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

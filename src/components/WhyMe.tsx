import { GitMerge, Compass, Sparkles } from "lucide-react";

const points = [
  {
    icon: GitMerge,
    number: "01",
    tag: "SEAMLESS HANDOFF",
    title: "零溝通斷層的高精度交付",
    text: "在設計階段即依據 CSS Box Model、組件化架構與真實資料邊界進行規範。產出的介面自帶 Hover、Active、Loading 與字數溢出等狀態定義，大幅縮短設計與工程端的對齊成本。",
  },
  {
    icon: Compass,
    number: "02",
    tag: "HYBRID PERSPECTIVE",
    title: "視覺、動效與代碼的複合視野",
    text: "能獨立完成從靜態視覺排版、Lottie / SVGA 微動效製作，到現代前端架構落地的全流程。不需要在多個角色之間轉發溝通，就能在第一時間以可執行的代碼還原精緻質感。",
  },
  {
    icon: Sparkles,
    number: "03",
    tag: "CRAFTSMANSHIP",
    title: "重視手感，拒絕無意義的裝飾",
    text: "不盲目追求浮誇炫技，而是將動態與視覺用於引導使用者視線焦點。每一個緩動曲線、間距比例與邊緣狀況（Edge Cases），都經過細膩調校，打造耐看且經得起操作的產品。",
  },
];

export function WhyMe() {
  return (
    <section id="whyme" className="section whyme-section">
      <div className="site-container">
        <p className="eyebrow">Work Philosophy</p>
        <h2 className="section-title">
          <span className="text-nowrap">專業技術之外，</span>
          <br className="desktop-br" />
          <span className="text-nowrap">更在乎產品的完成度與手感。</span>
        </h2>
        <p className="section-intro">
          好的作品不是靠華麗的 buzzwords 堆砌，而是來自在每一處看不見的細節裡，都有為真實使用者設想的用心。
        </p>
        <div className="why-grid">
          {points.map(({ icon: Icon, number, tag, title, text }) => (
            <article className="card why-card" key={number}>
              <div className="why-card__top">
                <span className="why-number">{number}</span>
                <span className="why-tag">{tag}</span>
              </div>
              <div className="why-icon-wrap">
                <Icon size={24} className="why-icon" aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { GitMerge, Compass, Sparkles } from "lucide-react";

const points = [
  {
    icon: GitMerge,
    number: "01",
    tag: "SEAMLESS HANDOFF",
    title: "把互動規格說清楚",
    text: "在設計階段定義 Hover、Active、Loading、錯誤與內容溢出狀態，讓實作與驗收都有明確依據。",
  },
  {
    icon: Compass,
    number: "02",
    tag: "HYBRID PERSPECTIVE",
    title: "從視覺走到可執行程式",
    text: "能從視覺排版與 Lottie / SVGA 動效一路處理到前端元件，及早發現設計與瀏覽器實作之間的落差。",
  },
  {
    icon: Sparkles,
    number: "03",
    tag: "CRAFTSMANSHIP",
    title: "讓動態服務操作",
    text: "依資訊層級安排轉場、回饋與節奏，並檢查不同裝置、鍵盤操作及減少動態效果設定下的使用體驗。",
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
          作品的完成度來自可驗證的細節：內容是否清楚、互動是否有回饋，以及不同裝置與操作方式能否順利使用。
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

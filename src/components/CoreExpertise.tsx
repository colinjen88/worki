import { Layout, Zap, Code2, Check } from "lucide-react";

const skills = [
  "Figma (Design System)",
  "Lottie / SVGA",
  "After Effects",
  "Next.js 16",
  "TypeScript",
  "Semantic CSS",
  "Illustrator",
  "Photoshop",
  "RWD Architecture",
  "Micro-interactions",
];

const cards = [
  {
    icon: Layout,
    tag: "DESIGN & STRUCTURE",
    title: "UI/UX 與響應式介面設計",
    text: "善於梳理複雜的資訊層級，並以元件化思維在 Figma 中建立完整的設計系統。從 375px 手機版到超寬螢幕，皆確保文字行氣、間距比例與操作路徑符合人體工學。",
    points: [
      "Figma Auto Layout & 元件狀態定義",
      "全裝置 RWD 斷點與字級比例階梯",
      "注重邊界情境（Edge Cases）與無障礙體驗",
    ],
  },
  {
    icon: Zap,
    tag: "MOTION & TIMING",
    title: "微動效與互動節奏掌控",
    text: "源自早期 Flash / Animate 動態設計的深厚底子，對幀率、時間差（Stagger）與緩動曲線（Easing）具備敏銳手感。不追求多餘炫技，只在必要處給予使用者明確的操作反饋。",
    points: [
      "Lottie / SVGA 輕量化動效整合",
      "CSS Keyframes & Spring 彈性物理反饋",
      "頁面轉場與狀態切換流暢度調優",
    ],
  },
  {
    icon: Code2,
    tag: "ENGINEERING",
    title: "現代前端架構落地實作",
    text: "以 Next.js、React 與 TypeScript 為核心，評估設計可行性並親自實作交付。能獨立完成靜態網站產生（SSG）、效能最佳化、SEO 結構化資料建置與跨瀏覽器相容測試。",
    points: [
      "Next.js 16 靜態導出與元件化開發",
      "純淨無依賴語意化 CSS 架構",
      "高度還原設計細節，告別前端交付縮水",
    ],
  },
];

export function CoreExpertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="site-container expertise-layout">
        <div className="expertise-intro">
          <p className="eyebrow">Toolkit &amp; Crafts</p>
          <h2 className="section-title">
            <span className="text-nowrap">設計感性與工程理性的</span>
            <br className="desktop-br" />
            <span className="text-nowrap">跨領域實踐手藝。</span>
          </h2>
          <p className="section-intro">
            不只追求視覺上的完美截圖，更在乎點擊時的手感、各螢幕尺寸下的自適應，以及程式碼在真實瀏覽器中的運行品質。
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="tag tag--craft">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="expertise-grid">
          {cards.map(({ icon: Icon, tag, title, text, points }) => (
            <article key={title} className="card expertise-card">
              <div className="expertise-card__head">
                <span className="expertise-icon">
                  <Icon size={22} />
                </span>
                <span className="expertise-card__tag">{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              {points && (
                <ul className="expertise-points">
                  {points.map((point) => (
                    <li key={point}>
                      <Check size={14} className="point-icon" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

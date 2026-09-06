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
    text: "梳理資訊層級，並以元件化思維在 Figma 中建立設計系統；針對手機、桌面與長短內容調整排版和操作路徑。",
    points: [
      "Figma Auto Layout & 元件狀態定義",
      "RWD 斷點、字級比例與內容溢出處理",
      "注重邊界情境（Edge Cases）與無障礙體驗",
    ],
  },
  {
    icon: Zap,
    tag: "MOTION & TIMING",
    title: "微動效與互動節奏掌控",
    text: "早期以 Flash / Animate 製作動態內容，現在將時間差（Stagger）與緩動曲線（Easing）運用在介面引導和操作回饋。",
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
    text: "以 Next.js、React 與 TypeScript 評估設計可行性並完成實作，涵蓋靜態輸出、效能調整、SEO 結構化資料與瀏覽器檢查。",
    points: [
      "Next.js 16 靜態導出與元件化開發",
      "語意化 HTML 與可維護的 CSS 架構",
      "依真實資料驗證元件與邊界狀態",
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

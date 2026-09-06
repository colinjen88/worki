import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/projects";

export function Hero() {
  return (
    <section id="about" className="site-container hero">
      <div className="hero-content">
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="status-dot" aria-hidden="true" />
          <span className="hero-badge-title">{personalInfo.title}</span>
          <span className="hero-badge-sep" aria-hidden="true">
            /
          </span>
          <span className="hero-badge-sub">Design × Code Synergy</span>
        </div>

        <h1 className="hero-heading">
          設計思維，
          <br />
          <span className="hero-emphasis">前端完整實現。</span>
        </h1>

        <p className="hero-lead">
          懂設計的視覺語言，也懂前端的程式邊界。不只把畫面畫得精緻，更能以俐落架構與細膩微動態完整落地。
        </p>

        <div className="hero-copy">
          {personalInfo.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Craftsmanship Metrics Strip */}
        <div className="hero-metrics-bar">
          <div className="hero-metric-item">
            <span className="metric-headline">雙棲跨域</span>
            <span className="metric-caption">Figma 構建 ↔ 乾淨語意化代碼</span>
          </div>
          <div className="hero-metric-divider" aria-hidden="true" />
          <div className="hero-metric-item">
            <span className="metric-headline">動效底蘊</span>
            <span className="metric-caption">時差 (Stagger) 與緩動曲線調校</span>
          </div>
          <div className="hero-metric-divider" aria-hidden="true" />
          <div className="hero-metric-item">
            <span className="metric-headline">無斷層交付</span>
            <span className="metric-caption">邊緣狀況與多螢幕響應實作</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#featured" className="button button--primary">
            <span>瀏覽精選案例</span>
            <ArrowDown size={16} className="btn-icon-bounce" />
          </a>
          <a href="#expertise" className="button button--secondary">
            <span>了解核心技術鏈</span>
            <ArrowRight size={16} className="btn-icon-slide" />
          </a>
        </div>
      </div>

      {/* Concrete work scope: planning, design, and implementation */}
      <aside className="hero-strengths-card" aria-label="網站規劃、設計與前端實作範圍">
        {/* Top Header */}
        <div className="strengths-card__header">
          <div className="strengths-card__status">
            <span className="status-live-dot" aria-hidden="true" />
            <span className="strengths-card__time">DESIGN × FRONTEND</span>
          </div>
          <span className="strengths-card__badge">WORK SCOPE</span>
        </div>

        {/* Card Title & Intro */}
        <div className="strengths-card__lead">
          <h2 className="strengths-card__title">從需求到上線，我能協助的工作</h2>
          <p className="strengths-card__desc">
            涵蓋 UI/UX 規劃、前台與後台程式功能建置、SEO 優化到伺服器部署上線，提供完整的端到端交付。
          </p>
        </div>

        {/* Three concrete stages that match the portfolio's demonstrated work */}
        <div className="strengths-card__list">
          {/* Item 1: planning */}
          <article className="strength-item">
            <div className="strength-item__icon-box strength-item__icon-box--brand">
              <Layers size={20} className="strength-icon" />
            </div>
            <div className="strength-item__content">
              <div className="strength-item__header">
                <h3 className="strength-item__title">需求整理與介面規劃</h3>
                <span className="strength-tag">Planning</span>
              </div>
              <p className="strength-item__text">
                釐清網站目標、內容優先順序與操作流程，先把頁面架構、功能範圍和 RWD 方向定清楚。
              </p>
              <div className="strength-tags-row">
                <span className="strength-subtag">內容架構</span>
                <span className="strength-subtag">Wireframe</span>
                <span className="strength-subtag">RWD 規劃</span>
              </div>
            </div>
          </article>

          {/* Item 2: interface and motion design */}
          <article className="strength-item">
            <div className="strength-item__icon-box strength-item__icon-box--accent">
              <Sparkles size={20} className="strength-icon" />
            </div>
            <div className="strength-item__content">
              <div className="strength-item__header">
                <h3 className="strength-item__title">UI 設計與動效製作</h3>
                <span className="strength-tag">Design</span>
              </div>
              <p className="strength-item__text">
                以 Figma 完成視覺與元件規格，並依內容與操作需求製作 Lottie、SVGA 或 CSS 微動效。
              </p>
              <div className="strength-tags-row">
                <span className="strength-subtag">Figma</span>
                <span className="strength-subtag">Design System</span>
                <span className="strength-subtag">Lottie / SVGA</span>
              </div>
            </div>
          </article>

          {/* Item 3: full-stack delivery */}
          <article className="strength-item">
            <div className="strength-item__icon-box strength-item__icon-box--success">
              <ShieldCheck size={20} className="strength-icon" />
            </div>
            <div className="strength-item__content">
              <div className="strength-item__header">
                <h3 className="strength-item__title">全端開發、SEO 與正式上線</h3>
                <span className="strength-tag">Full-stack Delivery</span>
              </div>
              <p className="strength-item__text">
                從前端介面、後端功能與資料串接，到網域、CDN、部署及技術 SEO，能獨立完成網站開發並正式上線。
              </p>
              <div className="strength-tags-row">
                <span className="strength-subtag">前後端開發</span>
                <span className="strength-subtag">CDN / 部署</span>
                <span className="strength-subtag">Technical SEO</span>
              </div>
            </div>
          </article>
        </div>

        {/* Footer Guarantee Bar */}
        <div className="strengths-card__footer">
          <div className="strengths-footer-badge">
            <CheckCircle2 size={15} className="check-icon" />
            <span>合作範圍：品牌官網、功能型網站、內容型網站、活動頁與既有網站改版</span>
          </div>
          <a href="#featured" className="strengths-footer-link">
            <span>看實際案例</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </aside>
    </section>
  );
}

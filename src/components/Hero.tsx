"use client";

import { useEffect, useState } from "react";
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
  const [currentTime, setCurrentTime] = useState("");
  const [activeStateDemo, setActiveStateDemo] = useState<"hover" | "active" | "loading" | "normal">("normal");

  // Live Taipei Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Taipei",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Core Strengths & Delivery Standards Showcase (清晰強調特點卡片) */}
      <aside className="hero-strengths-card" aria-label="核心強調特點與交付規範">
        {/* Top Header */}
        <div className="strengths-card__header">
          <div className="strengths-card__status">
            <span className="status-live-dot" aria-hidden="true" />
            <span className="strengths-card__time">
              TAIPEI {currentTime ? `• ${currentTime}` : ""}
            </span>
          </div>
          <span className="strengths-card__badge">CORE STRENGTHS</span>
        </div>

        {/* Card Title & Intro */}
        <div className="strengths-card__lead">
          <h2 className="strengths-card__title">三大核心專業特質</h2>
          <p className="strengths-card__desc">
            在設計語言與前端工程之間無縫架橋，落實具體、可驗證的交付品質。
          </p>
        </div>

        {/* The 3 Core Strengths (保留並凸顯使用者指定文案) */}
        <div className="strengths-card__list">
          {/* Item 1: 零溝通斷層的交付 */}
          <article className="strength-item">
            <div className="strength-item__icon-box strength-item__icon-box--brand">
              <Layers size={20} className="strength-icon" />
            </div>
            <div className="strength-item__content">
              <div className="strength-item__header">
                <h3 className="strength-item__title">零溝通斷層的交付</h3>
                <span className="strength-tag">Design System</span>
              </div>
              <p className="strength-item__text">
                設計時已定義好所有 Hover、Active、Loading 與極限狀態，省去工程來回確認。
              </p>
              {/* Interactive micro state preview demo */}
              <div className="strength-states-demo">
                <span className="states-demo-label">互動狀態預覽：</span>
                <div className="states-demo-pills" role="group" aria-label="狀態預覽展示">
                  <span
                    className={`demo-pill ${activeStateDemo === "hover" ? "demo-pill--hover" : ""}`}
                    onMouseEnter={() => setActiveStateDemo("hover")}
                    onMouseLeave={() => setActiveStateDemo("normal")}
                  >
                    Hover
                  </span>
                  <span
                    className={`demo-pill ${activeStateDemo === "active" ? "demo-pill--active" : ""}`}
                    onMouseDown={() => setActiveStateDemo("active")}
                    onMouseUp={() => setActiveStateDemo("normal")}
                  >
                    Active
                  </span>
                  <span
                    className={`demo-pill ${activeStateDemo === "loading" ? "demo-pill--loading" : ""}`}
                    onClick={() => {
                      setActiveStateDemo("loading");
                      setTimeout(() => setActiveStateDemo("normal"), 1200);
                    }}
                  >
                    {activeStateDemo === "loading" ? "Loading..." : "Loading"}
                  </span>
                  <span className="demo-pill demo-pill--default">Empty / Error</span>
                </div>
              </div>
            </div>
          </article>

          {/* Item 2: 動態不炫技，專注引導 */}
          <article className="strength-item">
            <div className="strength-item__icon-box strength-item__icon-box--accent">
              <Sparkles size={20} className="strength-icon" />
            </div>
            <div className="strength-item__content">
              <div className="strength-item__header">
                <h3 className="strength-item__title">動態不炫技，專注引導</h3>
                <span className="strength-tag">Motion &amp; Timing</span>
              </div>
              <p className="strength-item__text">
                以精準的緩動（Easing）與時間差，引導使用者視覺焦點與操作直覺。
              </p>
              <div className="strength-tags-row">
                <span className="strength-subtag">Fluid Easing</span>
                <span className="strength-subtag">Stagger 節奏時差</span>
                <span className="strength-subtag">60/120fps 硬體加速</span>
              </div>
            </div>
          </article>

          {/* Item 3: 邊界狀況（Edge Cases）全維護 */}
          <article className="strength-item">
            <div className="strength-item__icon-box strength-item__icon-box--success">
              <ShieldCheck size={20} className="strength-icon" />
            </div>
            <div className="strength-item__content">
              <div className="strength-item__header">
                <h3 className="strength-item__title">邊界狀況（Edge Cases）全維護</h3>
                <span className="strength-tag">RWD &amp; A11y</span>
              </div>
              <p className="strength-item__text">
                重視小尺寸手機版、字數溢出折行、高對比無障礙與鍵盤焦點操作。
              </p>
              <div className="strength-tags-row">
                <span className="strength-subtag">320px+ 極限響應</span>
                <span className="strength-subtag">文字換行排版</span>
                <span className="strength-subtag">無障礙焦點導航</span>
              </div>
            </div>
          </article>
        </div>

        {/* Footer Guarantee Bar */}
        <div className="strengths-card__footer">
          <div className="strengths-footer-badge">
            <CheckCircle2 size={15} className="check-icon" />
            <span>嚴謹交付承諾：全專案皆遵循上述工程與設計標準落地</span>
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

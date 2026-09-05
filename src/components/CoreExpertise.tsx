import { Layout, Zap, Code, CheckCircle2 } from "lucide-react";

function FigmaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor"/>
    </svg>
  );
}

export function CoreExpertise() {
  const skills = [
    "Figma",
    "SVGA",
    "Lottie",
    "Illustrator",
    "Photoshop",
    "After Effects",
    "HTML / CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ];

  return (
    <section id="expertise" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Skill Tags */}
          <div className="lg:col-span-4">
            <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3">
              Core Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              設計、動效與程式的
              <br />
              綜合能力。
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              我注重使用者體驗，追求核心問題的發掘和解決，致力於設計的「適用性」。從規劃設計到網站實現，確保設計品質不打折。
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-300 font-mono hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Specialty Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: UI/UX (Full Width on 2-col) */}
            <div className="md:col-span-2 rounded-2xl bg-[#0b1120] border border-white/10 p-8 relative overflow-hidden group hover:border-indigo-500/40 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <Layout className="w-40 h-40 text-white" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20">
                  <FigmaIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  UI/UX &amp; 響應式設計 (RWD)
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base max-w-2xl">
                  具備{" "}
                  <span className="text-white font-semibold">
                    獨立製作 RWD 響應式網頁
                  </span>{" "}
                  的能力與實務經驗。熟悉 Figma、Photoshop、Illustrator
                  等設計工具。我追求使用者體驗的核心問題發掘和解決，設計的「適用性」是首要考量。
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300 text-xs sm:text-sm pt-2 border-t border-white/5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>獨立完成 Web/Mobile RWD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>UI 設計與團隊協作良好</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>分析規劃與問題解決</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Motion */}
            <div className="rounded-2xl bg-[#0b1120] border border-white/10 p-7 sm:p-8 group hover:border-pink-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Motion &amp; 動效專長
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  曾有{" "}
                  <span className="text-white font-medium">
                    多年 Flash/Animate 專職經驗
                  </span>
                  ，動效設計是我的拿手項目。現專精於{" "}
                  <span className="text-white font-medium">
                    Lottie 與 SVGA 動畫製作
                  </span>
                  ，能為產品加入細膩的微互動
                  (Micro-interactions)，大幅提升產品質感與品牌辨識度。
                </p>
              </div>
            </div>

            {/* Card 3: Frontend */}
            <div className="rounded-2xl bg-[#0b1120] border border-white/10 p-7 sm:p-8 group hover:border-blue-400/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Frontend 開發經驗
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  擁有{" "}
                  <span className="text-white font-medium">
                    實際前端開發經驗
                  </span>
                  ，
                  <span className="text-white font-medium">
                    HTML/CSS 極度熟悉，並掌握現代 TypeScript 與 React/Next.js
                  </span>
                  。在設計階段即考量切版可行性與元件復用性，能大幅降低與工程師的溝通成本，確保設計落地無縫。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

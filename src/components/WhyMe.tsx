"use client";

import { Users, Lightbulb, GitMerge } from "lucide-react";

export function WhyMe() {
  const points = [
    {
      num: "01",
      icon: Users,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      title: "多年團隊協作經驗",
      description:
        "擁有多年 Web/Mobile 團隊協作開發經驗，習慣與 PM、前後端工程師緊密合作。溝通良好、樂於接受挑戰，能適應遠端或混合辦公模式，確保專案按時且高質量推進。",
    },
    {
      num: "02",
      icon: Lightbulb,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      title: "解決問題的設計思維",
      description:
        "注重使用者體驗，追求核心問題的發掘和解決，而非只追求視覺表象。致力於提供符合商業目標、使用者直覺與工程開發成本的高「適用性」設計方案。",
    },
    {
      num: "03",
      icon: GitMerge,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/20",
      title: "技術與設計的翻譯機",
      description:
        "擁有實際前端開發經驗（精通 HTML/CSS、現代 JavaScript 與組件化思維），能精準評估設計落地的技術可行性，不僅大幅減少跨職能來回溝通成本，更能協助團隊提升整體交付效率。",
    },
  ];

  return (
    <section id="whyme" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3">
            Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            專業技能之外，
            <br />
            更重視溝通與協作。
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            優秀的產品不只來自獨立的能力，更來自順暢的團隊協作與跨領域理解。
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.num}
                className="rounded-2xl border border-white/10 bg-[#0b1120] p-8 hover:border-white/20 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${point.bgColor} ${point.borderColor} border`}
                    >
                      <Icon className={`w-6 h-6 ${point.color}`} />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-500">
                      {point.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowDown, ArrowRight, Code2 } from "lucide-react";
import { personalInfo } from "@/data/projects";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Watermark */}
      <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden opacity-[0.03]">
        <span className="text-[18vw] font-black tracking-tighter leading-none whitespace-nowrap text-white font-mono">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Intro */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-start sm:items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8 hover:border-indigo-500/40 transition-colors">
              <span className="relative flex h-3 w-3 mt-1 sm:mt-0 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </span>
              <div className="text-xs sm:text-sm text-slate-300 leading-snug">
                <span className="text-white font-bold block sm:inline">
                  {personalInfo.title}
                </span>{" "}
                <span className="text-slate-400">| #SEO #前端 #設計 #動效</span>
                <span className="block text-xs text-slate-400 mt-1">
                  {personalInfo.statusDescription}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              設計思維，
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                前端完整實現。
              </span>
            </h1>

            {/* Subheadline with Key Points */}
            <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              <p>
                我是前端設計師 / 工程師，擁有{" "}
                <span className="text-white font-semibold border-b border-indigo-500/40 pb-0.5">
                  多年 Web / Mobile 團隊協作開發經驗
                </span>
                ，主要負責網頁設計、UI/UX 設計及各類動效製作。
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                熟練 Figma、Photoshop、Illustrator、After Effects、Antigravity 等工具，並具備{" "}
                <span className="text-white font-medium">獨立製作開發網站與佈署</span>{" "}
                的實務能力。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
              >
                瀏覽精選作品 <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] backdrop-blur-sm"
              >
                了解核心職能 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

              <div className="relative rounded-2xl bg-[#0b1120] border border-white/10 shadow-2xl overflow-hidden">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.03]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    designer.config.ts
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">TypeScript</div>
                </div>

                {/* Code Content */}
                <div className="p-5 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-[#0b1120]/90">
                  <pre className="text-slate-300">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-indigo-300 font-bold">designerProfile</span> = &#123;
                    {"\n"}  <span className="text-slate-400">name</span>:{" "}
                    <span className="text-emerald-300">&apos;WANG&apos;</span>,
                    {"\n"}  <span className="text-slate-400">role</span>:{" "}
                    <span className="text-emerald-300">&apos;Hybrid UI/UX Designer &amp; Dev&apos;</span>,
                    {"\n"}
                    {"\n"}  <span className="text-slate-500">// 核心能力矩陣</span>
                    {"\n"}  <span className="text-slate-400">capabilities</span>: [
                    {"\n"}    <span className="text-emerald-300">&apos;UI Design &amp; RWD&apos;</span>,{" "}
                    <span className="text-slate-500">// 獨立製作能力</span>
                    {"\n"}    <span className="text-emerald-300">&apos;Motion (Lottie/SVGA)&apos;</span>,{" "}
                    <span className="text-slate-500">// Flash/Animate 背景</span>
                    {"\n"}    <span className="text-emerald-300">&apos;Frontend (HTML/CSS)&apos;</span>{" "}
                    <span className="text-slate-500">// 實際開發經驗</span>
                    {"\n"}  ],
                    {"\n"}
                    {"\n"}  <span className="text-slate-500">// 熟練工具</span>
                    {"\n"}  <span className="text-slate-400">tools</span>: [
                    {"\n"}    <span className="text-emerald-300">&apos;Figma&apos;</span>,{" "}
                    <span className="text-emerald-300">&apos;Photoshop&apos;</span>,{" "}
                    <span className="text-emerald-300">&apos;Illustrator&apos;</span>,{" "}
                    <span className="text-emerald-300">&apos;AE&apos;</span>
                    {"\n"}  ],
                    {"\n"}
                    {"\n"}  <span className="text-slate-500">// 團隊協作特質</span>
                    {"\n"}  <span className="text-slate-400">traits</span>: &#123;
                    {"\n"}    <span className="text-slate-400">communication</span>:{" "}
                    <span className="text-purple-400">true</span>,{" "}
                    <span className="text-slate-500">// 溝通良好</span>
                    {"\n"}    <span className="text-slate-400">collaboration</span>:{" "}
                    <span className="text-purple-400">true</span>,{" "}
                    <span className="text-slate-500">// 多年協作經驗</span>
                    {"\n"}    <span className="text-slate-400">challengeAccepted</span>:{" "}
                    <span className="text-purple-400">true</span>
                    {"\n"}  &#125;,
                    {"\n"}
                    {"\n"}  <span className="text-slate-400">goal</span>:{" "}
                    <span className="text-emerald-300">&apos;Build impactful products&apos;</span>
                    {"\n"}&#125;;
                    {"\n"}
                    {"\n"}
                    <span className="text-indigo-300 font-bold">designerProfile</span>.
                    <span className="text-yellow-300">init</span>();
                    <span className="inline-block w-2 h-4 bg-indigo-400 ml-1.5 align-middle animate-pulse" />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

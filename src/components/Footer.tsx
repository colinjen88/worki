"use client";

import { useState } from "react";
import { Mail, MessageCircle, Copy, Check } from "lucide-react";
import { personalInfo } from "@/data/projects";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer id="contact" className="py-24 border-t border-white/5 bg-black/50 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to collaborate?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          如果您正在尋找一位善於團隊合作，也能獨立作業、懂技術的設計師 / 前端工程師，歡迎與我聯繫，聊聊我們可以如何一起創造價值，感恩。
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* Copy Email Button Group */}
          <div className="flex items-center gap-2 relative">
            <button
              onClick={handleCopyEmail}
              aria-label="複製 Email"
              className="px-4 py-3.5 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.04] hover:bg-white/10 transition-all text-white font-medium flex items-center justify-center gap-2 group"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-slate-300 group-hover:text-white" />
              )}
              <span className="text-xs sm:text-sm font-semibold">
                {copied ? "已複製" : "複製"}
              </span>

              {/* Tooltip */}
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-md shadow-lg whitespace-nowrap animate-fadeIn">
                  已複製 e-mail！
                </span>
              )}
            </button>

            {/* Direct Mailto Link */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm sm:text-base hover:bg-slate-100 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <Mail className="w-4 h-4 text-slate-900" />
              {personalInfo.email}
            </a>
          </div>

          {/* LINE Button */}
          <a
            href={personalInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full border border-white/10 hover:border-emerald-500/40 bg-white/[0.04] hover:bg-emerald-500/10 transition-all text-white font-medium text-sm sm:text-base flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            LINE ID: {personalInfo.lineId}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs sm:text-sm border-t border-white/5 pt-8 font-mono">
          &copy; {new Date().getFullYear()} Designed &amp; Coded by {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

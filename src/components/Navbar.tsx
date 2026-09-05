"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/projects";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        跳至主要內容
      </a>

      <nav
        className={`fixed top-5 left-0 right-0 max-w-5xl mx-auto w-[92%] z-50 transition-all duration-300 ${
          scrolled ? "top-3" : "top-5"
        }`}
        aria-label="主要導覽"
      >
        <div className="nav-glass rounded-full border border-white/10 shadow-2xl backdrop-blur-xl px-2 bg-[#0b1120]/80">
          <div className="flex justify-between items-center h-16 px-5 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold text-white tracking-tight flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-indigo-500/30">
                P.
              </div>
              <span className="font-mono tracking-wider font-extrabold text-sm sm:text-base">
                {personalInfo.name}
                <span className="text-indigo-400">.</span>PORTFOLIO
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
              <a
                href="#about"
                className="px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
              >
                關於我
              </a>
              <a
                href="#expertise"
                className="px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
              >
                核心職能
              </a>
              <a
                href="#works"
                className="px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
              >
                精選作品
              </a>
              <a
                href="#whyme"
                className="px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
              >
                個人特點
              </a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                聯絡我 <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="切換選單"
                className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden mx-auto w-full transition-all animate-fadeIn">
            <div className="flex flex-col space-y-2 text-base font-medium">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/5 transition-colors"
              >
                關於我
              </a>
              <a
                href="#expertise"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/5 transition-colors"
              >
                核心職能
              </a>
              <a
                href="#works"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/5 transition-colors"
              >
                精選作品
              </a>
              <a
                href="#whyme"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/5 transition-colors"
              >
                個人特點
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-indigo-400 font-bold hover:bg-indigo-500/10 transition-colors flex items-center justify-between"
              >
                聯絡我 <span>↗</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

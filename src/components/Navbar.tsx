"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { personalInfo } from "@/data/projects";

const navItems = [
  { label: "關於我", id: "about", href: "/#about" },
  { label: "核心技術", id: "expertise", href: "/#expertise" },
  { label: "精選案例", id: "featured", href: "/#featured" },
  { label: "完整作品", id: "works", href: "/#works" },
  { label: "工作哲學", id: "whyme", href: "/#whyme" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isThemeMounted, setIsThemeMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isCaseStudy = pathname?.startsWith("/work/");
  const isDark = resolvedTheme === "dark";

  useEffect(() => setIsThemeMounted(true), []);

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // ScrollSpy on homepage
  useEffect(() => {
    if (isCaseStudy) return;

    const sectionIds = ["about", "expertise", "featured", "works", "whyme", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCaseStudy]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="site-nav" aria-label="主要導覽">
        <div className="nav-surface">
          <Link href="/" className="nav-brand" onClick={closeMenu}>
            <span className="nav-mark">W.</span>
            <span>
              {personalInfo.name}
              <span className="nav-brand-suffix">.STUDIO</span>
            </span>
          </Link>

          {isCaseStudy ? (
            <div className="nav-case-badge">
              <span className="nav-case-dot" aria-hidden="true" />
              <span>案例深度解析</span>
            </div>
          ) : (
            <div className="nav-links">
              {navItems.map(({ label, id, href }) => {
                const isActive = !isCaseStudy && activeSection === id;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          )}

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              aria-label={isThemeMounted && isDark ? "切換至亮色模式" : "切換至深色模式"}
              title={isThemeMounted && isDark ? "切換至亮色模式" : "切換至深色模式"}
              onClick={toggleTheme}
            >
              {isThemeMounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {isCaseStudy ? (
              <Link href="/#works" className="button button--secondary button--sm nav-case-return">
                <ArrowLeft size={14} /> 回作品庫
              </Link>
            ) : null}

            <Link href="/#contact" className="button button--primary button--sm nav-cta">
              <span>開始合作</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              className="nav-toggle"
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "關閉選單" : "開啟選單"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="nav-menu">
            {isCaseStudy && (
              <Link href="/#works" onClick={closeMenu} className="nav-menu-case-link">
                <ArrowLeft size={16} /> 返回完整作品庫
              </Link>
            )}
            {navItems.map(({ label, href }) => (
              <Link key={href} href={href} onClick={closeMenu}>
                {label}
              </Link>
            ))}
            <div className="nav-menu-footer">
              <button
                type="button"
                className="mobile-theme-btn"
                onClick={toggleTheme}
              >
                {isThemeMounted && isDark ? <Sun size={15} /> : <Moon size={15} />}
                <span>{isThemeMounted && isDark ? "切換至亮色模式" : "切換至深色模式"}</span>
              </button>
              <Link href="/#contact" onClick={closeMenu} className="mobile-cta-link">
                聯絡我
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

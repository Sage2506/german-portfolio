"use client";
import { Moon, Sun } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      aria-label={language === "en" ? "Main navigation" : "Navegacion principal"}
      className="flex items-center justify-between gap-4 py-6 mb-8 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <Link href="#hero" className="text-base font-bold pl-4">
        Germán Salazar
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="#metrics" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Metrics" : "Métricas"}
        </Link>
        <Link href="#philosophy" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Philosophy" : "Filosofía"}
        </Link>
        <Link href="#skills" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Skills" : "Habilidades"}
        </Link>
        <Link href="#featured-project" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Featured Project" : "Proyecto Destacado"}
        </Link>
        <Link href="#projects-grid" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Projects" : "Proyectos"}
        </Link>
        <Link href="#experience" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Experience" : "Experiencia"}
        </Link>
        <Link href="#education" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Education" : "Educación"}
        </Link>
        <Link href="#contact" className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900">
          {language === "en" ? "Contact" : "Contacto"}
        </Link>
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={
            language === "en" ? "Cambiar a español" : "Switch to English"
          }
          className="inline-flex min-h-11 items-center justify-center rounded px-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
        >
          {language.toUpperCase()}
        </button>
        <button
          type="button"
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          aria-label={language === "en" ? "Toggle theme" : "Cambiar tema"}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
        >
          <Sun aria-hidden="true" className="hidden dark:block" />
          <Moon aria-hidden="true" className="block dark:hidden" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
        aria-expanded={isMenuOpen}
        aria-label={language === "en" ? "Toggle menu" : "Alternar menú"}
      >
        <span className="sr-only">{language === "en" ? "Toggle menu" : "Alternar menú"}</span>
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 h-screen bg-white dark:bg-gray-900 pt-16 z-40 flex flex-col items-start justify-start gap-4 w-full max-w-sm">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-md p-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
            aria-label={language === "en" ? "Close menu" : "Cerrar menú"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="w-full flex flex-col items-start justify-start gap-4 pt-16">
            <Link href="#metrics" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Metrics" : "Métricas"}
            </Link>
            <Link href="#philosophy" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Philosophy" : "Filosofía"}
            </Link>
            <Link href="#skills" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Skills" : "Habilidades"}
            </Link>
            <Link href="#featured-project" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Featured Project" : "Proyecto Destacado"}
            </Link>
            <Link href="#projects-grid" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Projects" : "Proyectos"}
            </Link>
            <Link href="#experience" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Experience" : "Experiencia"}
            </Link>
            <Link href="#education" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Education" : "Educación"}
            </Link>
            <Link href="#contact" onClick={closeMenu} className="inline-flex min-h-11 items-center justify-start rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full text-left py-4 pl-6">
              {language === "en" ? "Contact" : "Contacto"}
            </Link>
            <div className="w-full flex justify-center gap-4 p-4 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
              <a
                            href="https://www.linkedin.com/in/german-salazar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="inline-flex size-11 shrink-0 items-center justify-center rounded hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
                          >
                            <LinkedinIcon aria-hidden="true" />
                          </a>
              <a
                            href="https://github.com/germansalazar"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="inline-flex size-11 shrink-0 items-center justify-center rounded hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
                          >
                            <GithubIcon aria-hidden="true" />
                          </a>
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={
                  language === "en" ? "Cambiar a español" : "Switch to English"
                }
                className="inline-flex min-h-11 items-center justify-center rounded px-2 text-base font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900 w-full max-w-[80px]"
              >
                {language.toUpperCase()}
              </button>
              <button
                        type="button"
                        onClick={() =>
                          setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        }
                        aria-label={language === "en" ? "Toggle theme" : "Cambiar tema"}
                        className="inline-flex size-11 shrink-0 items-center justify-center rounded hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-900"
                      >
                        <Sun aria-hidden="true" className="hidden dark:block" />
                        <Moon aria-hidden="true" className="block dark:hidden" />
                      </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

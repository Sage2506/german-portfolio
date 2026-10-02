"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      aria-label={language === "en" ? "Main navigation" : "Navegacion principal"}
      className="flex items-center justify-between gap-4 py-6 mb-8 border-b border-neutral-200 dark:border-neutral-800"
    >
      <span className="text-base font-bold">Germán Salazar</span>
      <div className="flex items-center gap-4">
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
          <Sun size={18} aria-hidden="true" className="hidden dark:block" />
          <Moon size={18} aria-hidden="true" className="block dark:hidden" />
        </button>
      </div>
    </nav>
  );
}

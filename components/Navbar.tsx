"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "next-themes";

const navigationLinks = [
  { href: "#philosophy", en: "About", es: "Acerca de" },
  { href: "#experience", en: "Experience", es: "Experiencia" },
  { href: "#projects", en: "Projects", es: "Proyectos" },
  { href: "#contact", en: "Contact", es: "Contacto" },
];

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      aria-label={language === "en" ? "Main navigation" : "Navegación principal"}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 rounded-full border border-border bg-background/70 backdrop-blur-md px-6 py-3 shadow-lg w-[90%] max-w-4xl max-md:gap-2"
    >
      <Link
        href="#hero"
        className="whitespace-nowrap text-sm font-bold tracking-tight md:text-base"
      >
        Germán Salazar
      </Link>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap hover:text-foreground transition-colors"
          >
            {language === "en" ? link.en : link.es}
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={language === "en" ? "Toggle menu" : "Alternar menú"}
      >
        {isMenuOpen ? (
          <X aria-hidden="true" className="size-4" />
        ) : (
          <Menu aria-hidden="true" className="size-4" />
        )}
      </button>

      <div className="flex gap-4 items-center max-md:gap-2">
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={
            language === "en" ? "Cambiar a español" : "Switch to English"
          }
          className="inline-flex min-h-8 items-center justify-center rounded-full px-2 text-sm font-medium hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {language.toUpperCase()}
        </button>
        <button
          type="button"
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          aria-label={language === "en" ? "Toggle theme" : "Cambiar tema"}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Sun aria-hidden="true" className="hidden size-4 dark:block" />
          <Moon aria-hidden="true" className="block size-4 dark:hidden" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full mt-3 flex w-full flex-col gap-1 rounded-3xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur-md md:hidden"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {language === "en" ? link.en : link.es}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

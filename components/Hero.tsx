"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { language } = useLanguage();
  const { name, title, bio } = portfolioData[language].hero;
  const { cvUrl } = portfolioData[language].contact;

  return (
    <section
      lang={language}
      aria-labelledby="hero-name"
      className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
    >
      <div className="md:col-span-3 flex flex-col items-start">
        <Badge
          variant="outline"
          className="mb-6 border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400"
        >
          <span
            aria-hidden="true"
            className="mr-2 size-2 animate-pulse rounded-full bg-green-500"
          />
          {language === "en"
            ? "Open to new opportunities"
            : "Disponible para nuevos proyectos"}
        </Badge>
        <h1 id="hero-name" className="text-3xl font-bold">
          {name}
        </h1>
        <h2 className="mt-2 text-lg font-medium text-neutral-600 dark:text-neutral-400">
          {title}
        </h2>
        <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
          {bio}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === "en"
                ? "Download CV (opens in a new tab)"
                : "Descargar CV (abre en una pestaña nueva)"
            }
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Download size={18} aria-hidden="true" />
            {language === "en" ? "Download CV" : "Descargar CV"}
          </a>
        </div>
      </div>
      <div className="relative w-full aspect-square md:aspect-4/5 md:col-span-2 overflow-hidden rounded-2xl border border-border">
        <Image
          alt={
            language === "en"
              ? "Portrait of Germán Salazar"
              : "Retrato de Germán Salazar"
          }
          className="object-cover"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 40vw"
          src="/German_Salazar_Profile_Photo.jpg"
        />
      </div>
    </section>
  );
}

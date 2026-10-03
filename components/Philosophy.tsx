"use client";

import { useLanguage } from "@/components/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export default function Philosophy() {
  const { language } = useLanguage();
  const philosophy = portfolioData[language].philosophy;

  return (
    <section lang={language} aria-labelledby="philosophy-title">
      <h2 id="philosophy-title" className="text-2xl font-bold">
        {philosophy.title}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {philosophy.content}
      </p>
    </section>
  );
}

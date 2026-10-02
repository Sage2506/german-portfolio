"use client";

import { useLanguage } from "@/components/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { language } = useLanguage();
  const { name, title, bio } = portfolioData[language].hero;

  return (
    <section lang={language} aria-labelledby="hero-name" className="mt-10">
      <h1 id="hero-name" className="text-3xl font-bold">
        {name}
      </h1>
      <h2 className="mt-2 text-lg font-medium text-neutral-600 dark:text-neutral-400">
        {title}
      </h2>
      <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
        {bio}
      </p>
    </section>
  );
}

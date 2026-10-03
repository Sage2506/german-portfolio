"use client";

import { useLanguage } from "@/components/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { language } = useLanguage();
  const { education } = portfolioData[language];

  return (
    <section lang={language} aria-labelledby="education-title">
      <h2 id="education-title" className="mb-8 text-xl font-bold">
        {language === "en" ? "Education" : "Formación"}
      </h2>
      <ol className="space-y-10 border-l border-neutral-200 pl-6 dark:border-neutral-800">
        {education.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-2 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
            />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.institution}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

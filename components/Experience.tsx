"use client";

import { useLanguage } from "@/components/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { language } = useLanguage();
  const { experience } = portfolioData[language];

  return (
    <section lang={language} aria-labelledby="experience-title">
      <h2 id="experience-title" className="mb-8 text-xl font-bold">
        {language === "en" ? "Experience" : "Experiencia"}
      </h2>
      <ol className="space-y-10 border-l border-neutral-200 pl-6 dark:border-neutral-800">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-2 size-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
            />
            <h3 className="font-semibold">{job.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {job.company}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{job.date}</p>
            <ul className="list-disc list-outside ml-4 mt-3 text-sm text-muted-foreground space-y-1.5">
              {job.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

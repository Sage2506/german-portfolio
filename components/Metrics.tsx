"use client";

import { useLanguage } from "@/components/LanguageContext";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export default function Metrics() {
  const { language } = useLanguage();
  const metrics = portfolioData[language].metrics;

  return (
    <section
      lang={language}
      aria-label={language === "en" ? "Key metrics" : "Métricas clave"}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            className="gap-0 border-border bg-card p-5 shadow-none text-center flex flex-col items-center justify-center"
          >
            <p className="text-3xl font-bold text-primary">{metric.value}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {metric.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

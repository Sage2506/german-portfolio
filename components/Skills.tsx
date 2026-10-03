"use client";

import { useLanguage } from "@/components/LanguageContext";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { language } = useLanguage();
  const categories = Object.entries(portfolioData[language].skills);

  return (
    <section lang={language} aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-2xl font-bold mb-8">
        {language === "en" ? "Technical Arsenal" : "Arsenal Técnico"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(([key, category]) => (
          <Card key={key} className="border-border bg-card shadow-none">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((technology) => (
                  <Badge key={technology} variant="secondary">
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

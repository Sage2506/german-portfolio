"use client";

import { Database, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export default function FeaturedProject() {
  const { language } = useLanguage();
  const project = portfolioData[language].projects.adagio;

  return (
    <section lang={language} aria-labelledby="adagio-title">
      <Card className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border-border py-0 shadow-none">
        <div className="relative w-full h-72 lg:h-full min-h-[320px] overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-b lg:border-b-0 lg:border-r border-border">
          <Image
            alt={project.title}
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={project.image}
          />
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-8">
          <CardHeader className="px-0">
            <CardTitle>
              <h2 id="adagio-title" className="text-xl leading-snug">
                {project.title}
              </h2>
            </CardTitle>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </CardHeader>
          <CardContent className="px-0">
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((technology) => (
                <Badge key={technology} variant="secondary">
                  {technology}
                </Badge>
              ))}
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap mt-6 gap-4">
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === "en"
                    ? "View Adagio frontend repository (opens in a new tab)"
                    : "Ver repositorio frontend de Adagio (abre en una pestaña nueva)"
                }
                className="inline-flex min-h-11 items-center gap-2 rounded px-2 text-sm font-medium hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Github size={18} aria-hidden="true" />
                Frontend
              </a>
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === "en"
                    ? "View Adagio backend repository (opens in a new tab)"
                    : "Ver repositorio backend de Adagio (abre en una pestaña nueva)"
                }
                className="inline-flex min-h-11 items-center gap-2 rounded px-2 text-sm font-medium hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Database size={18} aria-hidden="true" />
                API / Backend
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === "en"
                    ? "Visit Adagio live site (opens in a new tab)"
                    : "Visitar sitio de Adagio (abre en una pestaña nueva)"
                }
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <ExternalLink size={18} aria-hidden="true" />
                {language === "en" ? "Live Site" : "Visitar Sitio"}
              </a>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}

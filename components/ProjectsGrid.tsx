"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsGrid() {
  const { language } = useLanguage();
  const projects = portfolioData[language].otherProjects;

  return (
    <section lang={language} aria-labelledby="projects-grid-title">
      <h2 id="projects-grid-title" className="text-2xl font-bold">
        {language === "en" ? "More Projects" : "Más Proyectos"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden border-border pt-0 shadow-none"
          >
            <div className="w-full h-48 relative overflow-hidden rounded-t-xl border-b border-border">
              <Image
                alt={project.title}
                className="object-cover transition-transform hover:scale-105"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={project.image}
              />
            </div>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap mt-4 gap-2">
                {project.stack.map((technology) => (
                  <Badge key={technology} variant="outline">
                    {technology}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    language === "en"
                      ? `Visit ${project.title} (opens in a new tab)`
                      : `Visitar ${project.title} (abre en una pestaña nueva)`
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  {language === "en" ? "Visit Project" : "Visitar Proyecto"}
                </a>
                <ProjectGallery images={project.gallery} title={project.title} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const buttonClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2";

export default function Contact() {
  const { language } = useLanguage();
  const { contact, socials } = portfolioData[language];
  const opensInNewTab =
    language === "en" ? "(opens in a new tab)" : "(abre en una pestaña nueva)";

  return (
    <section lang={language} aria-labelledby="contact-title">
      <Card className="block p-8 md:p-12 mt-24 mb-12 text-center bg-card/50 border-neutral-200 dark:border-neutral-800 shadow-none">
        <h2 id="contact-title" className="text-3xl font-bold">
          {contact.title}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          {contact.subtitle}
        </p>
        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn ${opensInNewTab}`}
            className={buttonClassName}
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub ${opensInNewTab}`}
            className={buttonClassName}
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label={
              language === "en"
                ? `Email ${contact.email}`
                : `Enviar correo a ${contact.email}`
            }
            className={buttonClassName}
          >
            <Mail size={18} aria-hidden="true" />
            {language === "en" ? "Email" : "Correo"}
          </a>
          <a
            href={`tel:${contact.phone.replaceAll(" ", "")}`}
            aria-label={
              language === "en"
                ? `Call ${contact.phone}`
                : `Llamar al ${contact.phone}`
            }
            className={buttonClassName}
          >
            <Phone size={18} aria-hidden="true" />
            {language === "en" ? "Call" : "Llamar"}
          </a>
          <a
            href={contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === "en"
                ? `View CV ${opensInNewTab}`
                : `Ver currículum ${opensInNewTab}`
            }
            className={buttonClassName}
          >
            <FileText size={18} aria-hidden="true" />
            {language === "en" ? "View CV" : "Ver CV"}
          </a>
          <p className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted-foreground">
            <MapPin size={18} aria-hidden="true" />
            {contact.location}
          </p>
        </div>
      </Card>
    </section>
  );
}

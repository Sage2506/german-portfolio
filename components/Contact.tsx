"use client";

import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { useLanguage } from "@/components/LanguageContext";
import { portfolioData } from "@/data/portfolio";

const directLinkClassName =
  "inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
const whatsappLinkClassName =
  "inline-flex min-h-12 items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
const professionalLinkClassName =
  "group flex min-h-16 w-full items-center justify-between rounded-xl bg-neutral-100 p-4 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-neutral-900 dark:hover:bg-neutral-800";

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  const { language } = useLanguage();
  const { contact, socials } = portfolioData[language];
  const phoneHref = `tel:${contact.phone.replaceAll(" ", "")}`;
  const whatsappHref = `https://wa.me/${contact.phone.replaceAll(/[^\d]/g, "")}`;
  const opensInNewTab =
    language === "en" ? "(opens in a new tab)" : "(abre en una pestaña nueva)";

  return (
    <section lang={language} aria-labelledby="contact-title" id={id}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24 mt-32 mb-12">
        <div>
          <h2
            id="contact-title"
            className="text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            {contact.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {contact.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              aria-label={
                language === "en"
                  ? `Email ${contact.email}`
                  : `Enviar correo a ${contact.email}`
              }
              className={directLinkClassName}
            >
              <Mail size={18} aria-hidden="true" />
              {language === "en" ? "Email me" : "Escríbeme"}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                language === "en"
                  ? `Message on WhatsApp ${opensInNewTab}`
                  : `Enviar mensaje por WhatsApp ${opensInNewTab}`
              }
              className={whatsappLinkClassName}
            >
              <WhatsAppIcon className="size-4.5 text-white" />
              WhatsApp
            </a>
          </div>
          <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail size={16} aria-hidden="true" />
              <a
                href={`mailto:${contact.email}`}
                className="break-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} aria-hidden="true" />
              <a
                href={phoneHref}
                className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} aria-hidden="true" />
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">
            {language === "en"
              ? "Professional Links"
              : "Enlaces Profesionales"}
          </h3>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile ${opensInNewTab}`}
            className={professionalLinkClassName}
          >
            <span className="flex items-center gap-3 font-medium">
              <LinkedinIcon className="size-5 text-primary" />
              {language === "en" ? "LinkedIn Profile" : "Perfil de LinkedIn"}
            </span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub profile ${opensInNewTab}`}
            className={professionalLinkClassName}
          >
            <span className="flex items-center gap-3 font-medium">
              <GithubIcon className="size-5 text-primary" />
              {language === "en" ? "GitHub Profile" : "Perfil de GitHub"}
            </span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === "en"
                ? `Download CV ${opensInNewTab}`
                : `Descargar CV ${opensInNewTab}`
            }
            className={professionalLinkClassName}
          >
            <span className="flex items-center gap-3 font-medium">
              <FileText size={20} aria-hidden="true" />
              {language === "en" ? "Download CV" : "Descargar CV"}
            </span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

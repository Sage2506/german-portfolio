import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://german-portfolio-black.vercel.app/"),
  title: "Germán Salazar | Senior Frontend Engineer",
  description:
    "Portafolio de Germán Salazar, Arquitecto Frontend especializado en React, Next.js y flujos de trabajo acelerados por IA.",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: "https://german-portfolio-black.vercel.app/",
    siteName: "Germán Salazar Portfolio",
    title: "Germán Salazar | Senior Frontend Engineer",
    description:
      "Portafolio de Germán Salazar, Arquitecto Frontend especializado en React, Next.js y flujos de trabajo acelerados por IA.",
    images: [
      {
        url: "/projects/adagio.png",
        alt: "Adagio - School Operations Platform",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <LanguageProvider>
            <main className="max-w-3xl mx-auto px-6 py-12 antialiased">
              <Navbar />
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

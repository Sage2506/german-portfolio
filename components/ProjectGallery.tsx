"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Images } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/LanguageContext";

type ProjectGalleryProps = {
  images: { src: string; alt: string }[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [imageAspectRatio, setImageAspectRatio] = useState(16 / 9);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setSelectedImage(null);
          setImageAspectRatio(16 / 9);
        }
      }}
    >
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Images size={16} aria-hidden="true" />
          {language === "en" ? "View Gallery" : "Ver Galería"}
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl"
        closeButtonLabel={
          language === "en" ? "Close project gallery" : "Cerrar galería del proyecto"
        }
      >
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        {!selectedImage ? (
          <div
            aria-label={
              language === "en" ? "Project images" : "Imágenes del proyecto"
            }
            className="grid max-h-[80vh] grid-cols-2 gap-4 overflow-y-auto p-2 md:grid-cols-3"
            role="group"
          >
            {images.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  setImageAspectRatio(16 / 9);
                  setSelectedImage(img);
                }}
                className="group relative h-48 w-full cursor-pointer overflow-hidden rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:h-56"
              >
                <Image
                  alt={img.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  src={img.src}
                />
                <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 p-2 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {img.alt}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={() => {
                setSelectedImage(null);
                setImageAspectRatio(16 / 9);
              }}
              className="mb-4 flex items-center text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ArrowLeft className="mr-2" size={16} aria-hidden="true" />
              {language === "en" ? "Back to gallery" : "Volver a la galería"}
            </button>
            <div className="max-h-[70vh] w-full overflow-y-auto rounded-lg border border-border bg-neutral-100 dark:bg-neutral-900">
              <div
                className="relative w-full"
                style={{ aspectRatio: imageAspectRatio }}
              >
                <Image
                  alt={selectedImage.alt}
                  className="object-contain"
                  fill
                  onLoad={(event) => {
                    const { naturalWidth, naturalHeight } =
                      event.currentTarget;
                    setImageAspectRatio(naturalWidth / naturalHeight);
                  }}
                  sizes="100vw"
                  src={selectedImage.src}
                />
              </div>
            </div>
            <p className="mt-4 text-center text-muted-foreground">
              {selectedImage.alt}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

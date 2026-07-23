"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export type HeroCarouselImage = { src: string; alt: string };

export function HeroCarousel({ images }: { images: HeroCarouselImage[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 3800);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="animate-float absolute left-0 top-[3%] right-[11%] aspect-square overflow-hidden rounded-3xl border border-brand-line bg-white shadow-brand-md">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          priority={i === 0}
          className={clsx(
            "object-cover transition-opacity duration-1000 ease-brand",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 pb-4">
        {images.map((image, i) => (
          <span
            key={image.src}
            className={clsx(
              "h-1.5 rounded-full bg-white shadow-sm transition-all duration-300",
              i === active ? "w-5 opacity-100" : "w-1.5 opacity-60",
            )}
          />
        ))}
      </div>
    </div>
  );
}

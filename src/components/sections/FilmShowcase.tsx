"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FilmShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setIsPlaying(true);
  };

  return (
    <section className="bg-brand-ink py-20 md:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-red">
              Watch The Film
            </p>
            <h2 className="font-display text-3xl font-bold text-balance text-white md:text-4xl">
              From Script to Screen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              A look at one of our ad films, produced end to end for Meston College of Arts and
              Science — concept, direction, shoot and edit.
            </p>
          </div>
          <Button href="/case-studies/meston-college" variant="white" size="lg">
            View Case Study
          </Button>
        </Reveal>
      </Container>

      <Reveal delay={150} className="relative left-1/2 mt-12 w-screen -translate-x-1/2">
        <div className="relative aspect-video w-full overflow-hidden bg-black md:aspect-21/9">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster="/home/films/meston-cricket-poster.webp"
            controls={isPlaying}
            playsInline
            preload="none"
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/home/films/meston-cricket.mp4" type="video/mp4" />
          </video>

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play the Meston College ad film"
              className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 ease-brand hover:bg-black/35"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-brand-ink shadow-brand-lg transition-transform duration-300 ease-brand group-hover:scale-110 sm:h-24 sm:w-24">
                <Play size={32} className="ml-1" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}

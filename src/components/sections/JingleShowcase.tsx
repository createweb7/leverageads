"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const SKIP_INTRO_SECONDS = 3.8;

export function JingleShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const skipIntro = () => {
      video.currentTime = SKIP_INTRO_SECONDS;
    };
    const onEnded = () => {
      video.currentTime = SKIP_INTRO_SECONDS;
      video.play();
    };

    // The browser can start loading a server-rendered <video>'s metadata
    // (and fire `loadedmetadata`) before React finishes hydrating and
    // attaching listeners, so that event may already have fired by the
    // time this effect runs. HAVE_METADATA (readyState >= 1) means it has.
    if (video.readyState >= 1) {
      skipIntro();
    } else {
      video.addEventListener("loadedmetadata", skipIntro, { once: true });
    }
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("loadedmetadata", skipIntro);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section className="bg-brand-ink">
      <Reveal className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="relative aspect-video w-full overflow-hidden bg-black md:aspect-21/9">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster="/home/films/sovereign-jingle-sixer-poster.webp"
            autoPlay
            muted
            playsInline
            preload="metadata"
          >
            <source src="/home/films/sovereign-jingle-sixer.mp4" type="video/mp4" />
          </video>
        </div>
      </Reveal>
    </section>
  );
}

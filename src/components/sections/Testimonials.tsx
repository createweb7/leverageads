"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const showPrev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const showNext = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(showNext, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, showNext]);

  const active = testimonials[index];

  return (
    <section className="py-20 md:py-24 bg-brand-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients & Team Members Say"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal
          delay={100}
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-4xl border border-brand-line bg-white px-7 py-12 text-center shadow-brand-md sm:px-14 sm:py-16">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
              <Quote size={24} fill="currentColor" strokeWidth={0} />
            </span>

            <p
              key={index}
              className="mx-auto max-w-2xl translate-y-2 text-balance font-display text-lg font-medium leading-relaxed text-brand-ink opacity-0 sm:text-xl animate-[fadeUp_.5s_var(--ease-brand)_forwards]"
            >
              &ldquo;{active.quote}&rdquo;
            </p>

            <div className="mt-8 flex flex-col items-center gap-0.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink font-display text-sm font-bold text-white">
                {active.name.charAt(0)}
              </span>
              <span className="mt-3 text-sm font-bold text-brand-ink">{active.name}</span>
              {active.role && <span className="text-xs text-brand-gray">{active.role}</span>}
            </div>
          </div>

          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-brand-line bg-white text-brand-ink shadow-brand-sm transition-colors hover:border-brand-red hover:text-brand-red sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-brand-line bg-white text-brand-ink shadow-brand-sm transition-colors hover:border-brand-red hover:text-brand-red sm:flex"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={clsx(
                  "h-2 rounded-full transition-all duration-300 ease-brand",
                  i === index ? "w-6 bg-brand-red" : "w-2 bg-brand-line hover:bg-brand-gray-2",
                )}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Image from "next/image";

export type HeroVisualImage = { src: string; alt: string; width: number; height: number };

export function HeroVisual({ images }: { images?: HeroVisualImage[] }) {
  const [primary, secondary] = images ?? [];
  if (!primary) return null;

  return (
    <div className="relative hidden min-h-90 lg:flex lg:items-center lg:justify-center">
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(237,50,55,.12), transparent 65%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-6 rounded-[2.5rem] border border-brand-line/70 bg-white/40"
        aria-hidden
      />
      <div
        className={
          secondary ? "relative mr-10 mb-10 max-w-[74%]" : "relative mx-auto max-w-[82%]"
        }
      >
        <Image
          src={primary.src}
          alt={primary.alt}
          width={primary.width}
          height={primary.height}
          sizes="(min-width: 1024px) 40vw, 0px"
          className="relative z-10 h-auto max-h-105 w-auto max-w-full rounded-3xl object-contain shadow-brand-lg"
          priority
        />
        {secondary && (
          <div className="absolute -bottom-8 -left-10 z-20 h-40 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-brand-lg sm:h-48 sm:w-48">
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              sizes="(min-width: 1024px) 14vw, 0px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

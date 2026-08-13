import { Reveal } from "@/components/ui/Reveal";

export function JingleShowcase() {
  return (
    <section className="bg-brand-ink">
      <Reveal className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="relative aspect-video w-full overflow-hidden bg-black md:aspect-21/9">
          <video
            className="h-full w-full object-cover"
            poster="/home/films/sovereign-jingle-sixer-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/home/films/sovereign-jingle-sixer.mp4" type="video/mp4" />
          </video>
        </div>
      </Reveal>
    </section>
  );
}

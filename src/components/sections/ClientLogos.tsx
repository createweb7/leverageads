import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clientLogos } from "@/data/clients";

const track = [...clientLogos, ...clientLogos];

export function ClientLogos() {
  return (
    <section className="border-y border-brand-line bg-white py-14">
      <Container>
        <Reveal>
          <p className="mb-9 text-center text-[13px] font-semibold uppercase tracking-[.16em] text-brand-gray-2">
            Trusted by Businesses Across Chennai &amp; Beyond
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div
            className="marquee relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="marquee-track-slow flex w-max items-center gap-16">
              {track.map((client, i) => (
                <Image
                  key={`${client.src}-${i}`}
                  src={client.src}
                  alt={client.name}
                  width={384}
                  height={240}
                  className="h-24 w-auto shrink-0 object-contain transition-transform duration-300 ease-brand hover:scale-115 hover:drop-shadow-[0_10px_24px_rgba(12,13,16,.18)]"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { insightPosts } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Useful thinking from LeverageAds on branding, advertising, photography, websites, SEO, WhatsApp automation, customer experience and practical marketing strategy.",
  alternates: { canonical: "/insights" },
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white pt-8 pb-10 md:pt-10 md:pb-12">
        <Container>
          <Breadcrumbs items={[{ label: "Insights" }]} />

          <h1 className="mt-5 font-display text-2xl font-bold text-brand-ink sm:text-[28px]">
            Insights
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] text-brand-gray leading-relaxed">
            This is where LeverageAds shares useful thinking around branding, advertising,
            photography, websites, SEO, WhatsApp automation, customer experience and practical
            marketing strategy — not just what we do, but how we think.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {insightPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-line bg-white shadow-brand-sm transition-all duration-300 ease-brand hover:-translate-y-1.5 hover:shadow-brand-lg"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-brand group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-brand-red-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-red">
                      {post.category}
                    </span>
                    <h2 className="font-display text-lg font-bold leading-snug text-brand-ink text-balance">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-brand-gray">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="flex items-center gap-1.5 text-xs text-brand-gray-2">
                        <Calendar size={13} />
                        {dateFormatter.format(new Date(post.date))}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                        Read
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Have a Question We Should Cover?"
        subtitle="If there's a branding, marketing or business systems question you'd like us to write about, let us know."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

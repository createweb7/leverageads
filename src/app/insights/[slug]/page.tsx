import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { insightPosts, getInsightBySlug } from "@/data/insights";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />

      <section className="border-b border-brand-line bg-brand-paper">
        <Container className="pt-8 pb-16 md:pt-10 md:pb-24">
          <Reveal>
            <Breadcrumbs
              items={[{ label: "Insights", href: "/insights" }, { label: post.title }]}
              className="mb-6"
            />
          </Reveal>
          <Reveal>
            <Link
              href="/insights"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gray transition-colors hover:text-brand-red"
            >
              <ArrowLeft size={15} />
              All Insights
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
              {post.category}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="max-w-3xl font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-ink leading-tight text-balance">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-brand-gray">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {dateFormatter.format(new Date(post.date))}
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-16">
        <Container>
          <Reveal className="relative mx-auto aspect-16/9 max-w-3xl overflow-hidden rounded-3xl shadow-brand-md">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-2xl">
            {post.body.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="mt-10 font-display text-xl font-bold text-brand-ink first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="mt-5 space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                        <span className="text-brand-gray leading-relaxed text-base md:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mt-5 text-brand-gray leading-relaxed text-base md:text-lg first:mt-0">
                  {block.text}
                </p>
              );
            })}
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Have a Branding or Marketing Question?"
        subtitle="Book a consultation and we'll walk through what's possible for your business."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

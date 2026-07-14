"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { FAQ } from "@/data/services";

export function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
}: {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (!faqs.length) return null;

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title={title} subtitle={subtitle} align="center" className="mx-auto" />
        </Reveal>

        <Reveal delay={100} className="mt-12 mx-auto max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={clsx(
                  "mb-3.5 overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-transparent bg-white shadow-brand-md"
                    : "border-brand-line bg-brand-paper",
                )}
              >
                <button
                  className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[17px] font-semibold text-brand-ink">
                    {faq.q}
                  </span>
                  <span
                    className={clsx(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-brand",
                      isOpen
                        ? "rotate-45 border-brand-red bg-brand-red text-white"
                        : "border-brand-line text-brand-ink",
                    )}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 -mt-1">
                    <p className="max-w-[92%] text-[15.5px] leading-relaxed text-brand-gray">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

export type InsightBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  body: InsightBlock[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "how-to-choose-a-brand-name-and-why-abc-just-wont-work-anymore",
    title: "How to Choose a Brand Name — And Why “ABC” Just Won’t Work Anymore",
    excerpt:
      "As a creative director at one of the best branding companies in Chennai, I’ve seen countless businesses struggle at the very first step — naming their brand.",
    author: "Suresh Ramakrishnan",
    date: "2025-10-27",
    category: "Branding",
    image: "/insights/brand-naming.webp",
    imageAlt: "Relishpro beverage brand campaign photography",
    body: [
      {
        type: "paragraph",
        text: "As a creative director at one of the best branding companies in Chennai, I’ve seen countless businesses struggle at the very first step — naming their brand. Many still follow the old tradition of using a combination of their grandfather’s, father’s, or their own initials. While it may hold sentimental value, it simply doesn’t work in today’s digital-first world, especially for brands trying to grow their digital presence and branding in Chennai.",
      },
      { type: "paragraph", text: "Here’s why — and what you can do instead." },
      { type: "heading", text: "Why 3-Letter Initial Names Don’t Work Today" },
      {
        type: "paragraph",
        text: "Overused and Unsearchable – Thousands of brands use similar three-letter combinations. Try searching “RSP Constructions” or “KRS Traders” on Google — you’ll find hundreds. How will your customer ever find you? This is where working with top branding companies in Chennai makes all the difference.",
      },
      {
        type: "paragraph",
        text: "Emotionally Meaningful, but Digitally Invisible – Your family initials may mean the world to you, but search engines don’t understand emotions. They recognize relevance, keywords, and user intent – principles every digital branding agency in Chennai understands well.",
      },
      {
        type: "paragraph",
        text: "Brand Recall Problem – “ABC Agencies” or “SRK Enterprises” sound generic and forgettable. A brand name should evoke a story or spark curiosity — not sound like another directory listing.",
      },
      { type: "heading", text: "What Works in the Digital Era" },
      {
        type: "paragraph",
        text: "Descriptive yet Distinct – If your brand name reflects your product, service, or value, search engines do half the marketing for you. Example: “SkyRoute Travels” immediately signals what the brand does and feels aspirational.",
      },
      {
        type: "paragraph",
        text: "Keyword Power – A name that aligns with your offering increases discoverability online. For instance, a bakery named “CrumbCraft” will perform better in search visibility than “PRS Bakers.”",
      },
      {
        type: "paragraph",
        text: "Emotional Connection + SEO Advantage – Combine creativity with clarity. “OceanMist Resort” sounds better, feels better, and ranks better.",
      },
      { type: "heading", text: "A Real-Life Story from My Desk" },
      {
        type: "paragraph",
        text: "Years ago, I was approached by an international travel agency based in Chennai. They needed a name — instantly.",
      },
      { type: "paragraph", text: "It took me just two minutes to give them one." },
      {
        type: "paragraph",
        text: "The name was crisp, relevant, and global — it captured the essence of travel and discovery. They handed over the cheque on the spot.",
      },
      {
        type: "paragraph",
        text: "That’s the power of clarity and creative instinct combined – the kind you’ll find with an affordable branding agency in Chennai that knows how to blend creativity and digital visibility.",
      },
      { type: "heading", text: "💡 My Takeaway for Brand Owners" },
      {
        type: "list",
        items: [
          "Don’t chase sentimental initials; chase strategic impact.",
          "Think digital. Think discoverable.",
          "A name isn’t just an identity — it’s your brand’s first advertisement.",
        ],
      },
    ],
  },
  {
    slug: "how-a-branding-photoshoot-and-celebrity-photoshoot-can-elevate-your-image",
    title: "How a Branding Photoshoot and Celebrity Photoshoot Can Elevate Your Image",
    excerpt:
      "At first sight, people judge your brand by what they see. Your colours, your fonts, your visuals and the way you write all work together to create that first impression.",
    author: "Suresh Ramakrishnan",
    date: "2025-11-27",
    category: "Branding & Photography",
    image: "/insights/branding-photoshoot.webp",
    imageAlt: "Celebrity branding photoshoot for a jewellery and fashion campaign",
    body: [
      { type: "heading", text: "First Impressions Are Built Through Strong Visual Branding" },
      {
        type: "paragraph",
        text: "At first sight, people judge your brand by what they see. Your colours, your fonts, your visuals and the way you write all work together to create that first impression. That moment decides whether your brand feels reliable, professional or just another name online. With digital marketing becoming the main way to promote anything, we have started seeing fewer proper photoshoots. The real ones with a planned set, good lighting, proper equipment and a photographer who knows how to bring out the character of a brand — something essential for businesses focusing on branding in Chennai.",
      },
      { type: "heading", text: "The Decline of Real Photoshoots in Digital Marketing" },
      {
        type: "paragraph",
        text: "Today many brands simply use quick phone shots, stock images or AI-generated visuals. It may look convenient, but over time it weakens the brand and makes everything look similar — an issue even companies offering logo design in Chennai face when visuals lack originality.",
      },
      { type: "heading", text: "Why Media and Creative Budgets Are Essential for Branding" },
      {
        type: "paragraph",
        text: "This is why media and creative budgets are still so important. Business owners and marketing teams need to understand that strong branding needs consistent imagery, proper planning and content that truly represents the brand. A carefully executed photoshoot also complements identity work done by a logo creator or logo maker, ensuring your brand stays consistent across all platforms.",
      },
      { type: "heading", text: "Branding Photoshoots Create Authentic Visual Identity" },
      {
        type: "paragraph",
        text: "Celebrity shoots also play a major role. A well-planned shoot with the right celebrity can instantly lift the brand image. It draws attention, builds trust and creates an aspirational feel. But this works only when the shoot is executed well with the right styling, lighting and direction. Strong visuals further enhance assets designed by the best logo designers or teams offering logo design services in Chennai.",
      },
      { type: "heading", text: "Why Digital Tools Cannot Replace Authentic Photography" },
      {
        type: "paragraph",
        text: "Digital tools may help us create content faster, but they cannot replace the depth and authenticity of a proper photoshoot. Real branding still needs real effort. If you want your brand to rise above the noise, your visuals must speak with clarity, confidence and a sense of purpose.",
      },
      {
        type: "paragraph",
        text: "Businesses also gain massive value when supported by the best branding agency in Chennai or strategic brand development.",
      },
    ],
  },
  {
    slug: "emotional-intelligence-in-theatre-acting",
    title: "Emotional Intelligence in Theatre Acting",
    excerpt:
      "It was an amazing experience to conduct this workshop in Kodaikanal. It opened up many insights and helped several participants discover hidden talents.",
    author: "Suresh Ramakrishnan",
    date: "2026-01-10",
    category: "Culture & Training",
    image: "/insights/theatre-workshop.webp",
    imageAlt: "Emotional intelligence in theatre acting workshop in Kodaikanal",
    body: [
      {
        type: "paragraph",
        text: "It was an amazing experience to conduct this workshop in Kodaikanal. It opened up many insights and helped several participants discover hidden talents.",
      },
      {
        type: "paragraph",
        text: "The human mind has so many dimensions — both positive and negative — and I often wonder: what would happen if we were not naturally embedded with empathy?",
      },
      { type: "paragraph", text: "It would be a total disaster, right?" },
      { type: "paragraph", text: "This entire workshop was designed to nurture empathy through deep listening." },
      {
        type: "paragraph",
        text: "Every activity created a seamless and relevant step forward, guiding participants to develop their expressive abilities — whether they are trainers, professionals, students above 15 years, or simply anyone who wants to grow.",
      },
      {
        type: "paragraph",
        text: "This training also teaches you how to transform real emotions into authentic performances. It improves your ability to observe, relate, and respond with sensitivity. Participants learn to recognise their inner blocks and release them safely.",
      },
      {
        type: "paragraph",
        text: "It builds group trust, emotional awareness, and meaningful human connection, while strengthening creative imagination and the courage to express one’s truth.",
      },
      {
        type: "paragraph",
        text: "In my opinion, everyone should go through this kind of experience at least once. It helps people break out of their cocoon of inhibition and shyness, allowing them to express themselves with clarity, confidence, and emotional balance.",
      },
      {
        type: "paragraph",
        text: "A heartfelt thanks to Mr. Mahesh Krishna for training along with me and contributing so much to this powerful learning journey. And special thanks to Mr. Prabakar for the excellent facility arrangements that made this workshop truly comfortable and memorable.",
      },
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insightPosts.find((p) => p.slug === slug);
}

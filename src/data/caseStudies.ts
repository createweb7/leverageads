export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  logo?: string;
  coverImage: string;
  teaserImage?: string;
  summary: string;
  subtitle: string;
  intro: string[];
  sections: CaseStudySection[];
  closing?: string[];
  gallery: { src: string; alt: string }[];
  relatedSlugs: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hadron-homes",
    client: "Hadron Homes, Chennai",
    category: "Branding & Print Collateral",
    logo: "/case-studies/logos/hadron-homes.webp",
    coverImage: "/case-studies/hadron-homes/07-oct.webp",
    summary:
      "How we turned a calendar and a set of stationery into a brand statement.",
    subtitle: "How we turned a calendar and a set of stationery into a brand statement",
    intro: [
      "Most corporate calendars are forgotten by February. They arrive with good intentions, a few glossy pages, a logo at the bottom, and then disappear into the background of office life. Stationery often suffers the same fate. A visiting card becomes a formality. A letterhead becomes a template. An envelope becomes packaging.",
      "Hadron Homes deserved better.",
      "As a Chennai-based real estate and infrastructure brand, Hadron Homes was building more than projects. It was building trust. Its promise — Transparent. Traceable. Trustworthy. — needed to be seen, felt and remembered in every brand touchpoint. Not just on a website. Not just on a site board. But in the quieter, more intimate places where brands truly reveal themselves: on a desk, in a meeting, in the hand of a client, and in the everyday objects people choose to keep.",
      "That was the brief we embraced at LeverageAds.",
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "To create brand collaterals for Hadron Homes that did not look like \"collaterals\" at all.",
          "The objective was twofold: design a premium illustrated table calendar for 2026, and create a corporate stationery system that reflected the brand's character with clarity and restraint.",
          "But the real task was deeper. We needed to build a branded experience that would feel unmistakably Chennai, unmistakably Hadron, and unmistakably credible.",
        ],
      },
      {
        heading: "The Insight",
        paragraphs: [
          "If Hadron Homes is shaping spaces in Chennai, then Chennai itself should become part of the brand story.",
          "Instead of producing a routine corporate calendar filled with generic imagery, we proposed something with greater emotional and cultural weight: an illustrated table calendar inspired by the architectural marvels of Chennai. Not as decoration. As identity.",
          "Chennai is a city of memory, structure, rhythm and contrast. Its architecture tells stories of heritage, resilience, engineering and aspiration. For a real estate brand, that language is powerful. It connects the company not just to buildings, but to the very idea of place.",
          "So the calendar became more than a date tool. It became a year-long storytelling device — a piece of brand literature for the desk.",
        ],
      },
      {
        heading: "The Creative Approach",
        paragraphs: [
          "We treated the calendar like a collectible object, not a giveaway.",
          "Every month was designed to celebrate the spirit of Chennai through illustration-led storytelling, with visual references rooted in the city's built environment and architectural identity. The design language balanced elegance with usability, ensuring that the calendar remained practical while still carrying the presence of a premium brand piece.",
          "Alongside the calendar, we created a stationery suite for Hadron Homes Chennai that included business cards, letterheads and envelopes. The design system drew from the brand's geometric logo, clean layout structure and a refined blue-led palette to create a visual identity that felt modern, composed and dependable.",
          "Nothing was overdesigned. Nothing shouted. That was the point.",
          "In real estate branding, confidence is often expressed best through discipline. White space. Order. Typography with authority. A layout that knows when to stop. We wanted the stationery to feel like Hadron Homes itself: precise, transparent and well built.",
        ],
      },
      {
        heading: "The Result",
        paragraphs: [
          "The final output gave Hadron Homes two things every serious brand needs.",
          "First, a distinctive Chennai-themed illustrated table calendar that stood apart from the usual corporate clutter and reinforced the company's connection to the city it serves.",
          "Second, a premium stationery identity that elevated everyday communication into a brand experience — whether in a client meeting, an investor conversation, a vendor interaction or a project presentation.",
          "Together, the calendar and stationery did something valuable: they made the brand tangible. Because that is what good branding does. It does not merely announce a company. It gives people a reason to remember it.",
        ],
      },
    ],
    closing: [
      "A calendar can be a calendar. A visiting card can be a visiting card. A letterhead can be just paper.",
      "Or each of them can quietly say: this is a company with taste, thought, structure and conviction.",
      "For Hadron Homes Chennai, we chose the second path. And that made all the difference.",
    ],
    gallery: [
      { src: "/case-studies/hadron-homes/01-cover.webp", alt: "Hadron Homes 2026 calendar cover with brand mission and vision" },
      { src: "/case-studies/hadron-homes/02-intro.webp", alt: "Hadron Homes calendar New Year intro page" },
      { src: "/case-studies/hadron-homes/03-jan.webp", alt: "January illustrated month spread, Chennai architecture" },
      { src: "/case-studies/hadron-homes/04-mar.webp", alt: "March illustrated month spread, Chennai architecture" },
      { src: "/case-studies/hadron-homes/05-may.webp", alt: "May illustrated month spread, Chennai architecture" },
      { src: "/case-studies/hadron-homes/06-jul.webp", alt: "July illustrated month spread, Kapaleeshwarar Temple" },
      { src: "/case-studies/hadron-homes/07-oct.webp", alt: "October illustrated month spread, Chennai architecture" },
      { src: "/case-studies/hadron-homes/08-dec.webp", alt: "December illustrated month spread, Chennai architecture" },
      { src: "/case-studies/hadron-homes/09-stationery-mockup.webp", alt: "Hadron Homes stationery mockup — letterhead, envelopes and business cards" },
    ],
    relatedSlugs: ["creative-design", "print-production"],
  },
  {
    slug: "meston-college",
    client: "Meston College of Arts and Science",
    category: "Education Branding & Admissions Marketing",
    logo: "/case-studies/logos/meston-college.webp",
    coverImage: "/case-studies/meston-college/05.webp",
    teaserImage: "/case-studies/meston-college/11-stationery-mockup.webp",
    summary:
      "How LeverageAds built a complete college launch ecosystem — from logo to TV commercials to a WhatsApp admissions chatbot.",
    subtitle:
      "From College Launch to Admissions Engine: How We Built a World-Class Education Brand Ecosystem",
    intro: [
      "Most colleges begin their marketing with a brochure, a few newspaper ads, and a hope that admissions will follow. We took a different route.",
      "When Meston College of Arts and Science partnered with LeverageAds, the assignment was not to “run some ads” for admissions. The brief was larger, more serious and far more exciting: build a complete launch ecosystem for a modern college brand — one that could create visibility, trust, enquiries and admissions in a crowded education market.",
      "The result was not a campaign in the narrow sense of the word. It was a full-scale college branding, admissions marketing and digital transformation project — covering identity creation, advertising, website design, landing pages, SEO, lead generation, brochure design, prospectus, application forms, TV commercials, FM jingles, social media management, WhatsApp API automation, chatbot support and LMS integration.",
      "This is the story of how LeverageAds helped position Meston College as a college built for the future.",
    ],
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [],
        list: [
          "Client: Meston College of Arts and Science",
          "Industry: Higher Education / College Admissions / Academic Branding",
          "Location: Chennai",
          "Agency: LeverageAds",
          "Scope: College branding, admissions marketing, education advertising, website design, SEO, digital marketing, TV commercials, print collateral, lead generation, chatbot automation, LMS integration",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "The education market is crowded with institutions saying the same things. Every college claims good infrastructure. Every college talks about faculty, discipline and placements. Every college promises a bright future. For Meston College, the challenge was to rise above that sameness.",
          "The college needed a launch strategy that would do three things at once: create a strong and credible college brand, generate admissions enquiries across digital and offline channels, and position Meston as a future-ready institution rather than just another degree college.",
          "The brand needed to appeal to students who had just completed Class 12, while also reassuring parents looking for credibility, employability and value. That meant the communication had to be aspirational, practical and believable — never generic.",
        ],
      },
      {
        heading: "The Strategic Idea: Beyond Syllabus",
        paragraphs: [
          "Most institutions market subjects. We chose to market preparedness.",
          "At the heart of the Meston launch was a strategic positioning idea: Beyond Syllabus. This was not created as a decorative tagline. It was developed as a serious educational proposition — one that reflected what today's students actually need from higher education.",
          "In a world where degrees alone are no longer enough, students need practical exposure, industry interaction, communication skills, confidence and real-world learning. So we built Meston's communication around a stronger promise: 40 sessions of practical training per year by the best industry experts, integrated into the student journey.",
          "This gave the college a distinctive narrative: not just a place to study, but a place to become industry-ready, future-ready and career-ready.",
        ],
      },
      {
        heading: "Building the Brand, Then the Launch Campaign",
        paragraphs: [
          "We began where all enduring brands begin: with identity. LeverageAds designed the logo for Meston College of Arts and Science and developed a complete brand kit that defined the visual language of the institution — colour systems, typography direction, design structure, visual consistency rules, campaign tonality and brand applications across print and digital.",
          "This identity became the foundation for every subsequent touchpoint — brochures, prospectus, social media, website, TV ads, application forms, digital campaigns and offline marketing.",
          "For the launch campaign, we produced two television commercials — instead of the usual institutional formula of generic campus visuals and formal voiceovers, we chose a concept that felt natural and relatable: a conversation between students who had just completed their 12th standard, one film on a cricket ground, the other on a badminton court. Students don't make college decisions in abstract marketing language — by placing the conversation in familiar youth environments, the films felt authentic rather than promotional.",
        ],
        list: [
          "TV channel broadcast",
          "YouTube skip ads",
          "Digital video circulation",
          "Campaign amplification through social media and lead-generation funnels",
        ],
      },
      {
        heading: "A Complete Admissions Ecosystem",
        paragraphs: [
          "A college website cannot function as a static brochure anymore. It must work as an admissions platform, a lead-generation system, and a brand experience. So we designed the Meston website not as a simple information site, but as a conversion-oriented digital ecosystem — with multiple landing pages for admissions and course-specific communication, so visitors from different ads and different interests could be directed to more relevant pages, improving clarity, engagement and conversion.",
          "We also worked on integrating LMS functionality into the overall platform, helping position Meston as a college that understands the expectations of modern students. The college website was no longer just a website — it became part of the institution's promise.",
          "And because a student who clicks an ad today shouldn't have to wait until tomorrow to ask a question, we implemented WhatsApp API-based enquiry handling with chatbot support — faster response to admission enquiries, guided communication for students and parents, improved lead capture from campaigns, and a smoother path from interest to conversation.",
        ],
      },
      {
        heading: "Marketing Across Every Channel",
        paragraphs: [
          "LeverageAds handled online admissions marketing for Meston College with a performance-oriented mindset — SEO planning, search-friendly content strategy, digital campaign messaging, lead generation campaigns, content architecture for admissions visibility, and landing-page-led campaign routing. At the same time, we strengthened the college's physical and local-market presence through offline promotion.",
          "We created and managed the college's social media pages as active admissions communication channels — content planning, visual creatives, admission-focused posts, reels and video snippets — treated not as a cosmetic activity, but as a live part of the admissions ecosystem.",
          "To create wider recall, we also developed FM radio jingles, a full AV / college presentation film, student reels and short-form digital content, so Meston's brand voice remained visible across both traditional and digital channels.",
          "A college brand is experienced not only through digital media, but also through the printed material a student takes home — so we designed a complete set of admissions and branding collateral, including college brochures, prospectus design, application forms and branded communication materials, all consistent in look, language and strategic messaging with the rest of the brand system.",
        ],
      },
      {
        heading: "Our Role",
        paragraphs: [
          "LeverageAds did not function as an outside vendor producing random creatives on request. We worked as Meston College's extended marketing team — building the institution's launch from identity to admissions communication, from brand positioning to digital infrastructure, bringing together branding, campaign strategy, print design, TV commercials, digital advertising, social media, SEO, web design, landing pages, WhatsApp chatbot systems, LMS-oriented website enhancement and admission communication assets.",
        ],
      },
      {
        heading: "The Outcome",
        paragraphs: [
          "Meston College did not enter the market looking like another institution trying to advertise itself. It entered with a clear and credible college brand identity, a future-facing educational proposition built around Beyond Syllabus, TV commercials that spoke like students rather than institutions, and a world-class website experience with multiple landing pages.",
          "In short, Meston was launched not as a college with promotional material, but as a college with a voice, a proposition and a system.",
        ],
        list: [
          "Clear, credible college brand identity",
          "A future-facing proposition built around Beyond Syllabus",
          "TV commercials that spoke like students, not institutions",
          "A world-class website experience with multiple landing pages",
          "WhatsApp chatbot automation for faster admissions engagement",
          "LMS-backed digital credibility",
          "SEO and lead-generation support",
          "Brochures, prospectus and application forms aligned with the brand",
          "Social media, reels, FM jingles and AVs across channels",
        ],
      },
    ],
    closing: [
      "The launch of a college today requires far more than advertising. It requires a clear brand identity, a strong educational proposition, high-conversion digital infrastructure, lead capture and follow-up systems, and communication that connects aspiration with trust.",
      "For 26 years, we have helped schools, colleges and educational institutions create meaningful visibility through branding, advertising, admissions campaigns, print collateral, digital marketing, films, websites and strategy. That is exactly where LeverageAds works best.",
    ],
    gallery: [
      { src: "/case-studies/meston-college/01.webp", alt: "Meston College admissions creative — Not Just Studying, I'm Becoming Industry-Ready" },
      { src: "/case-studies/meston-college/02.webp", alt: "Meston College BCA course admissions creative" },
      { src: "/case-studies/meston-college/03.webp", alt: "Meston College admissions creative — Don't Settle for Normal, Think Beyond Graduation" },
      { src: "/case-studies/meston-college/04.webp", alt: "Meston College admissions creative with graduating students" },
      { src: "/case-studies/meston-college/05.webp", alt: "Meston College Think Beyond Syllabus campaign creative" },
      { src: "/case-studies/meston-college/06.webp", alt: "Meston College Artificial Intelligence course admissions creative" },
      { src: "/case-studies/meston-college/07.webp", alt: "Meston College B.Com course admissions creative" },
      { src: "/case-studies/meston-college/08.webp", alt: "Meston College Data Science course admissions creative" },
      { src: "/case-studies/meston-college/09.webp", alt: "Meston College B.Sc Computer Science admissions creative" },
      { src: "/case-studies/meston-college/10.webp", alt: "Meston College 3 Years of Practical Training admissions creative" },
      { src: "/case-studies/meston-college/11-stationery-mockup.webp", alt: "Meston College stationery mockup — letterhead, envelopes, business cards and folder" },
    ],
    relatedSlugs: ["creative-design", "ad-films-photography", "websites-technology"],
  },
  {
    slug: "relishpro-brand-naming",
    client: "RelishPro",
    category: "Brand Naming & Strategy",
    logo: "/case-studies/logos/relishpro.webp",
    coverImage: "/case-studies/relishpro/01-cover.webp",
    summary:
      "How a single strategic naming session turned a client's international business idea into RelishPro — a globally memorable brand.",
    subtitle: "The Birth of RelishPro — From an Idea to an International Brand",
    intro: [
      "One of our clients approached Leverage with a critical challenge. They were launching an international business and needed a brand name that could travel across borders, resonate with diverse audiences, and establish a strong digital presence from day one.",
      "Like many entrepreneurs, their initial thought was to create a name using family initials — a common practice that has been followed for generations. While such names carry personal significance, they often struggle in today's digital landscape.",
      "As branding consultants, we knew the business deserved more than a sentimental identity. It needed a strategic brand.",
    ],
    sections: [
      {
        heading: "The Problem with Initial-Based Brand Names",
        paragraphs: [
          "Many businesses still choose names based on their grandfather's, father's, or personal initials. Although meaningful to the founder, these names present several challenges:",
        ],
        list: [
          "They are difficult to differentiate in search engines.",
          "They offer no clue about the business or its purpose.",
          "They are harder for customers to remember.",
          "They create weak digital visibility and SEO opportunities.",
          "They rarely communicate aspiration or emotion.",
        ],
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "In today's digital-first marketplace, a brand name is far more than an identity — it is the foundation of discoverability, positioning, and customer recall.",
          "At Leverage, we believe a brand name should satisfy three essential criteria:",
        ],
        list: ["Be memorable.", "Be globally acceptable.", "Be strategically aligned with the business and its future vision."],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "Instead of looking backward, we looked forward. We explored words that conveyed quality, experience, trust, and global relevance while ensuring the name could support future brand extensions and digital marketing initiatives.",
          "Within minutes of understanding the client's vision, one name emerged naturally.",
          "RelishPro.",
          "The name combined two powerful ideas:",
        ],
        list: [
          "Relish — representing enjoyment, appreciation, excellence, and positive experiences.",
          "Pro — representing professionalism, expertise, confidence, and international standards.",
        ],
      },
      {
        heading: "Why RelishPro Worked",
        paragraphs: [
          "The result was a brand name that was simple, memorable, globally appealing, and capable of growing across markets. The client immediately recognised its strength and approved the name on the spot.",
          "RelishPro wasn't just a creative name. It was strategically designed to:",
        ],
        list: [
          "Build instant brand recall.",
          "Appeal to both Indian and international audiences.",
          "Support digital marketing and online discoverability.",
          "Create a professional, premium brand perception.",
          "Provide a scalable identity for future business expansion.",
        ],
      },
      {
        heading: "The Outcome",
        paragraphs: [
          "Rather than sounding like another generic company name, RelishPro became a distinctive brand with a personality of its own.",
          "Today, RelishPro stands as an example of how thoughtful brand strategy can transform a simple naming exercise into a powerful business asset.",
          "The project reinforced a principle we have followed throughout our 26-year journey at Leverage: a great brand name doesn't happen by chance. It is created through strategy, creativity, market understanding, and a clear vision for growth.",
        ],
      },
    ],
    closing: [
      "Your brand name is the first advertisement your business will ever create.",
      "Choose a name that is memorable rather than merely meaningful, discoverable rather than difficult to search, reflects your brand's promise rather than your family initials, and has the potential to grow with your business across markets and generations.",
      "Because in today's digital economy, your name is more than an identity. It is the beginning of your brand story.",
    ],
    gallery: [
      { src: "/case-studies/relishpro/01-cover.webp", alt: "RelishPro beverage brand campaign photography" },
      { src: "/case-studies/relishpro/02-product-ad.webp", alt: "RelishPro product advertisement with ingredient benefits" },
      { src: "/case-studies/relishpro/03-mango-flavour.webp", alt: "RelishPro Mango Flavour packaging label design" },
    ],
    relatedSlugs: ["brand-strategy-consulting", "creative-design"],
  },
  {
    slug: "branding-photography-celebrity-campaigns",
    client: "Branding Photography & Celebrity Campaigns",
    category: "Commercial Photography & Celebrity Branding",
    logo: "/case-studies/logos/branding.webp",
    coverImage: "/case-studies/branding-photography-celebrity/01-cover.webp",
    summary:
      "How 26 years of commercial photography and celebrity branding campaigns have helped Leverage clients build trust before a single conversation begins.",
    subtitle: "Building Brands Through Powerful Visual Storytelling",
    intro: [
      "Over the past 26 years, Leverage has planned, directed and executed hundreds of branding and commercial photoshoots for businesses across industries. From startups and SMEs to leading corporate brands, educational institutions, healthcare, hospitality, retail and manufacturing, our work has always been driven by one belief: people see your brand before they experience it.",
      "A powerful visual can build trust long before a conversation begins.",
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "In today's digital-first world, brands are producing more content than ever before. Yet many rely on smartphone photography, stock images or AI-generated visuals to represent their business.",
          "While these options may be quick and inexpensive, they often fail to communicate authenticity, quality and brand personality. The result is a visual identity that looks generic, lacks consistency and struggles to create a lasting impression.",
          "For brands investing in advertising, websites, social media, brochures and digital marketing, weak imagery can significantly reduce the impact of every marketing effort.",
        ],
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "At Leverage, every branding photoshoot begins long before the camera is switched on.",
          "We invest time in understanding the business, its audience, brand personality, communication objectives and the emotions it wants to create.",
          "Our creative team carefully plans every element of the shoot, including:",
        ],
        list: [
          "Concept development",
          "Art direction",
          "Styling and wardrobe",
          "Location selection",
          "Lighting design",
          "Product presentation",
          "Model and talent coordination",
          "Visual storytelling",
          "Post-production and image enhancement",
        ],
      },
      {
        heading: "Celebrity Branding That Creates Influence",
        paragraphs: [
          "Every photograph is created with a purpose — to strengthen the brand across every customer touchpoint.",
          "Over the years, Leverage has also conceptualised and executed numerous celebrity branding campaigns, working with hundreds of celebrities, film personalities, television artists, sports personalities, public figures and brand ambassadors across diverse industries.",
          "A celebrity is far more than a familiar face. When strategically aligned with a brand, they can accelerate recognition, build trust and create instant recall.",
          "Our role extends beyond arranging celebrity participation. We develop the creative concept, direct the shoot, manage production, coordinate styling, oversee photography and ensure every visual aligns with the client's brand strategy.",
          "The objective is not simply to feature a celebrity — it is to create communication that feels authentic, memorable and commercially effective.",
        ],
      },
      {
        heading: "The Impact",
        paragraphs: [
          "Professionally planned branding photography continues to deliver value long after the shoot is complete.",
          "The same visual assets are repurposed across:",
        ],
        list: [
          "Corporate websites",
          "Digital marketing campaigns",
          "Social media",
          "Print advertisements",
          "Outdoor advertising",
          "Product catalogues",
          "Company profiles",
          "Brochures",
          "Annual reports",
          "Exhibitions and trade shows",
          "PR and media communication",
        ],
      },
      {
        heading: "The Leverage Difference",
        paragraphs: [
          "A single well-executed photoshoot becomes a long-term marketing investment.",
          "For more than 26 years, Leverage has combined advertising strategy, creative direction, commercial photography and brand thinking to create visuals that do more than look beautiful — they communicate, persuade and sell.",
          "Our portfolio includes thousands of creative assignments, including hundreds of branding photoshoots and celebrity campaigns, each designed to strengthen brand perception and support measurable business growth.",
        ],
      },
    ],
    closing: [
      "Because great branding is never accidental. It is carefully planned, professionally executed and strategically positioned to leave a lasting impression.",
      "At Leverage, we don't just capture photographs. We create visual assets that build brands.",
    ],
    gallery: [
      { src: "/case-studies/branding-photography-celebrity/02-antique-jewellery-dancer.webp", alt: "Antique jewellery collection campaign photography with a classical dance pose" },
      { src: "/case-studies/branding-photography-celebrity/03-chain-mela-campaign.webp", alt: "Gold chain mela campaign photography for Pallavaram Shanthi Jewellers" },
      { src: "/case-studies/branding-photography-celebrity/04-diamond-necklace-portrait.webp", alt: "Diamond necklace close-up portrait campaign photography" },
      { src: "/case-studies/branding-photography-celebrity/05-designer-jewellery-collection.webp", alt: "Designer jewellery collection campaign photography with celebrity model" },
      { src: "/case-studies/branding-photography-celebrity/06-festive-campaign.webp", alt: "Festive jewellery campaign photography themed around an auspicious occasion" },
      { src: "/case-studies/branding-photography-celebrity/07-lakshmi-sovereign.webp", alt: "Lakshmi Sovereign light jewellery collection campaign photography" },
      { src: "/case-studies/branding-photography-celebrity/08-designer-necklace-closeup.webp", alt: "Designer necklace close-up campaign photography" },
      { src: "/case-studies/branding-photography-celebrity/09-antique-jewellery-swan.webp", alt: "Antique jewellery collection campaign photography with a painted heritage backdrop" },
      { src: "/case-studies/branding-photography-celebrity/10-ponnana-aadi-campaign.webp", alt: "Ponnana Aadi festival jewellery campaign photography" },
      { src: "/case-studies/branding-photography-celebrity/11-anushka-pride-of-pondicherry.webp", alt: "Celebrity campaign photography for Pride of Pondicherry jewellery collection" },
      { src: "/case-studies/branding-photography-celebrity/12-antique-bridal-collection.webp", alt: "Antique bridal jewellery collection celebrity campaign photography" },
      { src: "/case-studies/branding-photography-celebrity/13-akshaya-kaalam-offer.webp", alt: "Akshaya Kaalam festive offer jewellery campaign photography" },
      { src: "/case-studies/branding-photography-celebrity/14-kajal-agarwal-jewellery.webp", alt: "Celebrity jewellery campaign photography featuring actress Kajal Agarwal" },
      { src: "/case-studies/branding-photography-celebrity/15-krt-celebrity-campaign.webp", alt: "Celebrity campaign photography for KRT Thanga Maaligai jewellers" },
    ],
    relatedSlugs: ["ad-films-photography", "creative-advertising"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

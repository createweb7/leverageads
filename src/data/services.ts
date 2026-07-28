import type { ServiceHeroGridCell } from "@/components/ui/ServiceHeroGrid";

export type FAQ = { q: string; a: string };

export type ServiceImage = { src: string; alt: string; width: number; height: number };

export type ServicePage = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubcopy: string;
  intro: string[];
  whyItMatters: string;
  included: { title: string; items: string[] }[];
  idealFor?: string[];
  framework?: { title: string; steps: { title: string; body: string }[] };
  faqs: FAQ[];
  relatedSlugs: string[];
  ctaLabel: string;
  images?: ServiceImage[];
  heroGrid?: [ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell];
};

export const process = [
  {
    title: "Understand",
    body: "We start by understanding your business, audience, category and the problem you're actually trying to solve.",
  },
  {
    title: "Recommend",
    body: "We recommend the right combination of strategy, creative, platform or system — not a default package.",
  },
  {
    title: "Create & Build",
    body: "Our team executes the work — design, content, development or automation — with regular check-ins.",
  },
  {
    title: "Launch & Support",
    body: "We launch, measure early results and stay on for optimisation, support or the next phase of growth.",
  },
];

export const services: ServicePage[] = [
  {
    slug: "brand-strategy-consulting",
    navLabel: "Brand Strategy & Consulting",
    h1: "Brand Strategy & Business Consulting in Chennai",
    metaTitle:
      "Brand Strategy & Business Consulting in Chennai | Positioning, Marketing & Business Transformation | LeverageAds",
    metaDescription:
      "Leverage Branding & Consultancy offers brand strategy and business consulting in Chennai — brand positioning, marketing strategy, customer experience and business transformation, led by Suresh Ramakrishnan (SRK).",
    heroSubcopy: "Helping Businesses Build Stronger Brands, Better Systems and Sustainable Growth",
    intro: [
      "Building a successful business requires more than great products or creative advertising. It requires a clear strategy, a compelling brand, consistent customer experiences and business systems that support long-term growth. Many organisations struggle not because of poor products or services, but because their brand positioning, marketing communication, customer journey and internal processes fail to work together.",
      "At Leverage Branding & Consultancy, we help businesses transform the way they are positioned, perceived and experienced. We provide practical, commercially focused business consulting that aligns your brand, marketing, sales and operations with your long-term business objectives. Whether you are launching a new venture, repositioning an established business or preparing for the next stage of growth, we bring an independent perspective backed by real business experience.",
      "Unlike traditional advertising agencies, we don't measure success by creative awards—we measure it by the growth of our clients' businesses. Every engagement begins with an ownership mindset. We work as strategic partners, analysing your business from every angle to identify opportunities, remove bottlenecks and create practical solutions that generate measurable business results.",
      "Our consulting covers Brand Strategy, Brand Positioning, Brand Revamping, Rebranding, Business Strategy, Marketing Strategy, Sales Strategy, Customer Experience, Brand Architecture, Advertising Strategy, Communication Planning, Digital Marketing Direction and Organisational Development. We don't believe in one-size-fits-all solutions or template-driven recommendations. Every strategy is developed specifically for your business, your market and your customers.",
      "Original thinking is at the heart of everything we do. While many agencies depend heavily on generic templates and AI-generated ideas, our recommendations are built on deep market understanding, creative thinking and practical business insight. Led by Suresh Ramakrishnan (SRK), with nearly three decades of experience in branding, advertising, marketing and business consulting, Leverage Branding & Consultancy combines creativity with commercial thinking to develop brands that are memorable, profitable and built for long-term success.",
      "Our expertise extends across founder-led businesses, family-owned enterprises, retail brands, educational institutions, healthcare organisations, hospitality businesses, manufacturing companies, service industries and startups. Whether your challenge is weak market positioning, declining sales, inconsistent branding, ineffective marketing or business expansion, we help you develop a clear roadmap for sustainable growth.",
    ],
    whyItMatters:
      "We don't simply build brands—we build businesses. By integrating Brand Strategy, Marketing Strategy, Customer Experience, Sales Enablement, Organisational Development and Business Consulting, we help organisations create stronger market positioning, improve customer trust, increase revenue opportunities and achieve lasting competitive advantage.",
    framework: {
      title: "Our Business Consulting Framework",
      steps: [
        {
          title: "Brand Discovery",
          body: "Understand your business, customers, competitors, strengths, opportunities and market potential.",
        },
        {
          title: "Brand Strategy",
          body: "Develop a distinctive brand positioning, value proposition and competitive advantage.",
        },
        {
          title: "Marketing & Sales Strategy",
          body: "Create practical marketing systems and sales strategies that generate quality enquiries and business growth.",
        },
        {
          title: "Customer Experience",
          body: "Improve every customer touchpoint to build trust, loyalty and long-term relationships.",
        },
        {
          title: "Business Transformation",
          body: "Align branding, marketing, operations and organisational development to create a scalable and sustainable business.",
        },
      ],
    },
    included: [
      {
        title: "Brand Strategy & Business Consulting Includes",
        items: [
          "Brand Strategy",
          "Brand Positioning",
          "Brand Architecture",
          "Branding & Rebranding",
          "Business Strategy",
          "Marketing Strategy",
          "Sales Strategy",
          "Customer Experience",
          "Advertising Strategy",
          "Communication Planning",
          "Digital Marketing Direction",
          "Organisational Development",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Brand Strategy Consulting?",
        a: "Brand Strategy Consulting helps businesses define their market position, clarify their value proposition, differentiate themselves from competitors and build a brand that customers trust and remember.",
      },
      {
        q: "How is Leverage Branding & Consultancy different from a traditional advertising agency?",
        a: "Most agencies focus on advertising campaigns and creative execution. We begin with understanding your business model, customers, market positioning and growth objectives before recommending branding, marketing or communication solutions.",
      },
      {
        q: "Do you provide Business Consulting as well as Branding?",
        a: "Yes. Our consulting combines Business Strategy, Brand Strategy, Marketing Strategy, Sales Strategy, Customer Experience and Organisational Development to improve overall business performance.",
      },
      {
        q: "Can you help reposition an existing business?",
        a: "Absolutely. We help businesses refresh their identity, redefine their market positioning, modernise their communication and strengthen their competitive advantage without losing the trust they have already built.",
      },
      {
        q: "What industries do you work with?",
        a: "We work with educational institutions, healthcare organisations, retail businesses, jewellery brands, hospitality companies, manufacturing firms, startups, service providers, family-owned businesses and SMEs across diverse industries.",
      },
      {
        q: "Do you help improve marketing performance?",
        a: "Yes. We review your existing marketing activities, customer journey, enquiry handling, digital presence and advertising strategy to identify opportunities that improve lead generation and conversions.",
      },
      {
        q: "Can you help increase sales?",
        a: "Yes. While sales depend on several factors, we strengthen the foundations that influence sales—including positioning, branding, customer experience, communication, sales processes and marketing strategy.",
      },
      {
        q: "Do you offer consulting for startups?",
        a: "Yes. We help startups build a strong brand foundation, define their positioning, develop marketing strategies and establish scalable business systems from the beginning.",
      },
      {
        q: "Why choose Leverage Branding & Consultancy?",
        a: "Led by Suresh Ramakrishnan (SRK), our consulting is built on nearly 30 years of practical business experience in branding, advertising, marketing and organisational development. We combine strategic thinking with creative excellence and an ownership mindset to help businesses achieve measurable, sustainable growth.",
      },
      {
        q: "How do we begin?",
        a: "Every engagement starts with a consultation to understand your business, challenges, opportunities and growth ambitions. Based on this assessment, we recommend a customised roadmap that aligns your brand strategy with your business objectives.",
      },
    ],
    relatedSlugs: ["creative-design", "creative-advertising", "corporate-training-consulting"],
    ctaLabel: "Request a Brand Consultation",
    images: [
      { src: "/insights/brand-strategy-packaging.webp", alt: "Pure Ultra Aqua steel water bottle packaging design and branding", width: 1311, height: 1000 },
      { src: "/insights/brand-strategy-insurance-ad.webp", alt: "Cholamandalam MS General Insurance advertising campaign", width: 1100, height: 495 },
    ],
    heroGrid: [
      {
        src: "/insights/brand-strategy-packaging.webp",
        alt: "Pure Ultra Aqua steel water bottle packaging design and branding",
        badgeLabel: "Packaging Design",
        badgeIcon: "package",
      },
      {
        src: "/insights/brand-strategy-jewellery-ad.webp",
        alt: "GRT Jewellers print advertising campaign",
        badgeLabel: "25+ · Years Experience",
        badgeVariant: "dark",
      },
      {
        src: "/insights/brand-strategy-corporate-ad.webp",
        alt: "TPCS enterprise software print advertisement design",
        badgeLabel: "Brand Positioning",
        badgeIcon: "strategy",
      },
      {
        src: "/insights/brand-strategy-insurance-ad.webp",
        alt: "Cholamandalam MS General Insurance advertising campaign",
        badgeLabel: "Advertising Strategy",
        badgeIcon: "creative",
      },
    ],
  },
  {
    slug: "creative-advertising",
    navLabel: "Creative & Advertising",
    h1: "Creative & Advertising Agency in Chennai",
    metaTitle: "Creative & Advertising Agency in Chennai | Campaigns, Print, Outdoor & Retail | LeverageAds",
    metaDescription:
      "LeverageAds is a creative and advertising agency in Chennai offering campaign concepts, print advertising, outdoor advertising, corporate communication and retail & FMCG branding.",
    heroSubcopy:
      "Ideas that attract attention, communicate value and move your audience towards a response.",
    intro: [
      "Advertising should do more than fill space. It should attract attention, communicate value, create recall and move the audience towards a response. LeverageAds develops advertising concepts and campaign communication for brands that want stronger launch visibility, sharper promotions and more effective customer-facing messaging.",
      "Our creative and advertising work spans campaign ideation, print advertising, outdoor communication, corporate communication and retail & FMCG branding — covering everything from a single creative concept to a fully integrated campaign.",
    ],
    whyItMatters:
      "Whether the requirement is for a jewellery launch, a resort promotion, a school admissions campaign or a retail visibility drive, we focus on ideas that are relevant to the business and persuasive to the audience.",
    included: [
      {
        title: "Creative & Advertising Includes",
        items: [
          "Advertising Campaigns",
          "Creative Concepts",
          "Print Advertising",
          "Outdoor Advertising",
          "Corporate Communication",
          "Retail & FMCG Branding",
        ],
      },
    ],
    faqs: [],
    relatedSlugs: ["ad-films-photography", "creative-design", "digital-marketing"],
    ctaLabel: "Discuss Your Campaign",
    images: [
      { src: "/portfolio/jewellery/01.webp", alt: "Sovereign jewellery festive campaign", width: 827, height: 871 },
      { src: "/portfolio/jewellery/04.webp", alt: "Challani Jewellery Mart \"RARE!\" pearl bangles campaign", width: 1168, height: 1036 },
    ],
    heroGrid: [
      {
        src: "/insights/branding-photoshoot.webp",
        alt: "Celebrity saree campaign photography",
        badgeLabel: "Campaign Concepts",
        badgeIcon: "creative",
      },
      {
        src: "/case-studies/avira-diamonds/09-ring-campaign.webp",
        alt: "\"Sparkle Spectrum\" AVIRA Diamonds ring campaign creative",
        badgeLabel: "250+ · Campaigns Delivered",
        badgeVariant: "dark",
      },
      {
        src: "/case-studies/avira-diamonds/06-bracelet-campaign.webp",
        alt: "\"Glitzy & Classy\" AVIRA Diamonds bracelet campaign creative",
        badgeLabel: "Print & Outdoor",
        badgeIcon: "media",
      },
      {
        src: "/portfolio/jewellery/07.webp",
        alt: "PGP gemstone jewellery macro product photography",
        badgeLabel: "Product Styling",
        badgeIcon: "studio",
      },
    ],
  },
  {
    slug: "digital-marketing",
    navLabel: "Digital Marketing",
    h1: "Digital Marketing Agency in Chennai",
    metaTitle: "Digital Marketing Agency in Chennai | SEO, Google Ads, Meta Ads & Social Media | LeverageAds",
    metaDescription:
      "LeverageAds provides digital marketing services in Chennai — SEO, Google Ads, Meta Ads, performance marketing, social media marketing and management, content marketing and WhatsApp marketing.",
    heroSubcopy:
      "Make your business discoverable when the right customers are actively looking for you.",
    intro: [
      "A website can look polished and still remain invisible if the right audience cannot find it through search or social media. Digital marketing is not just about ranking for generic keywords or posting content. It is about making your business discoverable and building consistent demand where potential customers are actively looking for the services, products or expertise you offer.",
      "LeverageAds provides digital marketing services in Chennai for businesses that want stronger search visibility, better performance from paid campaigns and a more consistent social media presence. Our approach connects SEO, Google Ads, Meta Ads and performance marketing with social media marketing, social media management and content marketing, so visibility, engagement and enquiries work together instead of as disconnected activities.",
      "Because we also work on branding, websites and visual communication, we are able to connect the traffic and engagement side of digital marketing with the message, design and experience side of it as well — including WhatsApp marketing to reach customers on the channel they actually respond on.",
    ],
    whyItMatters:
      "For service businesses especially, digital marketing works best when it is aligned with the actual questions customers ask, the platforms they spend time on and the language they use. That is why we look at both audience behaviour and business context rather than treating digital marketing as a purely technical checklist.",
    included: [
      {
        title: "Digital Marketing Includes",
        items: [
          "SEO",
          "Google Ads",
          "Meta Ads",
          "Performance Marketing",
          "Social Media Marketing",
          "Social Media Management",
          "Content Marketing",
          "Email & WhatsApp Marketing",
        ],
      },
    ],
    faqs: [],
    relatedSlugs: ["websites-technology", "creative-advertising", "media-planning-buying"],
    ctaLabel: "Plan My Digital Marketing Strategy",
    images: [
      { src: "/case-studies/meston-college/05.webp", alt: "Meston College Think Beyond Syllabus admissions campaign", width: 1067, height: 1893 },
      { src: "/case-studies/meston-college/01.webp", alt: "Meston College admissions creative — Not Just Studying, I'm Becoming Industry-Ready", width: 1067, height: 1893 },
    ],
    heroGrid: [
      {
        src: "/case-studies/meston-college/05.webp",
        alt: "Meston College Think Beyond Syllabus admissions campaign",
        badgeLabel: "Social Campaigns",
        badgeIcon: "growth",
      },
      {
        src: "/case-studies/flying-rainbow/06-online-classes-poster.webp",
        alt: "Live Online Drawing Classes promotional poster",
        badgeLabel: "3200+ · Ads Delivered",
        badgeVariant: "dark",
      },
      {
        src: "/portfolio/website/05.webp",
        alt: "Lakshmi Silvers e-commerce website design",
        badgeLabel: "Landing Pages",
        badgeIcon: "code",
      },
      {
        src: "/case-studies/meston-college/01.webp",
        alt: "Meston College admissions creative — Not Just Studying, I'm Becoming Industry-Ready",
        badgeLabel: "Lead Generation",
        badgeIcon: "growth",
      },
    ],
  },
  {
    slug: "websites-technology",
    navLabel: "Websites & Technology",
    h1: "Website Design, CRM, ERP & Business Technology in Chennai",
    metaTitle: "Website Design, CRM, ERP & App Development Company in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds designs and develops websites, e-commerce platforms, CRM, ERP, AI chatbots, WhatsApp automation, LMS platforms and mobile apps for growing businesses in Chennai.",
    heroSubcopy:
      "Websites, business systems and automation that work together instead of as disconnected tools.",
    intro: [
      "A website should not simply exist because every business is expected to have one. It should explain what the business does, communicate credibility, answer key questions, make the offering easy to understand and guide the visitor towards action.",
      "LeverageAds designs and develops websites for businesses that want a stronger digital presence and a more conversion-oriented online platform. We build corporate websites, e-commerce platforms, landing pages and institutional websites, with attention to UI/UX, structure, content flow and lead generation.",
      "As enquiries increase and teams expand, customer handling and operations often become scattered across calls, notebooks, spreadsheets and memory. That is where CRM and ERP systems become valuable — bringing leads, follow-ups, inventory, billing and reporting into one connected, manageable system.",
      "For many businesses today, WhatsApp is where enquiries arrive first and buying decisions move forward. We build WhatsApp automation and AI chatbot flows that qualify leads, answer common questions and route enquiries to the right person, so WhatsApp behaves like an organised sales channel instead of an unstructured inbox.",
      "We also support businesses with mobile app development and LMS (learning management system) platforms where the requirement goes beyond a website — for institutions, training providers and businesses that need a structured digital platform for their users.",
    ],
    whyItMatters:
      "Because our background is rooted in branding and communication, we approach websites, CRM, ERP and automation not just as technical builds, but as connected, business-facing systems that should work together.",
    included: [
      {
        title: "Websites Include",
        items: ["Corporate Websites", "E-commerce Websites", "Landing Pages", "UI/UX Design"],
      },
      {
        title: "Business Systems & Automation Include",
        items: ["CRM & ERP", "AI Chatbots", "WhatsApp Automation", "LMS Development", "Mobile Apps"],
      },
    ],
    idealFor: [
      "Jewellery showrooms and retailers",
      "Resorts, clinics, schools and educational institutions",
      "E-commerce and catalogue-driven businesses",
      "Businesses generating enquiries from ads, websites or social media",
    ],
    faqs: [
      {
        q: "Do you handle both website design and development?",
        a: "Yes, we manage the full process — design, development, content and launch — under one team.",
      },
      {
        q: "Will the website be mobile responsive and SEO-friendly?",
        a: "Yes, every site we build is responsive by default and structured with on-page SEO fundamentals in place.",
      },
      {
        q: "How do I know whether I need a CRM, ERP or custom app?",
        a: "We start by understanding your workflow and recommend the right fit — sometimes it's CRM alone, sometimes ERP, sometimes a lightweight app.",
      },
      {
        q: "Can WhatsApp automation handle first-level customer queries automatically?",
        a: "Yes, common questions and initial qualification can be automated before a conversation reaches your team, with a clear handover to a human when needed.",
      },
      {
        q: "Can CRM, ERP or WhatsApp automation be connected to our website leads?",
        a: "Yes, integration between your website, CRM/ERP and WhatsApp automation is a common part of our implementations.",
      },
    ],
    relatedSlugs: ["digital-marketing", "creative-design"],
    ctaLabel: "Discuss Your Project",
    images: [
      { src: "/portfolio/website/05.webp", alt: "Lakshmi Silvers e-commerce website design", width: 1032, height: 789 },
      { src: "/portfolio/website/04.webp", alt: "Relishpro website design", width: 945, height: 1489 },
    ],
    heroGrid: [
      {
        src: "/portfolio/website/04.webp",
        alt: "Relishpro website design",
        badgeLabel: "UI/UX Design",
        badgeIcon: "code",
      },
      {
        src: "/portfolio/website/06.webp",
        alt: "Lakshmi Silvers online silver jewellery store website design",
        badgeLabel: "100% · Mobile Responsive",
        badgeVariant: "dark",
      },
      {
        src: "/portfolio/website/01.webp",
        alt: "RT magazine website design",
        badgeLabel: "Web Development",
        badgeIcon: "code",
      },
      {
        src: "/portfolio/website/02.webp",
        alt: "Event website design",
        badgeLabel: "CRM & ERP Systems",
        badgeIcon: "layers",
      },
    ],
  },
  {
    slug: "ad-films-photography",
    navLabel: "Ad Films & Commercial Photography",
    h1: "Ad Films & Commercial Photography in Chennai",
    metaTitle: "Ad Film Production & Commercial Photography Company in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds offers ad films, TV commercials, brand films, product videos and commercial, product, model and drone photography for brands in Chennai.",
    heroSubcopy:
      "Commercial photography and ad films that make your product, brand and campaigns look and feel premium.",
    intro: [
      "When product presentation improves, perceived value often improves with it. Whether you are selling jewellery, food, fashion, gifts, lifestyle products or catalogue items, the quality of the photography can influence trust, desirability and response.",
      "LeverageAds offers commercial, product and model photography services in Chennai for businesses that need clean, campaign-friendly visuals — for catalogues, websites, e-commerce, social media, advertising and launch communication. We also offer drone photography for real estate, hospitality and large-format campaigns that need an aerial perspective.",
      "Video has the power to communicate emotion, product value, brand personality and business credibility far more quickly than static content alone. A well-made ad film or TV commercial can introduce a brand, launch a product, explain an offer or create stronger recall across digital and offline platforms.",
      "LeverageAds offers ad film production services in Chennai for brands, retailers, institutions, hospitality businesses and growing companies that need concept-driven, commercially relevant visual communication — TV commercials, corporate films, brand films, product videos and social media reels.",
      "Our process can cover concept development, scripting, visual planning, production coordination, direction, shoot execution and post-production guidance. Whether you need a jewellery commercial, a resort promotional film, a college admissions video or product-led campaign content, we help translate the brief into a polished visual communication asset that aligns with your business objective.",
    ],
    whyItMatters:
      "Our emphasis is not just on taking good pictures or shooting good footage. It is on creating visuals that help the brand present itself more professionally and sell more effectively.",
    included: [
      {
        title: "Ad Films & Commercial Photography Include",
        items: [
          "TV Commercials",
          "Corporate Films",
          "Product Videos",
          "Brand Films",
          "Social Media Reels",
          "Commercial Photography",
          "Product Photography",
          "Model Photography",
          "Drone Photography",
        ],
      },
    ],
    idealFor: [
      "Jewellery brands and showrooms",
      "Fashion and lifestyle brands",
      "Food brands and restaurants",
      "Real estate and hospitality brands",
      "E-commerce and catalogue sellers",
    ],
    faqs: [],
    relatedSlugs: ["creative-advertising", "creative-design"],
    ctaLabel: "Discuss Your Shoot",
    images: [
      { src: "/portfolio/photography/08.webp", alt: "Lakshmi Jewellery campaign model photography", width: 1456, height: 1322 },
      { src: "/portfolio/jewellery/07.webp", alt: "PGP gemstone jewellery macro product photography", width: 591, height: 591 },
    ],
    heroGrid: [
      {
        src: "/case-studies/avira-diamonds/04-model-portrait-03.webp",
        alt: "AVIRA Diamonds bridal campaign model portrait",
        badgeLabel: "Creative Direction",
        badgeIcon: "creative",
      },
      {
        src: "/case-studies/avira-diamonds/07-pendant-campaign.webp",
        alt: "AVIRA Diamonds rose gold pendant necklace campaign creative",
        badgeLabel: "4K · Ultra HD",
        badgeVariant: "dark",
      },
      {
        src: "/portfolio/jewellery/07.webp",
        alt: "PGP gemstone jewellery macro product photography",
        badgeLabel: "Studio Shoot",
        badgeIcon: "studio",
      },
      {
        src: "/case-studies/shanthi-jewellery/03-model-portrait.webp",
        alt: "Shanthi Jewellers bridal jewellery campaign model portrait",
        badgeLabel: "Retouching Expertise",
        badgeIcon: "retouch",
      },
    ],
  },
  {
    slug: "creative-design",
    navLabel: "Creative Design",
    h1: "Creative Design Agency in Chennai",
    metaTitle: "Creative Design Agency in Chennai | Logo, Brand Identity & Packaging Design | LeverageAds",
    metaDescription:
      "Looking for a creative design agency in Chennai? LeverageAds offers logo design, brand identity, packaging design, brochures, catalogues, company profiles and presentation design.",
    heroSubcopy:
      "Design that helps customers recognise, trust and remember you — across every piece you put in front of them.",
    intro: [
      "A strong brand does not begin with design alone. It begins with clarity and positioning. But it is design — logo, identity, packaging and every printed or presented piece — that makes that clarity visible and memorable.",
      "LeverageAds offers creative design services in Chennai for startups, retail brands, institutions and growing businesses looking to create a stronger identity, sharper communication and a more premium market presence. Depending on the need, this may start with logo design and a visual identity system, then extend into packaging, brochures, catalogues, company profiles, prospectus design, annual reports and presentation design.",
      "Our creative design services in Chennai are designed for startups, growing businesses, retailers, educational institutions, hospitality brands and established organisations looking to create a more distinctive and professional market presence.",
    ],
    whyItMatters:
      "The goal is not just to make each piece look better on its own. The goal is to make every piece — from a logo to an annual report — feel consistent, coherent and unmistakably part of the same brand.",
    included: [
      {
        title: "Creative Design Includes",
        items: [
          "Logo Design",
          "Brand Identity",
          "Packaging Design",
          "Brochures",
          "Catalogues",
          "Company Profiles",
          "Prospectus",
          "Annual Reports",
          "Presentation Design",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between logo design and complete brand identity?",
        a: "A logo is one visual asset. A complete brand identity covers the logo, colour palette, typography, imagery style and how it's applied consistently across brochures, packaging, profiles and every other touchpoint.",
      },
      {
        q: "Can you redesign our existing logo without losing brand recognition?",
        a: "Yes, we can refresh an existing identity while retaining the visual cues customers already recognise, rather than changing everything from scratch.",
      },
      {
        q: "Do you design annual reports and company profiles as well as logos and packaging?",
        a: "Yes. Once the core identity is set, we extend it into brochures, catalogues, company profiles, prospectus design, annual reports and presentation templates.",
      },
      {
        q: "Can you take a design through to print-ready files?",
        a: "Yes, our creative design work is delivered print-ready and can be handed directly to our print production team if needed.",
      },
    ],
    relatedSlugs: ["brand-strategy-consulting", "print-production", "creative-advertising"],
    ctaLabel: "Talk to a Design Expert",
    images: [
      { src: "/portfolio/logo-identity/01.webp", alt: "Challani Jewellery Mart brand identity and stationery", width: 3937, height: 4650 },
      { src: "/portfolio/packaging/07.webp", alt: "Silk saree gift box packaging design", width: 1000, height: 1000 },
    ],
    heroGrid: [
      {
        src: "/portfolio/logo-identity/03.webp",
        alt: "Sudharma Foundation brand identity and stationery",
        badgeLabel: "Brand Identity",
        badgeIcon: "creative",
      },
      {
        src: "/portfolio/packaging/07.webp",
        alt: "Silk saree gift box packaging design",
        badgeLabel: "1000+ · Designs Delivered",
        badgeVariant: "dark",
      },
      {
        src: "/portfolio/packaging/03.webp",
        alt: "Premium gift box packaging design",
        badgeLabel: "Packaging Design",
        badgeIcon: "package",
      },
      {
        src: "/portfolio/logo-identity/06.webp",
        alt: "Logo design collection — CoolTrip, Tejaas, SS Shriman, IcorePro, RARS",
        badgeLabel: "Logo Design",
        badgeIcon: "creative",
      },
    ],
  },
  {
    slug: "print-production",
    navLabel: "Print Production",
    h1: "Print Production Services in Chennai",
    metaTitle: "Print Production Company in Chennai | Offset & Digital Printing | LeverageAds",
    metaDescription:
      "LeverageAds handles print production in Chennai — offset printing, digital printing, brochures, flyers, letterheads, business cards, stationery and packaging, from design to delivery.",
    heroSubcopy:
      "From a print-ready file to a finished, delivered piece — handled end to end.",
    intro: [
      "A great design can still fall flat if it is printed on the wrong stock, with the wrong finish, or through a process that was not suited to the job. Print production is the part of the process most businesses never see, but it is exactly where quality is won or lost.",
      "LeverageAds handles print production in Chennai for businesses that want their brochures, stationery, packaging and promotional material to come out looking as good in hand as they did on screen. We work across offset printing and digital printing, choosing the right process, paper and finish for each job — whether that's a short run of business cards or a large print order for a brand launch.",
      "Because our print production sits alongside our creative design team, we can take a piece from concept through to a delivered, finished product under one roof, with consistency checked at every stage.",
    ],
    whyItMatters:
      "Our focus is on getting the details right — colour accuracy, paper stock, finish and turnaround — so that the printed piece represents the brand as well as the design file did.",
    included: [
      {
        title: "Print Production Includes",
        items: [
          "Offset Printing",
          "Digital Printing",
          "Brochures",
          "Flyers",
          "Handouts",
          "Letterheads",
          "Business Cards",
          "Stationery",
          "Packaging",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you handle both design and printing, or only printing?",
        a: "Both. We can take a project from creative design through to print production, or handle printing alone if the design is already finalised.",
      },
      {
        q: "Do you handle both small and large print runs?",
        a: "Yes, from a short digital print run of business cards to a larger offset print order for a full stationery or packaging rollout.",
      },
      {
        q: "Can you match our existing brand colours and paper stock?",
        a: "Yes, colour accuracy and consistency with your brand guidelines are part of how we manage every print job.",
      },
    ],
    relatedSlugs: ["creative-design", "brand-strategy-consulting"],
    ctaLabel: "Get a Print Quote",
    images: [
      { src: "/portfolio/packaging/03.webp", alt: "Premium gift box packaging design", width: 1772, height: 1254 },
      { src: "/portfolio/logo-identity/04.webp", alt: "Surbharti brand identity and stationery", width: 1000, height: 750 },
    ],
    heroGrid: [
      {
        src: "/case-studies/meston-college/11-stationery-mockup.webp",
        alt: "Meston College stationery mockup — letterhead, envelopes, business cards and folder",
        badgeLabel: "Print-Ready Files",
        badgeIcon: "print",
      },
      {
        src: "/portfolio/packaging/03.webp",
        alt: "Premium gift box packaging design",
        badgeLabel: "100% · Print-Ready",
        badgeVariant: "dark",
      },
      {
        src: "/case-studies/hadron-homes/09-stationery-mockup.webp",
        alt: "Hadron Homes stationery mockup — letterhead, envelopes and business cards",
        badgeLabel: "Stationery & Collateral",
        badgeIcon: "layers",
      },
      {
        src: "/portfolio/packaging/07.webp",
        alt: "Silk saree gift box packaging design",
        badgeLabel: "Packaging Design",
        badgeIcon: "package",
      },
    ],
  },
  {
    slug: "media-planning-buying",
    navLabel: "Media Planning & Buying",
    h1: "Media Planning & Buying Services in Chennai",
    metaTitle: "Media Planning & Buying Agency in Chennai | TV, Print, Radio & Outdoor | LeverageAds",
    metaDescription:
      "LeverageAds plans and buys media in Chennai across television, newspaper, magazine, radio, outdoor, cinema and transit — the right media mix, negotiated and placed on your behalf.",
    heroSubcopy:
      "The right media, in the right place, at the right price — planned and bought on your behalf.",
    intro: [
      "A strong campaign still depends on where it runs. Media planning and buying is the discipline of deciding which channels will actually reach your audience, and then negotiating and placing that media at the right cost — a very different skill from creating the campaign itself.",
      "LeverageAds plans and buys media in Chennai across television, newspaper, magazine, radio, outdoor, cinema and transit, so that the creative work we produce — or work handed to us by another team — reaches the right audience through the right combination of channels.",
      "Because media planning and buying sits alongside our creative and advertising work, we can recommend a media mix that is grounded in what the campaign is actually trying to achieve, rather than defaulting to whichever channel is easiest to book.",
    ],
    whyItMatters:
      "Our role is to make sure media spend is placed with intent — the right channels, the right markets and the right negotiated rates — rather than spread thinly across everything available.",
    included: [
      {
        title: "Media Planning & Buying Includes",
        items: [
          "Television Advertising",
          "Newspaper Advertising",
          "Magazine Advertising",
          "Radio Advertising",
          "Outdoor Media",
          "Cinema Advertising",
          "Transit Media",
          "Media Planning",
          "Media Buying",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you plan and buy media for a campaign your team didn't create?",
        a: "Yes, we can plan and buy media for creative developed by another agency or by your in-house team.",
      },
      {
        q: "How do you decide which media channels to recommend?",
        a: "We start with the campaign objective, audience and budget, then recommend a media mix built around what will actually reach that audience.",
      },
      {
        q: "Do you handle the negotiation and booking directly?",
        a: "Yes, negotiation, booking and placement are handled on your behalf as part of our media buying service.",
      },
    ],
    relatedSlugs: ["creative-advertising", "digital-marketing"],
    ctaLabel: "Plan My Media Strategy",
    images: [
      { src: "/portfolio/jewellery/05.webp", alt: "Sri Lakshmi Jewellery gold necklace campaign", width: 591, height: 984 },
      { src: "/portfolio/website/06.webp", alt: "Lakshmi Silvers online silver jewellery store website design", width: 1240, height: 947 },
    ],
    heroGrid: [
      {
        src: "/portfolio/textile-fashion/09.webp",
        alt: "Rajendira's Women's Store \"What Women Want\" hoarding campaign",
        badgeLabel: "Outdoor Advertising",
        badgeIcon: "media",
      },
      {
        src: "/case-studies/avira-diamonds/11-retail-outdoor-display.webp",
        alt: "AVIRA Diamonds \"Found Sustainable Luxury\" retail outdoor display mockup",
        badgeLabel: "100+ · Brands Reached",
        badgeVariant: "dark",
      },
      {
        src: "/portfolio/hospitality-food/08.webp",
        alt: "Ocean Spray resort magazine advertisement",
        badgeLabel: "Print & Magazine",
        badgeIcon: "media",
      },
      {
        src: "/portfolio/jewellery/09.webp",
        alt: "Challani Jewellery Mart temple jewellery campaign",
        badgeLabel: "Multi-Channel Reach",
        badgeIcon: "growth",
      },
    ],
  },
  {
    slug: "corporate-training-consulting",
    navLabel: "Organisational Development Consulting",
    h1: "Organisational Development Consulting",
    metaTitle:
      "Organisational Development Consulting in Chennai | People, Process & Brand | LeverageAds",
    metaDescription:
      "Leverage Branding & Consultancy offers Organisational Development Consulting in Chennai — TQM, leadership development, SOPs, emotional intelligence and brand strategy, led by Suresh Ramakrishnan (SRK).",
    heroSubcopy: "Transforming Organisations Through People, Process, Performance & Brand",
    intro: [
      "An organisation's success is not determined solely by its products or services, but by the people who represent its brand every day. Every employee interaction with customers, clients, vendors and stakeholders influences how the organisation is perceived. Sustainable growth happens when the brand promise is consistently delivered through empowered people, efficient processes and a culture of excellence.",
      "At Leverage Branding & Consultancy, we help organisations strengthen both their external brand and their internal foundation. Our Organisational Development Consulting focuses on aligning people, processes and performance with business objectives, enabling organisations to grow with confidence, consistency and clarity.",
      "Led by Suresh Ramakrishnan (SRK), we work with organisations that typically have 25 or more employees, helping them build high-performing teams, develop effective leadership, improve customer experience and create collaborative work environments. Our consulting goes beyond traditional training by identifying organisational gaps and implementing practical solutions that deliver measurable business outcomes.",
      "Our services include Brand Strategy Workshops, Organisational Development, Total Quality Management (TQM), Leadership Development, Soft Skills Training, Customer Service Excellence, Team Building, Employee Induction Systems, Standard Operating Procedures (SOPs), Departmental Integration, Business Communication, Emotional Intelligence and Performance Improvement Programmes.",
      "A key strength of our consulting is TQM-based organisational transformation, where employees gain a deeper understanding of how every department contributes to the company's success. By breaking communication barriers, improving cross-functional collaboration and creating shared accountability, organisations experience stronger teamwork, better customer service, improved productivity and sustainable growth.",
      "Emotional Intelligence is at the heart of organisational success. Technical skills may secure a job, but emotional intelligence determines how effectively people communicate, lead, collaborate and manage relationships. Through practical EI workshops, employees learn self-awareness, self-management, empathy, active listening, conflict resolution, stress management and relationship building. These skills improve teamwork, enhance customer interactions, strengthen leadership and create a healthier workplace culture where people perform at their best.",
      "We believe that every employee is a Brand Ambassador. When people understand the organisation's vision, values and expectations, they naturally communicate better, take ownership of their responsibilities and contribute to a positive workplace culture. This transformation creates lasting value for employees, customers and the organisation alike.",
    ],
    whyItMatters:
      "Every consulting engagement is customised to the organisation's culture, industry and business goals. Our practical, experience-driven approach ensures that learning is immediately applicable, resulting in stronger leadership, connected teams, streamlined processes and measurable organisational performance.",
    framework: {
      title: "Our Organisational Development Framework",
      steps: [
        {
          title: "Brand Strategy",
          body: "Build a strong organisational identity, clarify your value proposition and align your brand promise with customer expectations.",
        },
        {
          title: "People Development",
          body: "Develop confident leaders, customer-focused employees and engaged teams through practical behavioural and professional development programmes.",
        },
        {
          title: "Process Improvement",
          body: "Establish clear systems, Standard Operating Procedures (SOPs), TQM practices and structured workflows that improve efficiency and accountability.",
        },
        {
          title: "Organisational Growth",
          body: "Create a high-performance culture where people, processes and purpose work together to achieve sustainable business success.",
        },
      ],
    },
    included: [
      {
        title: "Organisational Development Consulting Includes",
        items: [
          "Brand Strategy Workshops",
          "Organisational Development",
          "Total Quality Management (TQM)",
          "Leadership Development",
          "Soft Skills Training",
          "Customer Service Excellence",
          "Team Building",
          "Employee Induction Systems",
          "Standard Operating Procedures (SOPs)",
          "Departmental Integration",
          "Business Communication",
          "Emotional Intelligence",
          "Performance Improvement Programmes",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Organisational Development Consulting?",
        a: "Organisational Development (OD) Consulting is a structured approach to improving an organisation's people, processes, culture and performance. It helps businesses become more efficient, collaborative and customer-focused.",
      },
      {
        q: "How is your approach different from regular corporate training?",
        a: "Traditional training focuses on individual skills. Our consulting addresses the entire organisation by improving leadership, employee behaviour, teamwork, business processes, customer experience and organisational culture.",
      },
      {
        q: "Which organisations do you typically work with?",
        a: "We primarily work with organisations employing 25 or more people, including SMEs, educational institutions, manufacturing companies, service businesses, healthcare organisations and family-owned enterprises.",
      },
      {
        q: "What is TQM, and why is it important?",
        a: "Total Quality Management (TQM) is a management philosophy that encourages continuous improvement across the organisation. It connects departments, improves communication, enhances accountability and creates a culture focused on quality and customer satisfaction.",
      },
      {
        q: "Can TQM improve employee relationships?",
        a: "Yes. TQM helps employees understand how each department contributes to organisational success. This improves mutual respect, collaboration and cross-functional teamwork while reducing internal conflicts.",
      },
      {
        q: "Why is Emotional Intelligence important in the workplace?",
        a: "Emotional Intelligence helps employees understand and manage their own emotions while responding appropriately to others. It improves communication, teamwork, leadership, customer service, decision-making and conflict resolution, resulting in stronger relationships and a more productive work environment.",
      },
      {
        q: "Do you customise every programme?",
        a: "Absolutely. Every consulting assignment begins with understanding your organisation's challenges, objectives and culture before designing a tailored development roadmap.",
      },
      {
        q: "What outcomes can organisations expect?",
        a: "Organisations typically experience stronger leadership, improved employee engagement, better departmental coordination, enhanced customer service, clearer processes, increased productivity and a more positive organisational culture.",
      },
      {
        q: "Do you provide SOP development and employee induction systems?",
        a: "Yes. We help organisations document processes, create Standard Operating Procedures (SOPs), design structured induction programmes and establish systems that ensure operational consistency.",
      },
      {
        q: "Can you support long-term organisational transformation?",
        a: "Yes. In addition to workshops, we offer ongoing consulting, mentoring and implementation support to ensure lasting organisational improvement.",
      },
      {
        q: "Why choose Leverage Branding & Consultancy?",
        a: "With over two decades of experience in branding, marketing, organisational consulting and behavioural development, Suresh Ramakrishnan (SRK) brings a unique perspective that integrates Brand Strategy, People Development, Process Improvement and Organisational Growth — helping organisations build not just better teams, but better businesses.",
      },
    ],
    relatedSlugs: ["brand-strategy-consulting"],
    ctaLabel: "Discuss an Organisational Development Programme",
    images: [
      { src: "/insights/od-team-photo.webp", alt: "Corporate team celebrating after an organisational development workshop", width: 1333, height: 1000 },
    ],
    heroGrid: [
      {
        src: "/insights/od-training-session.webp",
        alt: "Corporate boardroom training session with employees taking notes",
        badgeLabel: "Team Workshops",
        badgeIcon: "training",
      },
      {
        src: "/insights/od-team-huddle.webp",
        alt: "Suresh Ramakrishnan (SRK) coaching frontline staff in a team huddle",
        badgeLabel: "20+ · Years Experience",
        badgeVariant: "dark",
      },
      {
        src: "/insights/od-ei-workshop.webp",
        alt: "Emotional intelligence workshop session on workplace scenarios",
        badgeLabel: "EI & Leadership",
        badgeIcon: "leadership",
      },
      {
        src: "/insights/od-team-photo.webp",
        alt: "Corporate team celebrating after an organisational development workshop",
        badgeLabel: "Culture Building",
        badgeIcon: "growth",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

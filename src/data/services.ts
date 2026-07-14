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
  faqs: FAQ[];
  relatedSlugs: string[];
  ctaLabel: string;
  draft?: boolean;
  images?: ServiceImage[];
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
      "Brand Strategy & Business Consulting in Chennai | Positioning, Architecture & Rebranding | LeverageAds",
    metaDescription:
      "LeverageAds offers brand strategy and business consulting in Chennai — brand positioning, brand architecture, rebranding, marketing strategy and business consulting.",
    heroSubcopy:
      "A thoughtful, commercially grounded outside perspective on how your business is positioned, communicated and experienced.",
    intro: [
      "Not every business problem is a design problem. Sometimes the real challenge lies in unclear positioning, scattered communication, weak customer experience, unstructured enquiry handling, inconsistent service delivery or a lack of alignment between the business model and the way the brand is being presented.",
      "LeverageAds offers business consultancy and brand strategy support for businesses that need a more thoughtful, practical and commercially grounded outside perspective. This may include brand positioning discussions, brand architecture for businesses with multiple products or divisions, rebranding for companies that have outgrown their original identity, customer experience review, marketing strategy or strategic input on how to present and structure the business more effectively.",
    ],
    whyItMatters:
      "This service is especially valuable for founder-led businesses, family-run enterprises, retail businesses, educational institutions, hospitality brands and clinics that want to improve the way the business is perceived, communicated and experienced.",
    included: [
      {
        title: "Brand Strategy & Consulting Includes",
        items: [
          "Brand Strategy",
          "Brand Positioning",
          "Brand Architecture",
          "Branding & Rebranding",
          "Marketing Strategy",
          "Business Consulting",
        ],
      },
    ],
    faqs: [],
    relatedSlugs: ["creative-design", "creative-advertising"],
    ctaLabel: "Request a Brand Consultation",
    images: [
      { src: "/case-studies/relishpro/01-cover.webp", alt: "RelishPro beverage brand campaign photography", width: 911, height: 600 },
      { src: "/portfolio/logo-identity/01.webp", alt: "Challani Jewellery Mart brand identity and stationery", width: 3937, height: 4650 },
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
      { src: "/portfolio/corporate/07.webp", alt: "Pulse72 fitness brand campaign", width: 945, height: 945 },
      { src: "/portfolio/corporate/01.webp", alt: "Premier Voltage Stabilizer product campaign", width: 945, height: 946 },
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
      { src: "/portfolio/photography/01.webp", alt: "Diamond and pearl necklace product photography", width: 827, height: 727 },
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
      { src: "/portfolio/magazine/01.webp", alt: "RT magazine cover feature", width: 932, height: 1319 },
      { src: "/portfolio/logo-identity/03.webp", alt: "Sudharma Foundation brand identity and stationery", width: 1181, height: 1571 },
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
    draft: true,
    images: [
      { src: "/portfolio/packaging/03.webp", alt: "Premium gift box packaging design", width: 1772, height: 1254 },
      { src: "/portfolio/logo-identity/04.webp", alt: "Surbharti brand identity and stationery", width: 1000, height: 750 },
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
    draft: true,
    images: [
      { src: "/portfolio/magazine/06.webp", alt: "RT magazine travel feature cover", width: 922, height: 1314 },
      { src: "/portfolio/cinema/01.webp", alt: "Tamil film release campaign creative", width: 983, height: 737 },
    ],
  },
  {
    slug: "corporate-training-consulting",
    navLabel: "Corporate Training & Consulting",
    h1: "Corporate Training & Consulting in Chennai",
    metaTitle: "Corporate Training Company in Chennai | Workshops, SOPs & Leadership Development | LeverageAds",
    metaDescription:
      "LeverageAds offers corporate training and consulting in Chennai — SOP development, employee induction, branding and marketing workshops, soft skills and leadership development.",
    heroSubcopy:
      "Practical training and consulting that helps teams communicate, perform and lead with more confidence.",
    intro: [
      "A business can have a strong brand and a capable team, and still underperform if day-to-day processes are undocumented, new employees are inducted informally, or teams have never been trained on how to represent the brand consistently in front of a customer.",
      "LeverageAds offers corporate training and consulting for businesses that want to strengthen how their teams operate and communicate — from SOP development and structured employee induction, to branding and marketing workshops that help internal teams understand and apply the brand correctly, to customer service, soft skills and leadership development training.",
      "This work draws on the same experience-led, workshop-based approach we bring to our own training sessions — including sessions run on communication, expression and emotional intelligence — adapted to the practical needs of a business team rather than a classroom.",
    ],
    whyItMatters:
      "Our focus is on training that is practical and grounded in real day-to-day work, not generic theory — so teams leave with something they can actually apply.",
    included: [
      {
        title: "Corporate Training & Consulting Includes",
        items: [
          "SOP Development",
          "Employee Induction",
          "Corporate Training",
          "Branding Workshops",
          "Marketing Workshops",
          "Customer Service Training",
          "Soft Skills",
          "Leadership Development",
          "Entrepreneurship Development",
        ],
      },
    ],
    faqs: [
      {
        q: "Can training be customised to our industry and team size?",
        a: "Yes, every training or workshop is planned around your team's size, role mix and industry rather than delivered as a fixed generic module.",
      },
      {
        q: "Do you help document SOPs, or only deliver training?",
        a: "Both. We can help document SOPs and processes as well as deliver the training that goes with them.",
      },
      {
        q: "Can you run branding or marketing workshops for our internal team?",
        a: "Yes, these workshops are designed to help internal teams understand and apply brand guidelines and marketing thinking consistently in their day-to-day work.",
      },
    ],
    relatedSlugs: ["brand-strategy-consulting"],
    ctaLabel: "Discuss a Training Programme",
    draft: true,
    images: [
      { src: "/insights/theatre-workshop.webp", alt: "Emotional intelligence in theatre acting workshop in Kodaikanal", width: 906, height: 1280 },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

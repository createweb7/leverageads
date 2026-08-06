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
  whyChoose?: string[];
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
    heroSubcopy: "Great businesses are rarely built by accident.",
    intro: [
      "They are built on clear thinking, disciplined execution and a brand that knows exactly what it stands for.",
      "For over 26 years, Leverage Branding & Consultancy has helped businesses simplify complexity, sharpen their positioning and create systems that support profitable growth. Whether it is a retail chain, an educational institution, a healthcare brand, a manufacturing company or a growing corporate, our role has remained the same—to help business owners make better strategic decisions.",
      "Simple thinking creates smooth businesses.",
      "When your brand, marketing, sales and customer experience work together, growth becomes predictable rather than accidental. Decisions become easier. Teams become aligned. Customers trust you more. Profits follow.",
      "Our consulting is not based on management jargon or generic templates. It is built on practical business experience, market understanding and creative thinking that has been tested across hundreds of brands and industries.",
      "When clients work with Leverage, they gain more than an advertising agency. They gain a strategic business partner who looks at the business as an owner would—finding opportunities, eliminating bottlenecks and creating practical solutions that produce measurable business outcomes.",
      "You don't have to manage every aspect of your brand alone.",
      "Bring us your ambition. We'll bring the strategy, the experience and the commitment to help you build a stronger, more valuable business.",
    ],
    whyItMatters:
      "Build the business right. The brand will follow. Build the brand right. The business will grow.",
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
        a: "Brand Strategy Consulting helps businesses define their market positioning, brand identity, messaging and long-term direction. It ensures that every customer interaction consistently communicates your brand's value and differentiates you from competitors.",
      },
      {
        q: "How is Business Consulting different from Branding?",
        a: "Branding focuses on how your business is perceived by customers, while Business Consulting looks at your overall business performance, including strategy, operations, marketing, sales, customer experience and organisational effectiveness. At Leverage, we combine both to deliver measurable business growth.",
      },
      {
        q: "Who can benefit from your Brand Strategy & Business Consulting services?",
        a: "Our consulting services are ideal for startups, SMEs, family-owned businesses, retail brands, jewellery showrooms, educational institutions, hospitals, hotels, manufacturers, service businesses and organisations planning expansion or transformation.",
      },
      {
        q: "Do you help businesses that already have an established brand?",
        a: "Yes. We work with both new and established businesses. Whether you need a complete rebranding, brand repositioning, marketing strategy or business transformation, we develop customised solutions based on your current challenges and future goals.",
      },
      {
        q: "What does a Brand Consultation include?",
        a: "A typical consultation covers brand positioning, market & competitor analysis, customer insights, marketing strategy, sales strategy, customer experience, business process review, growth opportunities and an action plan with recommendations.",
      },
      {
        q: "Do you provide marketing strategy along with branding?",
        a: "Absolutely. A strong brand requires a strong marketing strategy. We help businesses plan digital marketing, advertising, media planning, lead generation, customer acquisition and long-term brand communication.",
      },
      {
        q: "Can you help improve sales and business growth?",
        a: "Yes. Our consulting focuses on identifying business bottlenecks, improving customer acquisition, strengthening sales processes, enhancing customer experience and building systems that support sustainable growth.",
      },
      {
        q: "Do you offer business mentoring for founders and entrepreneurs?",
        a: "Yes. We provide one-to-one mentoring for business owners, entrepreneurs and leadership teams, helping them make strategic decisions, strengthen leadership, improve profitability and scale their businesses effectively.",
      },
      {
        q: "What industries do you specialise in?",
        a: "We have experience working with jewellery, retail, education, healthcare, hospitality, manufacturing, real estate, service industries, NGOs, startups and family-owned businesses, providing customised consulting for each sector.",
      },
      {
        q: "How is Leverage Branding & Consultancy different from a traditional advertising agency?",
        a: "Traditional agencies primarily focus on advertising and creative campaigns. We go beyond marketing by integrating brand strategy, business consulting, organisational development, customer experience, marketing systems and growth planning to help businesses achieve long-term success.",
      },
      {
        q: "Do you help businesses with rebranding and brand repositioning?",
        a: "Yes. We help organisations refresh their identity, reposition their brand, redefine their messaging and improve market perception while ensuring a smooth transition for customers and stakeholders.",
      },
      {
        q: "What is Organisational Development, and why is it important?",
        a: "Organisational Development focuses on improving leadership, employee performance, business processes and workplace culture. Strong internal systems and people are essential for delivering a consistent customer experience and achieving sustainable growth.",
      },
      {
        q: "How long does a consulting engagement typically last?",
        a: "The duration depends on your objectives. A brand audit or strategy workshop may take a few days, while complete business transformation, mentoring and organisational development programmes may continue for several months with ongoing support.",
      },
      {
        q: "Will you implement the strategies you recommend?",
        a: "Yes. Unlike many consultants who only provide reports, we actively support implementation. We work alongside your leadership team to execute strategies, train employees, develop SOPs, monitor progress and refine the plan as your business grows.",
      },
      {
        q: "Why should I choose Leverage Branding & Consultancy?",
        a: "With over 25 years of experience, Leverage combines branding, advertising, marketing, business consulting and organisational development under one roof. Our approach is practical, customised and results-oriented, helping businesses build stronger brands, better systems and sustainable long-term growth.",
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
        title: "Brand Identity Design",
        items: [
          "Logo Design",
          "Brand Identity Development",
          "Brand Guidelines / Brand Manual",
          "Corporate Identity Design",
          "Brand Naming",
          "Tagline Creation",
          "Visual Identity Systems",
          "Brand Refresh & Rebranding",
        ],
      },
      {
        title: "Print Design",
        items: [
          "Brochures",
          "Company Profiles",
          "Product Catalogues",
          "Annual Reports",
          "Newsletters",
          "Flyers",
          "Leaflets",
          "Pamphlets",
          "Posters",
          "Invitations",
          "Certificates",
          "Calendars",
          "Greeting Cards",
        ],
      },
      {
        title: "Corporate Stationery",
        items: [
          "Business Cards",
          "Letterheads",
          "Envelopes",
          "ID Cards",
          "Employee Identity Kits",
          "Presentation Folders",
          "Notepads",
          "Diaries",
          "Corporate Gift Branding",
        ],
      },
      {
        title: "Marketing & Advertising Creatives",
        items: [
          "Newspaper Advertisements",
          "Magazine Advertisements",
          "Press Ads",
          "Hoardings",
          "Billboards",
          "Bus Shelters",
          "Pole Kiosks",
          "Outdoor Campaign Creatives",
          "Transit Media Design",
          "Point of Purchase (POP) Materials",
        ],
      },
      {
        title: "Product & Packaging Design",
        items: [
          "Packaging Design",
          "Label Design",
          "Box Design",
          "Pouch Design",
          "Bottle Label Design",
          "Carton Design",
          "FMCG Packaging",
          "Luxury Packaging",
          "Retail Display Design",
        ],
      },
      {
        title: "Digital Design",
        items: [
          "Website UI Design",
          "Landing Page Design",
          "Mobile App UI",
          "Emailer Design",
          "Digital Banners",
          "Google Display Ads",
          "Social Media Creatives",
          "Carousel Posts",
          "Story Creatives",
          "YouTube Thumbnail Design",
          "Infographics",
        ],
      },
      {
        title: "Social Media Branding",
        items: [
          "Instagram Branding",
          "Facebook Creatives",
          "LinkedIn Posts",
          "WhatsApp Campaign Creatives",
          "Festival Posts",
          "Product Launch Campaigns",
          "Reels Cover Design",
          "Social Media Templates",
        ],
      },
      {
        title: "Presentation Design",
        items: [
          "Corporate Presentations",
          "Investor Decks",
          "Pitch Decks",
          "Sales Presentations",
          "Training Presentations",
          "Educational Presentations",
        ],
      },
      {
        title: "Exhibition & Event Design",
        items: [
          "Exhibition Stall Design",
          "Backdrop Design",
          "Stage Branding",
          "Roll-up Standees",
          "Welcome Arch Design",
          "Event Invitations",
          "Event Branding",
          "Product Launch Branding",
        ],
      },
      {
        title: "Retail Branding",
        items: [
          "Showroom Branding",
          "Store Graphics",
          "In-store Branding",
          "Window Displays",
          "Shelf Branding",
          "Danglers",
          "Wobblers",
          "Retail Signage",
        ],
      },
      {
        title: "Environmental Graphics",
        items: [
          "Office Branding",
          "Reception Branding",
          "Wall Graphics",
          "Directional Signage",
          "Factory Branding",
          "Campus Branding",
          "School Branding",
          "Hospital Branding",
        ],
      },
      {
        title: "Vehicle Branding",
        items: [
          "Car Wrap Design",
          "Bus Branding",
          "Truck Branding",
          "Van Graphics",
          "Fleet Branding",
        ],
      },
      {
        title: "Publishing Design",
        items: [
          "Coffee Table Books",
          "Educational Books",
          "Training Manuals",
          "Workbooks",
          "Magazines",
          "E-books",
        ],
      },
      {
        title: "Creative Content",
        items: [
          "Copywriting",
          "Advertising Concepts",
          "Campaign Ideas",
          "Brand Story Development",
          "Script Writing",
          "Video Storyboards",
          "Radio Jingles",
          "Voice-over Scripts",
        ],
      },
      {
        title: "Photography & Visual Production",
        items: [
          "Commercial Photography",
          "Product Photography",
          "Corporate Photography",
          "Industrial Photography",
          "Food Photography",
          "Architecture Photography",
          "Fashion Photography",
          "Lifestyle Photography",
        ],
      },
      {
        title: "Ad Film & Video Production",
        items: [
          "TV Commercials",
          "Digital Ads",
          "Corporate Films",
          "Brand Films",
          "Product Videos",
          "Explainer Videos",
          "Testimonial Videos",
          "Training Videos",
          "Documentary Films",
          "Motion Graphics",
          "Animation",
        ],
      },
    ],
    faqs: [
      {
        q: "What services does LeverageAds offer?",
        a: "LeverageAds provides end-to-end branding, advertising, design, digital marketing, business consultancy, ad film production, photography, websites, CRM solutions and corporate training.",
      },
      {
        q: "How long has LeverageAds been in business?",
        a: "LeverageAds has been helping businesses build stronger brands for 26 years, serving clients across multiple industries.",
      },
      {
        q: "Do you design logos?",
        a: "Yes. We create memorable logos along with complete brand identity systems, brand guidelines and visual communication standards.",
      },
      {
        q: "Can you redesign an existing brand?",
        a: "Absolutely. We help businesses modernise their identity while preserving their brand equity through strategic rebranding.",
      },
      {
        q: "Do you provide packaging design?",
        a: "Yes. We design packaging for FMCG, food, healthcare, cosmetics, retail, jewellery and industrial products.",
      },
      {
        q: "Can LeverageAds handle both design and printing?",
        a: "Yes. We manage the complete process — from concept and design to production coordination and quality supervision.",
      },
      {
        q: "Do you create websites?",
        a: "Yes. We design responsive websites, landing pages, e-commerce platforms and integrated business portals with CRM and ERP solutions.",
      },
      {
        q: "Do you offer digital marketing?",
        a: "Yes. Our services include SEO, Google Ads, Meta Ads, social media marketing, content creation, email marketing and WhatsApp automation.",
      },
      {
        q: "Do you produce advertising films?",
        a: "Yes. We conceptualise, script, direct and produce TV commercials, digital campaigns, corporate films and promotional videos.",
      },
      {
        q: "Do you provide commercial photography?",
        a: "Yes. We specialise in product, industrial, architectural, hospitality, fashion and corporate photography.",
      },
      {
        q: "Which industries do you serve?",
        a: "We work with educational institutions, healthcare, hospitality, manufacturing, retail, jewellery, real estate, startups, NGOs and corporate organisations.",
      },
      {
        q: "Do you work with startups?",
        a: "Yes. We help startups build their brand from the ground up, including naming, logo design, identity, website and marketing strategy.",
      },
      {
        q: "Can you manage our complete marketing?",
        a: "Yes. LeverageAds functions as an extended branding and marketing partner, managing strategy, creative, digital marketing and business growth initiatives.",
      },
      {
        q: "Do you provide corporate training?",
        a: "Yes. We conduct training programmes on branding, leadership, communication, customer service, emotional intelligence, sales and business excellence.",
      },
      {
        q: "Why choose LeverageAds?",
        a: "Because branding is more than design. With 26 years of experience, LeverageAds combines creativity, strategy, technology and business consulting to deliver measurable growth — not just attractive visuals.",
      },
    ],
    relatedSlugs: ["ad-films-photography", "creative-design", "digital-marketing"],
    ctaLabel: "Discuss Your Campaign",
    images: [
      { src: "/portfolio/jewellery/01.webp", alt: "Sovereign jewellery festive campaign", width: 827, height: 871 },
      { src: "/portfolio/jewellery/04.webp", alt: "Challani Jewellery Mart \"RARE!\" pearl bangles campaign", width: 1168, height: 1036 },
    ],
    heroGrid: [
      {
        src: "/services/creative-advertising/portfolio/chola-health-insurance-campaign.webp",
        alt: "Chola MS Health Insurance \"Sell Health and Save Wealth\" print campaign creative",
        badgeLabel: "Print & Outdoor",
        badgeIcon: "media",
      },
      {
        src: "/services/creative-advertising/portfolio/premier-voltage-stabilizer-campaign.webp",
        alt: "Premier Voltage Stabilizer product advertising campaign creative",
        badgeLabel: "500+ · Creatives Delivered",
        badgeVariant: "dark",
      },
      {
        src: "/services/creative-advertising/portfolio/kaiyaan-led-lighting-campaign.webp",
        alt: "Kaiyaan LED Lighting \"See The Light\" advertising campaign creative",
        badgeLabel: "Campaign Concepts",
        badgeIcon: "creative",
      },
      {
        src: "/services/creative-advertising/portfolio/pest-control-tpcs-campaign.webp",
        alt: "TPCS leather-cost control exhibition campaign creative",
        badgeLabel: "Exhibition & Event",
        badgeIcon: "package",
      },
    ],
  },
  {
    slug: "digital-marketing",
    navLabel: "Digital Marketing",
    h1: "Digital Marketing Services in Chennai",
    metaTitle: "Digital Marketing Agency in Chennai | SEO, Google Ads, Meta Ads & Social Media | LeverageAds",
    metaDescription:
      "LeverageAds provides digital marketing services in Chennai — SEO, Google Ads, Meta Ads, performance marketing, social media marketing and management, content marketing and WhatsApp marketing.",
    heroSubcopy: "Grow Your Business. Reach the Right Audience. Generate More Leads.",
    intro: [
      "Digital marketing is more than posting on social media or running ads. It's about attracting the right customers, building trust and converting interest into enquiries and sales.",
      "At Leverage Digital, we create data-driven marketing strategies that combine SEO, Google Ads, Meta Ads, Performance Marketing, Social Media, Content Marketing, Email Marketing and WhatsApp Marketing to deliver measurable business growth. Every campaign is continuously monitored, optimised and refined to maximise ROI and generate quality leads—not just clicks.",
    ],
    whyItMatters:
      "Whether you're launching a new business or scaling an established brand, we help you build a strong digital presence that delivers lasting results.",
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
    faqs: [
      {
        q: "What digital marketing services do you offer?",
        a: "We provide SEO, Google Ads, Meta Ads, Performance Marketing, Social Media Marketing & Management, Content Marketing, Email Marketing and WhatsApp Marketing.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term strategy. Most businesses begin seeing measurable improvements within 3–6 months, depending on competition and website health.",
      },
      {
        q: "Is Google Ads better than SEO?",
        a: "Both serve different purposes. Google Ads generates immediate visibility, while SEO builds long-term organic traffic. The best results often come from using both together.",
      },
      {
        q: "How do you measure campaign success?",
        a: "We track key metrics such as website traffic, lead generation, conversions, cost per lead (CPL), return on ad spend (ROAS) and overall business growth.",
      },
      {
        q: "Can you manage our social media accounts?",
        a: "Yes. We create content, design creatives, manage posting schedules, run advertising campaigns and engage with your audience across major social media platforms.",
      },
      {
        q: "Do you provide monthly reports?",
        a: "Yes. Every client receives detailed performance reports with campaign insights, recommendations and future action plans.",
      },
      {
        q: "Why choose Leverage Digital?",
        a: "With 26 years of branding and marketing experience, we combine creative thinking, strategic planning and performance-driven digital marketing to generate real business results—not vanity metrics.",
      },
    ],
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
    heroSubcopy: "Premium Visual Storytelling That Builds Brands",
    intro: [
      "A great advertisement does more than look beautiful—it builds trust, creates desire and moves people to act.",
      "For over 26 years, Leverage Advertising has partnered with leading brands across industries to create high-impact advertising films and commercial photography that elevate brand perception and drive business results.",
      "Led by Suresh Ramakrishnan, who has personally directed 40+ commercial-quality advertising films and worked alongside some of India's leading production houses, cinematographers, technicians and film personalities, every project is executed with a clear business objective—not just creative excellence.",
      "Every production demands a different creative vision. That's why we handpick directors, cinematographers, art directors, editors, stylists and technicians from the industry's finest talent pool—bringing together the right expertise for every project while following world-class production practices.",
      "Rather than maintaining a fixed production crew, we assemble the best creative and technical talent for every assignment. Depending on the project's scale, we carefully select directors of photography, art directors, stylists, editors, music composers, voice artists and production specialists from the industry to deliver the highest quality.",
      "We believe exceptional films are created in pre-production. Every project begins with strategic planning, concept development, scripting, storyboarding, budgeting and production scheduling. Timelines, deliverables and expected outcomes are documented and discussed with the client well before the shoot begins, ensuring transparency and predictable execution.",
      "Whether it's a television commercial, digital campaign, corporate film, brand story, product launch, hospitality film, educational institution campaign or commercial photography, we create visuals that communicate with clarity, professionalism and purpose.",
    ],
    whyItMatters:
      "Our goal isn't simply to produce beautiful images or cinematic videos. Our goal is to create visual communication that helps businesses build stronger brands and sell more effectively.",
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
    faqs: [
      {
        q: "Do you produce TV commercials and digital ad films?",
        a: "Yes. We produce TV commercials, digital advertisements, corporate films, brand films, product videos, testimonial videos and social media campaigns.",
      },
      {
        q: "Does Leverage have its own production team?",
        a: "Leverage manages projects through its own production division while collaborating with experienced directors of photography, cinematographers, editors, art directors and technicians selected specifically for each project.",
      },
      {
        q: "Who directs the projects?",
        a: "Most projects are creatively led by Suresh Ramakrishnan, who has directed 40+ advertising films and has extensive experience working with leading production companies and cinema professionals.",
      },
      {
        q: "Which industries do you work with?",
        a: "We serve jewellery, hospitality, education, healthcare, manufacturing, retail, real estate, FMCG, lifestyle brands, institutions and corporate organisations.",
      },
      {
        q: "Do you provide commercial photography?",
        a: "Yes. We offer product photography, catalogue photography, food photography, fashion, industrial, architectural, hospitality, corporate and drone photography.",
      },
      {
        q: "How do you ensure quality?",
        a: "Every project follows a structured process—creative briefing, concept approval, script, storyboard, production planning, shoot execution and post-production—with every stage documented and approved by the client.",
      },
      {
        q: "Can you work with celebrities or professional models?",
        a: "Yes. Based on the campaign requirements, we can coordinate professional models, voice artists, presenters and industry professionals.",
      },
      {
        q: "How long does an ad film take?",
        a: "The timeline depends on the complexity of the project. We prioritise planning and quality over rushed execution, ensuring every production meets the agreed creative and business objectives.",
      },
      {
        q: "Why choose Leverage?",
        a: "Because we combine 26 years of branding expertise with professional filmmaking. We don't create videos merely to impress—we create visual assets that strengthen your brand, communicate your message and contribute to business growth.",
      },
    ],
    relatedSlugs: ["creative-advertising", "creative-design"],
    ctaLabel: "Discuss Your Shoot",
    images: [
      { src: "/portfolio/photography/08.webp", alt: "Lakshmi Jewellery campaign model photography", width: 1456, height: 1322 },
      { src: "/portfolio/jewellery/07.webp", alt: "PGP gemstone jewellery macro product photography", width: 591, height: 591 },
    ],
    heroGrid: [
      {
        src: "/services/ad-films-photography/hero/hero-jewellery-shoot.webp",
        alt: "Suresh Ramakrishnan directing a jewellery brand ad film with a celebrity model on set",
        badgeLabel: "40+ · Ad Films Directed",
        badgeVariant: "dark",
      },
      {
        src: "/services/ad-films-photography/hero/hero-product-photography.webp",
        alt: "Commercial jewellery product photography setup with studio softbox lighting",
        badgeLabel: "Commercial Photography",
        badgeIcon: "studio",
      },
      {
        src: "/services/ad-films-photography/hero/hero-cinematographer.webp",
        alt: "Cinematographer operating an ARRI cinema camera on an ad film set",
        badgeLabel: "Ad Film Production",
        badgeIcon: "media",
      },
      {
        src: "/services/ad-films-photography/hero/hero-director-briefing.webp",
        alt: "Director briefing a celebrity model on script during a commercial shoot",
        badgeLabel: "Creative Direction",
        badgeIcon: "creative",
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
      "Precision printing, premium finishing and professional results — a great design deserves an equally great print.",
    intro: [
      "At LeverageAds, we don't just design—we ensure that every printed piece reflects the quality, consistency and professionalism your brand deserves. With over 26 years of experience, we provide complete offset and digital printing solutions under one roof, managing every stage from pre-press to final finishing and delivery.",
      "Whether you require 10 copies or 10,000, we recommend the most suitable printing process based on quantity, budget and application.",
      "Digital printing has transformed modern print production. Today, businesses no longer need to print in large volumes to achieve professional quality. Whether it's 10 brochures, 25 catalogues, a few copies of a souvenir, annual report or company profile, digital printing delivers exceptional quality with quick turnaround and cost efficiency.",
      "For larger quantities, offset printing continues to be the preferred choice, offering outstanding colour consistency, superior finish and economical production at scale.",
      "From a simple business card to premium coffee table books, corporate brochures, catalogues, packaging, calendars, annual reports and marketing collaterals, every project is monitored to ensure colour accuracy, material quality and flawless finishing.",
    ],
    whyItMatters:
      "Our promise is simple — every printed piece should look as impressive in your customer's hands as it did on your designer's screen.",
    included: [
      {
        title: "Production Process",
        items: [
          "CTP (Computer-to-Plate) Pre-Press",
          "Offset Printing",
          "Digital Printing",
          "Large Format Printing",
          "Colour Proofing & Quality Control",
          "Lamination (Gloss, Matte & Velvet)",
          "UV & Spot UV Coating",
          "Foil Stamping",
          "Embossing & Debossing",
          "Die Cutting & Die Punching",
          "Creasing & Folding",
          "Perfect Binding",
          "Centre Pinning (Saddle Stitch)",
          "Spiral & Wiro Binding",
          "Foam / Hard Case Binding",
          "Pasting & Mounting",
          "Packaging & Dispatch",
        ],
      },
      {
        title: "Corporate Printing",
        items: [
          "Business Cards",
          "Letterheads",
          "Envelopes",
          "Presentation Folders",
          "Corporate Stationery",
          "Company Profiles",
          "Annual Reports",
          "CSR Reports",
          "Newsletters",
          "Employee Handbooks",
          "Training Manuals",
          "Notebooks",
          "Diaries",
          "Desk Pads",
        ],
      },
      {
        title: "Marketing Collaterals",
        items: [
          "Brochures",
          "Product Catalogues",
          "Product Leaflets",
          "Flyers",
          "Pamphlets",
          "Posters",
          "Booklets",
          "Price Lists",
          "Sales Kits",
          "Product Inserts",
          "Door Hangers",
          "Tent Cards",
          "Rack Cards",
          "Table Talkers",
        ],
      },
      {
        title: "Publishing",
        items: [
          "Books",
          "Coffee Table Books",
          "Souvenirs",
          "Magazines",
          "Journals",
          "School Magazines",
          "Year Books",
          "Prospectus",
          "Workbooks",
          "Study Materials",
        ],
      },
      {
        title: "Calendar Printing",
        items: [
          "Wall Calendars",
          "Desk Calendars",
          "Tent Calendars",
          "Premium Executive Calendars",
          "Custom Calendars",
          "Photo Calendars",
          "Corporate Gift Calendars",
        ],
      },
      {
        title: "Packaging Printing",
        items: [
          "Mono Cartons",
          "Folding Cartons",
          "Rigid Boxes",
          "Luxury Gift Boxes",
          "Jewellery Boxes",
          "Saree Boxes",
          "Shirt Boxes",
          "Garment Boxes",
          "Sweet Boxes",
          "Dry Fruit Boxes",
          "Cosmetic Boxes",
          "Perfume Boxes",
          "Pharmaceutical Boxes",
          "FMCG Packaging",
          "Food Packaging",
          "Tea Boxes",
          "Spice Boxes",
          "Mobile Accessory Boxes",
          "Electronics Packaging",
          "Corrugated Printed Boxes",
          "Product Sleeves",
        ],
      },
      {
        title: "Retail & Branding",
        items: [
          "Paper Bags",
          "Luxury Carry Bags",
          "Shopping Bags",
          "Hang Tags",
          "Swing Tags",
          "Garment Tags",
          "Product Tags",
          "Barcode Labels",
          "Product Labels",
          "Bottle Labels",
          "Sticker Sheets",
          "Price Tags",
        ],
      },
      {
        title: "Hospitality Printing",
        items: [
          "Restaurant Menus",
          "Tent Cards",
          "Table Mats",
          "Room Directories",
          "Key Card Holders",
          "Hotel Stationery",
          "Food Packaging",
        ],
      },
      {
        title: "Education Printing",
        items: [
          "School Diaries",
          "Student Handbooks",
          "Certificates",
          "Mark Sheets",
          "Prospectus",
          "Admission Forms",
          "Question Papers",
          "Answer Booklets",
          "Report Cards",
          "College Magazines",
        ],
      },
      {
        title: "Commercial Printing",
        items: [
          "Invoice Books",
          "Bill Books",
          "Cash Memo Books",
          "Receipt Books",
          "Delivery Challans",
          "Purchase Order Books",
          "NCR Books",
          "Log Books",
          "Registers",
          "Forms",
        ],
      },
      {
        title: "Promotional Printing",
        items: [
          "Greeting Cards",
          "Invitations",
          "Gift Vouchers",
          "Gift Cards",
          "Bookmarks",
          "Certificates",
          "Event Passes",
          "Coupons",
          "Loyalty Cards",
        ],
      },
      {
        title: "Large Format Printing",
        items: [
          "Flex Banners",
          "Vinyl Printing",
          "One-way Vision",
          "Roll-up Standees",
          "Backdrops",
          "Sunboard Printing",
          "Foam Board Printing",
          "Canvas Prints",
          "Wall Graphics",
          "Window Graphics",
          "Retail Signage",
          "Exhibition Panels",
        ],
      },
      {
        title: "Additional & Specialty Printing",
        items: [
          "Corporate Gift Boxes",
          "Festive Gift Boxes",
          "Wedding Invitation Boxes",
          "Wedding Cards",
          "Luxury Invitation Printing",
          "Premium Presentation Boxes",
          "Sample Kits",
          "Swatch Books",
          "Fabric Sample Books",
          "Jewellery Catalogues",
          "Saree Catalogues",
          "Textile Look Books",
          "Boutique Packaging",
          "Tissue Paper Printing",
          "Ribbon Branding",
          "Belly Bands & Wraps",
          "Sleeve Packaging",
          "Premium Gift Wrapping",
          "QR Code Printing",
          "Security Printing",
          "Variable Data Printing",
          "Numbering & Barcode Printing",
          "Scratch Cards",
          "Membership Cards",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between offset and digital printing?",
        a: "The biggest difference is quantity. Digital printing is ideal for low-volume jobs with faster turnaround, while offset printing becomes more economical and efficient for larger quantities with consistent colour reproduction.",
      },
      {
        q: "Can you print small quantities?",
        a: "Yes. Thanks to modern digital printing technology, we can produce as few as 10 copies of brochures, magazines, catalogues, company profiles, books or souvenirs without compromising on quality.",
      },
      {
        q: "Which printing method should I choose?",
        a: "We recommend the most suitable process after evaluating your quantity, budget, delivery schedule and quality expectations.",
      },
      {
        q: "Do you only print designs created by LeverageAds?",
        a: "No. We can print artwork supplied by clients or agencies. If required, our design team can also review and optimise print files before production.",
      },
      {
        q: "What finishing options do you provide?",
        a: "We offer lamination, UV coating, Spot UV, foil stamping, embossing, debossing, die cutting, die punching, perfect binding, centre pinning, spiral binding, hard case binding, mounting and packaging.",
      },
      {
        q: "Do you provide colour proofs before printing?",
        a: "Yes. For critical projects, we provide print proofs or colour samples to ensure the final output matches expectations before production begins.",
      },
      {
        q: "Can you manage the entire printing process?",
        a: "Absolutely. From artwork verification and CTP processing to printing, finishing, quality inspection, packing and delivery, we manage the complete production workflow.",
      },
      {
        q: "How do you ensure print quality?",
        a: "Every project undergoes multiple quality checks for colour accuracy, registration, paper selection, finishing and binding to ensure a premium final product.",
      },
      {
        q: "Can you handle urgent print requirements?",
        a: "Yes. Digital printing allows us to produce many jobs within short timelines. For offset projects, we plan production schedules to meet committed delivery dates without compromising quality.",
      },
      {
        q: "Why choose LeverageAds for print production?",
        a: "Because we combine creative expertise with production knowledge. We understand design, printing technology, materials and finishing — allowing us to deliver print products that not only look exceptional but also strengthen your brand image.",
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
    heroSubcopy: "The Right Message. The Right Audience. The Right Media.",
    intro: [
      "Even the best advertisement fails if it reaches the wrong audience.",
      "At LeverageAds, we help businesses maximise their advertising investment through strategic Media Planning & Media Buying across traditional and digital platforms. With over 26 years of industry experience, we identify the most effective media channels, negotiate competitive rates and ensure your campaigns deliver maximum reach and return on investment.",
      "Whether you're launching a new product, promoting admissions, announcing an event or building long-term brand awareness, we develop media strategies based on your business goals, target audience, geography, budget and campaign objectives—not just media availability.",
      "Our strong relationships with leading media houses, publishers, broadcasters and outdoor media owners enable us to secure better placements and value for our clients.",
    ],
    whyItMatters:
      "From planning to execution, every campaign is carefully monitored to ensure your advertising budget works harder and delivers measurable results.",
    included: [
      {
        title: "Print Media",
        items: [
          "Newspaper Advertising",
          "Magazine Advertising",
          "Classified Advertising",
          "Jacket Advertisements",
          "Advertorials",
        ],
      },
      {
        title: "Television",
        items: [
          "Regional TV Advertising",
          "National TV Advertising",
          "Satellite Channel Advertising",
          "Cable TV Advertising",
          "Program Sponsorships",
        ],
      },
      {
        title: "Radio",
        items: ["FM Radio Advertising", "Community Radio", "Radio Sponsorships", "RJ Mentions"],
      },
      {
        title: "Outdoor Advertising (OOH)",
        items: [
          "Hoardings",
          "Billboards",
          "Unipoles",
          "Bus Shelters",
          "Pole Kiosks",
          "Gantries",
          "Digital LED Screens",
          "Airport Advertising",
          "Railway Station Advertising",
          "Metro Rail Branding",
        ],
      },
      {
        title: "Transit Media",
        items: [
          "Bus Branding",
          "Auto Rickshaw Branding",
          "Cab Branding",
          "Metro Train Branding",
          "Train Wraps",
          "Airport Shuttle Branding",
          "Fleet Branding",
        ],
      },
      {
        title: "Cinema Advertising",
        items: [
          "Theatre Screen Advertising",
          "Multiplex Advertising",
          "In-Film Advertising Opportunities",
          "Cinema Lobby Branding",
          "Standees & Activation",
          "Seat Branding",
          "Food Court Branding",
        ],
      },
      {
        title: "Digital Media Buying",
        items: [
          "Google Ads",
          "YouTube Advertising",
          "Meta Ads",
          "OTT Advertising",
          "Display Advertising",
          "Programmatic Advertising",
        ],
      },
      {
        title: "Media Strategy",
        items: [
          "Media Planning",
          "Media Buying",
          "Budget Planning",
          "Market Analysis",
          "Audience Targeting",
          "Campaign Scheduling",
          "Rate Negotiation",
          "Media Monitoring",
          "Campaign Evaluation",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Media Planning?",
        a: "Media planning is the process of selecting the most effective media channels to reach your target audience while achieving maximum return on your advertising investment.",
      },
      {
        q: "What is Media Buying?",
        a: "Media buying involves negotiating advertising rates, booking media space or airtime, coordinating releases and ensuring campaigns are executed as planned.",
      },
      {
        q: "Do you only buy media or also create advertisements?",
        a: "We provide complete advertising solutions—from strategy, creative design and ad films to media planning, buying and campaign management.",
      },
      {
        q: "Which media platforms do you handle?",
        a: "We work across newspapers, television, magazines, radio, cinema, outdoor media, transit advertising, digital platforms and OTT channels.",
      },
      {
        q: "Can you negotiate better advertising rates?",
        a: "Yes. Our long-standing relationships with leading media houses and publishers help us secure competitive pricing and better value for our clients.",
      },
      {
        q: "Which media is best for my business?",
        a: "It depends on your target audience, budget, location and campaign objectives. We recommend the right media mix based on strategy—not assumptions.",
      },
      {
        q: "Can you manage multi-city campaigns?",
        a: "Yes. We plan and execute regional, state-wide and national advertising campaigns across multiple media platforms.",
      },
      {
        q: "Do you provide campaign reports?",
        a: "Yes. We monitor campaign execution and provide performance reports, release confirmations and recommendations for future campaigns.",
      },
      {
        q: "Why choose LeverageAds?",
        a: "Because media buying is not about purchasing space—it's about making every advertising rupee work harder. With 26 years of experience, we combine strategic planning, creative expertise and strong media relationships to deliver campaigns that maximise visibility, reach and business results.",
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
      "A business grows only as fast as its people and systems. At LeverageAds, our Organisational Development Consulting helps businesses build scalable organisations by aligning leadership, employee behaviour, business processes and brand culture. We work closely with business owners to improve productivity, accountability, customer experience and profitability through behavioural transformation, leadership mentoring, Standard Operating Procedures (SOPs) and Total Quality Management (TQM). The result is a business that runs on systems—not individuals.",
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
        title: "Organisational Development Services Include",
        items: [
          "Business Transformation Consulting — End-to-end organisational development for sustainable business growth.",
          "One-to-One Business Owner Mentoring — Personal mentoring to strengthen leadership, strategic thinking and decision-making.",
          "Leadership Development — Build high-performing leaders who inspire, motivate and manage teams effectively.",
          "Employee Behavioural Transformation — Improve workplace attitude, ownership, communication, discipline and accountability.",
          "Organisational Culture Development — Create a positive, performance-driven culture aligned with your business vision.",
          "Standard Operating Procedure (SOP) Development — Design comprehensive SOPs for every department to ensure consistency and efficiency.",
          "SOP Orientation & Implementation — Train teams to understand, adopt and consistently follow standard processes.",
          "Departmental Training Programmes — Functional training tailored for Sales, Marketing, HR, Finance, Operations, Customer Service and Administration.",
          "Total Quality Management (TQM) Implementation — Introduce continuous improvement practices to enhance quality, efficiency and customer satisfaction.",
          "Performance Management Systems — Define KPIs, KRAs and performance measurement frameworks.",
          "Team Building & Employee Engagement — Strengthen collaboration, trust and workplace relationships.",
          "Communication & Soft Skills Training — Enhance interpersonal skills, customer handling and professional communication.",
          "Customer Experience (CX) Improvement — Build service excellence through employee training and process optimisation.",
          "Business Process Optimisation — Identify inefficiencies and streamline workflows for better productivity.",
          "Change Management Consulting — Help organisations successfully adapt to growth, restructuring and digital transformation.",
          "HR Process Development — Recruitment, onboarding, induction, appraisal systems and employee development frameworks.",
          "Sales & Service Excellence Training — Improve sales performance and customer satisfaction through structured learning.",
          "Continuous Improvement & Business Coaching — Ongoing reviews, mentoring and implementation support for sustained organisational excellence.",
        ],
      },
    ],
    whyChoose: [
      "26+ years of business consulting and brand transformation experience",
      "Integrated approach covering People, Process, Performance and Brand",
      "Practical implementation—not just consultation",
      "Industry-specific training programmes",
      "Behavioural transformation backed by measurable business outcomes",
      "Long-term mentoring for business owners and leadership teams",
      "Proven TQM-based methodology to build process-driven organisations",
    ],
    faqs: [
      {
        q: "What is Organisational Development Consulting?",
        a: "Organisational Development (OD) Consulting is a structured approach to improving an organisation's people, processes, leadership and culture to achieve higher productivity, better employee engagement and sustainable business growth.",
      },
      {
        q: "How does behavioural transformation improve business performance?",
        a: "Employees with the right attitude, communication skills and accountability deliver better customer experiences, collaborate effectively and contribute to higher organisational productivity.",
      },
      {
        q: "What is an SOP and why is it important?",
        a: "A Standard Operating Procedure (SOP) is a documented process that explains how work should be performed. SOPs ensure consistency, reduce errors, improve training and make businesses less dependent on individuals.",
      },
      {
        q: "Do you create SOPs for every department?",
        a: "Yes. We develop customised SOPs for Sales, Marketing, HR, Finance, Administration, Operations, Customer Service, Production and other departments based on your business requirements.",
      },
      {
        q: "Do you train employees after creating SOPs?",
        a: "Absolutely. We don't just create documentation—we conduct orientation sessions, department-wise training and implementation workshops to ensure every employee understands and follows the SOPs.",
      },
      {
        q: "What is Total Quality Management (TQM)?",
        a: "Total Quality Management (TQM) is a continuous improvement methodology that focuses on quality, process efficiency, customer satisfaction and employee involvement to achieve long-term business excellence.",
      },
      {
        q: "Do you provide mentoring for business owners?",
        a: "Yes. We offer one-to-one mentoring for entrepreneurs and business owners, helping them improve leadership, decision-making, strategic planning, business systems and organisational growth.",
      },
      {
        q: "Which industries do you work with?",
        a: "We work with schools, colleges, hospitals, hotels, jewellery businesses, retail, manufacturing, service organisations, startups, SMEs and family-owned businesses.",
      },
      {
        q: "Can organisational development help a growing business?",
        a: "Yes. As businesses grow, informal processes often become bottlenecks. Organisational development introduces systems, leadership practices and structured workflows that support sustainable scaling.",
      },
      {
        q: "How long does an organisational development project take?",
        a: "The duration depends on the size and complexity of the organisation. Projects can range from a few weeks for specific interventions to several months for complete business transformation, with ongoing mentoring available for continuous improvement.",
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

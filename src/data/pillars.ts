import type { FAQ, ServiceImage } from "@/data/services";
import type { ServiceHeroGridCell } from "@/components/ui/ServiceHeroGrid";

export type Pillar = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubcopy: string;
  intro: string[];
  whyItMatters?: string;
  serviceList: string[];
  serviceGroups?: { title: string; items: string[] }[];
  whyChoose?: string[];
  framework?: { title: string; steps: { title: string; body: string }[] };
  faqs?: FAQ[];
  relatedSlugs: string[];
  ctaLabel: string;
  images?: ServiceImage[];
  heroGrid?: [ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell];
};

export const pillars: Pillar[] = [
  {
    slug: "branding",
    navLabel: "Branding",
    h1: "Build a Brand People Remember",
    metaTitle: "Branding Agency in Chennai | Brand Strategy, Identity & Creative | LeverageAds",
    metaDescription:
      "LeverageAds helps businesses build brands people remember — brand strategy, identity, logo design, packaging, advertising campaigns, ad films and commercial photography, all in Chennai.",
    heroSubcopy:
      "Your brand is more than a logo — it's the perception customers carry every time they interact with your business.",
    intro: [],
    whyItMatters:
      "Your brand is more than a logo—it's the perception customers carry every time they interact with your business. We create brands that communicate clearly, differentiate powerfully and build long-term trust.",
    serviceList: [
      "Brand Strategy",
      "Brand Identity",
      "Logo Design",
      "Corporate Identity",
      "Packaging Design",
      "Marketing Collateral",
      "Advertising Campaigns",
      "Creative Design",
      "Ad Film Production",
      "Corporate Films",
      "Product Photography",
      "Commercial Photography",
      "Copywriting",
      "Campaign Planning",
    ],
    relatedSlugs: ["creative-advertising", "ad-films-photography", "print-production"],
    ctaLabel: "Talk to a Branding Expert",
    images: [
      { src: "/portfolio/jewellery/01.webp", alt: "Sovereign jewellery festive campaign photography", width: 827, height: 871 },
    ],
  },
  {
    slug: "digital",
    navLabel: "Digital",
    h1: "Build a Business That Works Smarter, Faster and Better.",
    metaTitle: "Digital Agency in Chennai | Websites, CRM, ERP & Digital Marketing | LeverageAds",
    metaDescription:
      "LeverageAds builds digital ecosystems that connect marketing, sales and operations — websites, e-commerce, mobile apps, custom CRM & ERP software, WhatsApp Business API automation and digital marketing in Chennai.",
    heroSubcopy: "Technology should simplify your business—not complicate it.",
    intro: [
      "At Leverage Digital, we build intelligent digital ecosystems that connect your website, marketing, sales and operations into one seamless workflow. Whether you're a startup, SME or established enterprise, our solutions are designed to improve productivity, enhance customer experience and accelerate business growth.",
      "Our experienced technical team brings together expertise in website development, CRM, ERP, mobile applications, AI automation, WhatsApp Business API, SEO and performance marketing. More importantly, we don't disappear after deployment. Timely support, regular feedback, continuous follow-ups and long-term relationships are the foundation of our service.",
      "Unlike off-the-shelf software that forces businesses to adapt to predefined workflows, our CRM and ERP solutions are tailor-made around your business processes. You pay only for the features you need—not for unnecessary modules—making your investment more economical today while saving significant costs on upgrades, licensing and customisation in the future.",
      "Whether you're looking to generate more enquiries, automate repetitive tasks, improve customer service or manage your business more efficiently, Leverage Digital provides scalable solutions that grow with your business.",
    ],
    whyItMatters: "Technology should simplify your business—not complicate it.",
    serviceList: [
      "Corporate Website Development",
      "Business Website Design",
      "Responsive Website Design",
      "Landing Page Development",
      "Website Redesign",
      "Website Maintenance",
      "Website Hosting & Security",
      "Website Speed Optimisation",
      "E-commerce Website Development",
      "Online Store Setup",
      "Payment Gateway Integration",
      "Inventory Management",
      "Multi-Vendor Marketplace",
      "Product Catalogue Management",
      "Android App Development",
      "iOS App Development",
      "Hybrid Mobile Apps",
      "Customer Apps",
      "Employee Apps",
      "Custom CRM Development",
      "Custom ERP Solutions",
      "WhatsApp Business API",
      "AI Business Automation",
      "Lead Management",
      "Sales Automation",
      "Workflow Automation",
      "HR Management",
      "Billing & Invoicing",
      "Attendance Management",
      "Search Engine Optimisation (SEO)",
      "Google Ads",
      "Meta Ads",
      "Performance Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Local SEO",
      "YouTube SEO",
      "Conversion Rate Optimisation",
    ],
    serviceGroups: [
      {
        title: "Website Solutions",
        items: [
          "Corporate Website Development",
          "Business Website Design",
          "Responsive Website Design",
          "Landing Page Development",
          "Website Redesign",
          "Website Maintenance",
          "Website Hosting & Security",
          "Website Speed Optimisation",
        ],
      },
      {
        title: "E-Commerce",
        items: [
          "E-commerce Website Development",
          "Online Store Setup",
          "Payment Gateway Integration",
          "Inventory Management",
          "Multi-Vendor Marketplace",
          "Product Catalogue Management",
        ],
      },
      {
        title: "Mobile Applications",
        items: [
          "Android App Development",
          "iOS App Development",
          "Hybrid Mobile Apps",
          "Customer Apps",
          "Employee Apps",
        ],
      },
      {
        title: "Business Automation",
        items: [
          "Custom CRM Development",
          "Custom ERP Solutions",
          "WhatsApp Business API",
          "AI Business Automation",
          "Lead Management",
          "Sales Automation",
          "Workflow Automation",
          "HR Management",
          "Inventory Management",
          "Billing & Invoicing",
          "Attendance Management",
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          "Search Engine Optimisation (SEO)",
          "Google Ads",
          "Meta Ads",
          "Performance Marketing",
          "Social Media Marketing",
          "Content Marketing",
          "Email Marketing",
          "Local SEO",
          "YouTube SEO",
          "Conversion Rate Optimisation",
        ],
      },
    ],
    whyChoose: [
      "Tailor-made CRM & ERP Solutions",
      "Business-first Technology Approach",
      "Experienced Technical Team",
      "Dedicated Feedback & Follow-up Support",
      "Future-ready Scalable Solutions",
      "Affordable Long-term Ownership Cost",
      "One Partner for Design, Marketing & Technology",
    ],
    faqs: [
      {
        q: "What makes Leverage Digital different from other software companies?",
        a: "We don't sell generic software. Every solution is designed around your business workflow, making it easier for your team to adopt and more efficient for your operations.",
      },
      {
        q: "Why should I choose a customised CRM instead of ready-made software?",
        a: "Most ready-made CRMs include hundreds of features you may never use, yet you continue paying annual licence fees. Our customised CRM includes only the features your business requires, making it simpler, faster and more cost-effective.",
      },
      {
        q: "Is customised CRM expensive?",
        a: "Not necessarily. While the initial investment may be slightly higher than subscribing to a SaaS platform, a customised CRM often becomes more economical in the long run because there are no recurring per-user licence fees, no unnecessary features, lower training time, better productivity and easier integration with your existing business.",
      },
      {
        q: "Why should I invest in a customised ERP?",
        a: "Every business operates differently. Instead of changing your business to fit the software, we build software that fits your business—reducing manual work, duplication and operational inefficiencies.",
      },
      {
        q: "Can the software grow as my business grows?",
        a: "Yes. Our CRM and ERP solutions are modular and scalable. New departments, users and features can be added whenever your business expands.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Absolutely. Our biggest strength is continuous feedback, follow-ups and ongoing technical support. We believe implementation is only the beginning of a long-term partnership.",
      },
      {
        q: "Do you integrate WhatsApp with CRM?",
        a: "Yes. We integrate WhatsApp Business API with CRM, enabling enquiry management, automated replies, reminders, customer support and marketing campaigns from a single platform.",
      },
      {
        q: "Can you integrate our website with CRM and ERP?",
        a: "Yes. Your website, CRM, ERP, payment gateway, enquiry forms and marketing channels can all work together as one integrated digital ecosystem.",
      },
      {
        q: "Do you only develop websites?",
        a: "No. We provide complete digital transformation services—from website development and mobile apps to CRM, ERP, AI automation, SEO, performance marketing and business consulting.",
      },
      {
        q: "Why choose Leverage Digital?",
        a: "Because we understand business first, technology next. We don't build software for the sake of technology—we build digital systems that improve efficiency, reduce costs, automate processes and help businesses grow.",
      },
    ],
    relatedSlugs: ["websites-technology", "digital-marketing"],
    ctaLabel: "Talk to a Digital Expert",
    images: [
      { src: "/portfolio/website/01.webp", alt: "RT magazine website design", width: 945, height: 1293 },
    ],
  },
  {
    slug: "media",
    navLabel: "Media",
    h1: "Put Your Brand in Front of the Right Audience",
    metaTitle: "Media Planning & Buying Agency in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds helps businesses reach customers through strategic media planning and intelligent media buying across traditional and digital platforms.",
    heroSubcopy:
      "Great brands deserve great visibility across traditional and digital platforms.",
    intro: [],
    whyItMatters:
      "Great brands deserve great visibility. We help businesses reach customers through strategic media planning and intelligent media buying across traditional and digital platforms.",
    serviceList: [
      "Television Advertising",
      "FM Radio Advertising",
      "Newspaper Advertising",
      "Magazine Advertising",
      "Outdoor Advertising",
      "Transit Media",
      "Cinema Advertising",
      "Digital Media Buying",
      "Social Media Campaigns",
      "Influencer Marketing",
      "Media Planning",
      "Media Buying",
      "Campaign Analytics",
    ],
    relatedSlugs: ["media-planning-buying"],
    ctaLabel: "Talk to a Media Planner",
    images: [
      { src: "/portfolio/textile-fashion/09.webp", alt: "Rajendira's Women's Store outdoor hoarding advertising campaign", width: 1000, height: 1000 },
    ],
  },
  {
    slug: "growth-consultancy",
    navLabel: "Growth Consultancy",
    h1: "Build Better Businesses, Not Just Better Brands",
    metaTitle: "Business & Brand Growth Consultancy in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds' growth consultancy services help organisations improve performance, customer experience and operational excellence — brand strategy, business process and leadership consulting.",
    heroSubcopy:
      "Helping Organisations Grow Through Strategy, Branding, People, Processes & Performance",
    intro: [
      "A successful business is built on much more than an attractive logo or effective advertising. Sustainable growth comes from having a clear vision, a well-defined strategy, efficient business systems, capable leadership, emotionally intelligent employees and a brand that consistently delivers value to its customers. When these elements work together, organisations become more profitable, resilient and respected in the marketplace.",
      "At Leverage Branding & Consultancy, we help organisations build stronger businesses—not just stronger brands. Our business consulting services combine strategic thinking with practical implementation to improve business performance, customer experience, operational efficiency and organisational culture. We partner with business owners and leadership teams to identify challenges, uncover opportunities and develop practical solutions that create measurable and sustainable growth.",
      "Led by Suresh Ramakrishnan (SRK), with nearly three decades of experience in branding, advertising, marketing and organisational development, our consulting is built on real-world business experience rather than theoretical models. We approach every assignment with an ownership mindset, working alongside our clients as strategic partners committed to long-term success.",
      "Our expertise covers Business Strategy, Brand Strategy, Marketing Strategy, Organisational Development, Emotional Intelligence, Leadership Development, Total Quality Management (TQM), Customer Experience, Sales Strategy, Standard Operating Procedures (SOPs), Process Improvement, Business Communication and Performance Enhancement. Every recommendation is customised to your organisation's goals, industry and stage of growth.",
      "We believe that every organisation has two equally important dimensions—the Outer Core and the Inner Core. The Outer Core includes branding, marketing, sales, customer experience and market positioning. The Inner Core consists of leadership, people, organisational culture, business processes, systems and operational excellence. Long-term success is achieved only when both are developed together.",
      "Whether you are a startup, a growing SME, a family-owned business, an educational institution, a healthcare organisation, a manufacturing company or a hospitality brand, we help you create clarity, strengthen execution and build an organisation that is prepared for the future.",
    ],
    whyItMatters: "Our mission is simple: Build Better Businesses, Not Just Better Brands.",
    framework: {
      title: "Our Business Growth Framework",
      steps: [
        {
          title: "Strategic Clarity",
          body: "Define your vision, business direction, competitive advantage and growth roadmap.",
        },
        {
          title: "Brand & Market Positioning",
          body: "Build a memorable brand with clear messaging, differentiation and customer trust.",
        },
        {
          title: "People & Leadership",
          body: "Develop emotionally intelligent leaders and empowered employees who become true brand ambassadors.",
        },
        {
          title: "Process & Operational Excellence",
          body: "Strengthen business systems through SOPs, TQM, process improvement and cross-functional collaboration.",
        },
        {
          title: "Performance & Sustainable Growth",
          body: "Align strategy, people, branding and execution to improve customer satisfaction, profitability and long-term business success.",
        },
      ],
    },
    faqs: [
      {
        q: "What is Business Growth Consulting?",
        a: "Business Growth Consulting helps organisations improve strategy, branding, leadership, operational efficiency, customer experience and overall business performance to achieve sustainable growth.",
      },
      {
        q: "How is Leverage Branding & Consultancy different from other consultants?",
        a: "We provide a 360-degree consulting approach that integrates Brand Strategy, Business Strategy, Marketing, Organisational Development, Emotional Intelligence, TQM and Process Improvement. Rather than solving isolated problems, we focus on strengthening the entire business ecosystem.",
      },
      {
        q: "What types of organisations do you work with?",
        a: "We work with startups, SMEs, family businesses, educational institutions, healthcare providers, retail brands, hospitality companies, manufacturing organisations and service businesses seeking structured growth.",
      },
      {
        q: "What do you mean by the Inner Core and Outer Core of a business?",
        a: "The Outer Core includes branding, marketing, customer experience and market positioning. The Inner Core focuses on leadership, employees, organisational culture, systems and business processes. Sustainable growth requires both to be aligned.",
      },
      {
        q: "Do you offer customised consulting?",
        a: "Yes. Every consulting engagement begins with understanding your business, challenges and goals. We then develop a tailored roadmap rather than offering generic solutions.",
      },
      {
        q: "Can you help improve organisational culture?",
        a: "Absolutely. Through Organisational Development, Emotional Intelligence, Leadership Development and TQM, we help organisations build collaborative, accountable and customer-focused workplace cultures.",
      },
      {
        q: "Do you also provide marketing and branding strategy?",
        a: "Yes. We help organisations with brand positioning, marketing strategy, communication planning, customer experience, digital marketing direction and advertising strategy to strengthen market presence and business growth.",
      },
      {
        q: "How can Emotional Intelligence benefit an organisation?",
        a: "Emotional Intelligence improves leadership, communication, teamwork, customer relationships, conflict resolution and employee engagement. It creates stronger workplace relationships and enhances organisational performance.",
      },
      {
        q: "Can you help businesses improve operational efficiency?",
        a: "Yes. We review business processes, SOPs, workflow, departmental coordination and quality management practices to improve productivity and operational excellence.",
      },
      {
        q: "Why choose Leverage Branding & Consultancy?",
        a: "With nearly 30 years of practical business experience, Suresh Ramakrishnan (SRK) combines branding expertise, strategic consulting, organisational development and leadership coaching to help businesses achieve measurable, sustainable growth through a holistic and implementation-focused approach.",
      },
    ],
    serviceList: [
      "Business Strategy",
      "Brand Strategy",
      "Marketing Strategy",
      "Media Consultancy",
      "Sales Strategy",
      "Business Process Consulting",
      "Work Process Optimisation",
      "Standard Operating Procedures (SOPs)",
      "Customer Experience Design",
      "Employee Training",
      "Leadership Development",
      "Organisational Development",
      "Performance Improvement",
      "Business Growth Consulting",
    ],
    relatedSlugs: ["brand-strategy-consulting", "corporate-training-consulting"],
    ctaLabel: "Request a Growth Consultation",
    images: [
      { src: "/team/suresh/leadership-01.webp", alt: "Leadership and business growth consulting session", width: 2000, height: 1333 },
    ],
    heroGrid: [
      {
        src: "/insights/growth-leadership-portrait.webp",
        alt: "Suresh Ramakrishnan, business growth and brand consultant",
        badgeLabel: "Founder & Director",
        badgeIcon: "leadership",
      },
      {
        src: "/insights/growth-brand-campaign.webp",
        alt: "JK Fenner brand campaign creative",
        badgeLabel: "Brand Strategy",
        badgeIcon: "strategy",
      },
      {
        src: "/insights/growth-healthcare-brochure.webp",
        alt: "Chola MS healthcare campaign brochure design",
        badgeLabel: "Marketing Collateral",
        badgeIcon: "layers",
      },
      {
        src: "/insights/growth-packaging-design.webp",
        alt: "MPR Maavu idly and dosa batter packaging design",
        badgeLabel: "Packaging Design",
        badgeIcon: "package",
      },
    ],
  },
];

export function getPillarBySlug(slug: string) {
  return pillars.find((p) => p.slug === slug);
}

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
  {
    slug: "flying-rainbow-creative-art-centre",
    client: "Flying Rainbow Creative Art Centre",
    category: "Education Branding & 7+ Year Creative Partnership",
    logo: "/case-studies/logos/flying_rainbow.webp",
    coverImage: "/case-studies/flying-rainbow/01-cover.webp",
    summary:
      "How a seven-year creative partnership helped build one of India's most recognisable online creative art education brands.",
    subtitle: "Building One of India's Most Recognisable Online Creative Art Education Brands",
    intro: [
      "Every great educational brand begins with a vision. It grows through consistent communication.",
      "When Flying Rainbow Creative Art Centre was launched, it had an inspiring vision—to make quality creative art education accessible to learners of all ages through innovative classroom and online programmes.",
      "Like every new institution, it needed more than a good curriculum. It needed a professional identity. It needed consistency. It needed trust.",
      "Since its inception, Leverage Advertising has proudly partnered with Flying Rainbow, helping shape its visual identity and communication strategy. Today, after more than seven years, we continue to support the brand across almost every aspect of its marketing and creative communication.",
    ],
    sections: [
      {
        heading: "About Flying Rainbow",
        paragraphs: [
          "Flying Rainbow Creative Art Centre is a creative learning institution dedicated to nurturing artistic talent through structured art education programmes for children, students, homemakers and working professionals. Along with regular art classes, the institution also offers a Government-Certified One-Year Online Diploma in Fine Arts – Painting, enabling learners across India to pursue quality art education through flexible online learning.",
          "The institution has earned a strong reputation for combining creativity, structured learning and student-centric teaching methodologies, making it a preferred destination for aspiring artists.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "Launching a new educational institution in a competitive market requires more than advertisements.",
          "Parents look for credibility. Students look for inspiration. A creative institution must communicate professionalism while reflecting imagination and artistic excellence.",
          "Every brochure, every certificate, every social media post and every student workbook contributes to that perception.",
          "Our objective was to ensure that every interaction with the brand reflected the same passion for creativity that students experienced in the classroom.",
        ],
      },
      {
        heading: "Our Strategic Approach",
        paragraphs: [
          "Instead of working on isolated creative assignments, we partnered with Flying Rainbow as its long-term creative and branding agency.",
          "Every communication was designed to strengthen one objective: build trust through consistency.",
          "From admission campaigns to student certificates, from social media creatives to educational publications, every visual element was developed to reinforce a distinctive and memorable brand identity.",
        ],
      },
      {
        heading: "Building the Brand Since Day One",
        paragraphs: [
          "For over seven years, Leverage Advertising has provided continuous creative support across multiple areas of communication.",
          "This long-term consistency has helped establish Flying Rainbow as a trusted and recognisable education brand. Our work includes:",
        ],
        list: [
          "Brand communication design",
          "Admission campaign creatives",
          "Social media management and creatives",
          "Event branding materials",
          "Posters, brochures and flyers",
          "Print advertisements",
          "Marketing collateral",
          "Student communication materials",
          "Promotional campaigns",
          "Creative adaptations across digital and print media",
        ],
      },
      {
        heading: "Professional Photography & Promotional Video Production",
        paragraphs: [
          "Education is built on trust. Visual storytelling helps build that trust.",
          "Leverage Advertising planned and executed a professional photography and promotional video shoot that captured the institution's learning environment, faculty interaction, student engagement and creative atmosphere.",
          "These visual assets have been extensively used across the website, brochures, admission campaigns and social media, helping prospective students and parents experience the Flying Rainbow brand before stepping into a classroom—or joining an online session.",
        ],
      },
      {
        heading: "Educational Publishing & Illustration",
        paragraphs: [
          "One of the most unique aspects of our association has been our contribution to Flying Rainbow's educational resources.",
          "Leverage Advertising designed, illustrated and prepared numerous drawing books, activity books and educational publications, creating engaging learning materials for students. These publications have become an integral part of the institution's teaching methodology and brand identity. Our work included:",
        ],
        list: [
          "Illustration concepts",
          "Book layout and design",
          "Educational artwork",
          "Cover design",
          "Print-ready production",
          "Publishing support",
        ],
      },
      {
        heading: "Certificates & Student Communication",
        paragraphs: [
          "Every certificate awarded by an educational institution represents achievement.",
          "We designed a range of professionally branded certificates and student communication materials that reflected the credibility and quality of the Flying Rainbow brand.",
          "From course completion certificates to workshop participation certificates, every design reinforced the institution's professional image.",
        ],
      },
      {
        heading: "A Long-Term Creative Partnership",
        paragraphs: [
          "Over the past seven years, Leverage Advertising has continued to support Flying Rainbow across virtually every aspect of its creative communication.",
          "Our role has evolved beyond that of a design agency. We have become a trusted creative partner, working closely with the management team to ensure that every campaign, publication, social media post and marketing initiative reflects the same commitment to quality and creativity.",
        ],
      },
      {
        heading: "Business Value Delivered",
        paragraphs: ["Our long-term partnership has helped Flying Rainbow:"],
        list: [
          "Build a strong and consistent brand identity.",
          "Establish credibility as a professional art education institution.",
          "Create high-quality marketing communication across print and digital platforms.",
          "Develop engaging educational publications and drawing books.",
          "Strengthen its digital presence through consistent social media branding.",
          "Create professional photography and video assets for long-term marketing.",
          "Support student engagement through thoughtfully designed certificates and educational materials.",
        ],
      },
      {
        heading: "Services Delivered",
        paragraphs: [],
        list: [
          "Brand Creative Support",
          "Admission Campaigns",
          "Social Media Creatives",
          "Educational Publishing",
          "Drawing Book Illustration & Design",
          "Certificate Design",
          "Professional Photography",
          "Promotional Video Production",
          "Brochure & Flyer Design",
          "Print Production",
          "Event Collateral",
          "Marketing Communication",
          "Brand Consulting",
        ],
      },
    ],
    closing: [
      "Some agencies create campaigns. We help build institutions.",
      "Our seven-year association with Flying Rainbow Creative Art Centre reflects our belief that successful brands are not created through one great advertisement, but through years of thoughtful design, consistent communication and a shared commitment to growth.",
      "Most importantly, we have helped transform a promising educational initiative into a trusted creative learning brand with a consistent visual identity.",
      "As Flying Rainbow continues to inspire creativity in thousands of learners, Leverage Advertising remains proud to be the creative force working behind the brand.",
    ],
    gallery: [
      { src: "/case-studies/flying-rainbow/01-cover.webp", alt: "Flying Rainbow creative art class campaign featuring students at work" },
      { src: "/case-studies/flying-rainbow/02-poster-add-colour.webp", alt: "\"Add Colour to Your Child's Life\" creative art course campaign poster" },
      { src: "/case-studies/flying-rainbow/04-vijayadhasami-poster.webp", alt: "Flying Rainbow festive Vijayadashami admissions campaign poster" },
      { src: "/case-studies/flying-rainbow/03-calendar-2025.webp", alt: "Flying Rainbow 2025 desk calendar featuring student artwork" },
      { src: "/case-studies/flying-rainbow/06-online-classes-poster.webp", alt: "Live Online Drawing Classes promotional poster" },
      { src: "/case-studies/flying-rainbow/07-diploma-poster.webp", alt: "Government-certified one-year online Diploma in Fine Arts campaign poster" },
      { src: "/case-studies/flying-rainbow/05-certificate.webp", alt: "Flying Rainbow Indradhanush International Art Exhibition certificate of participation" },
      { src: "/case-studies/flying-rainbow/08-eye-illustration-ad.webp", alt: "\"When a Curious Eye & a Painting Meet\" creative brand campaign illustration" },
      { src: "/case-studies/flying-rainbow/09-crayon-illustration-ad.webp", alt: "\"A Crayon Can Do More Than Conversations\" illustrated brand campaign" },
      { src: "/case-studies/flying-rainbow/10-course-banner.webp", alt: "Flying Rainbow course offerings social media banner" },
    ],
    relatedSlugs: ["creative-design", "ad-films-photography", "print-production"],
  },
  {
    slug: "chola-ms-general-insurance",
    client: "Chola MS General Insurance",
    category: "Corporate BTL Communication & Print Production",
    logo: "/case-studies/logos/chola_ms.webp",
    coverImage: "/case-studies/chola-ms/01-cover.webp",
    summary:
      "How consistent, dependable creative and print production support made us a long-term BTL partner to a leading national insurance brand.",
    subtitle: "A Trusted Creative & BTL Support Partner for Corporate Communication",
    intro: [
      "Cholamandalam MS General Insurance (Chola MS) is one of India's leading private general insurance companies and a joint venture between the Murugappa Group and Japan's Mitsui Sumitomo Insurance Group (MSIG). Headquartered in Chennai, the company offers a wide range of general insurance solutions across motor, health, travel, property, marine, engineering and liability insurance. With a nationwide network, thousands of intermediaries and a workforce of over 5,700 professionals, Chola MS serves millions of customers across India and is recognised as one of the country's most trusted insurance brands.",
      "Behind every successful corporate event, is communication that works.",
      "Large organisations conduct hundreds of internal initiatives every year — recognition programmes, employee appreciation events, corporate celebrations and internal campaigns. Every one of these requires creative communication that is professional, engaging and delivered on time.",
      "For several years, Leverage Advertising has been a trusted creative and print production partner for Chola MS General Insurance, providing consistent support across a wide range of internal branding and BTL communication requirements.",
      "Our strength has been simple: deliver quality creative work—quickly, consistently and reliably.",
    ],
    sections: [
      {
        heading: "The Challenge",
        paragraphs: [
          "For a company operating at the scale of Chola MS, maintaining consistency across internal communication materials is essential.",
          "Creative assets often need to be developed within tight timelines while adhering to strict corporate brand guidelines.",
          "The challenge was to ensure that every design and every printed material reflected the professionalism and credibility of the Chola MS brand.",
        ],
      },
      {
        heading: "Our Role",
        paragraphs: [
          "Leverage Advertising has provided continuous creative and production support across numerous corporate initiatives.",
          "Every assignment was delivered with careful attention to quality, consistency and timelines. Our work has included:",
        ],
        list: [
          "Rewards & Recognition programme creatives",
          "Event branding materials",
          "Stage backdrops",
          "Certificates",
          "Appreciation collaterals",
          "Invitation cards",
          "Posters",
          "Banners",
          "Standees",
          "Office branding materials",
          "Brochures",
          "Presentation folders",
          "Promotional materials",
          "Corporate giveaways",
          "Print production and execution",
        ],
      },
      {
        heading: "Creative Support That Builds Consistency",
        paragraphs: [
          "While individual assignments varied in size, our objective remained the same: to ensure that every communication reflected the Chola MS brand with clarity and professionalism.",
          "Whether designing a recognition certificate or producing branding for an employee event, every piece was created to maintain a consistent visual identity across the organisation.",
        ],
      },
      {
        heading: "A Reliable Long-Term Creative Partner",
        paragraphs: [
          "Corporate communication often demands quick response times.",
          "Over the years, Leverage Advertising has built a reputation for dependable execution, creative problem-solving and high-quality production.",
          "Our ability to understand the client's requirements and deliver accurate, brand-compliant creative solutions has helped build a long-standing professional relationship with Chola MS.",
        ],
      },
      {
        heading: "Business Value Delivered",
        paragraphs: ["Through our continued association, we have helped Chola MS:"],
        list: [
          "Maintain consistent corporate branding across internal communication.",
          "Enhance the presentation of Rewards & Recognition programmes.",
          "Deliver professionally branded event materials.",
          "Produce high-quality creative and print collateral within demanding timelines.",
          "Ensure every communication reflected the standards of a leading corporate organisation.",
        ],
      },
      {
        heading: "Services Delivered",
        paragraphs: [],
        list: [
          "Creative Design",
          "BTL Communication",
          "Event Branding",
          "Rewards & Recognition Creatives",
          "Print Production",
          "Certificates & Appreciation Materials",
          "Posters & Banners",
          "Standees",
          "Corporate Collateral",
          "Office Branding",
          "Promotional Merchandise",
        ],
      },
    ],
    closing: [
      "Our contribution may have been behind the scenes, but it played an important role in supporting the company's internal communication and employee engagement initiatives.",
      "Not every project is measured by television commercials or large advertising campaigns. Some partnerships are built on consistency, reliability and trust.",
      "Our continued association with Chola MS General Insurance reflects our ability to support leading corporate organisations with professional creative communication, high-quality print production and dependable execution—delivering solutions that strengthen the brand at every internal touchpoint.",
    ],
    gallery: [
      { src: "/case-studies/chola-ms/01-cover.webp", alt: "Chola MS General Insurance \"Customer First\" corporate print advertisement" },
      { src: "/case-studies/chola-ms/02-brochure-spread.webp", alt: "Chola MS General Insurance Tamil product brochure spread" },
      { src: "/case-studies/chola-ms/03-health-camp-poster.webp", alt: "Chola MS \"Healthy Heart Lengthy Life\" corporate health camp event poster" },
    ],
    relatedSlugs: ["creative-design", "print-production"],
  },
  {
    slug: "avira-diamonds",
    client: "Sri Lakshmi Jewellery",
    category: "Brand Launch — Retail Jewellery & Integrated Campaign",
    logo: "/case-studies/logos/lakshmi.webp",
    coverImage: "/case-studies/avira-diamonds/01-cover.webp",
    teaserImage: "/case-studies/avira-diamonds/16-model-portrait-06.webp",
    summary:
      "How we built and launched AVIRA, a premium lab-grown diamond brand, with a unified creative campaign across print, digital, retail and outdoor.",
    subtitle: "Building a Modern Diamond Brand for Sri Lakshmi Jewellery",
    intro: [
      "Sri Lakshmi Jewellery, one of the region's trusted jewellery brands, envisioned introducing AVIRA, a premium lab-grown diamond brand that would appeal to today's conscious, design-oriented consumers.",
      "Unlike launching a new jewellery collection, this project involved introducing an entirely new brand and product category to the market. The objective was to build awareness, establish credibility, and create a premium brand experience that would inspire customer confidence from day one.",
      "Leverage Advertising was entrusted with developing the creative communication strategy and executing the launch across multiple customer touchpoints, ensuring a seamless and memorable brand introduction.",
    ],
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [],
        list: [
          "Client: Sri Lakshmi Jewellery",
          "Industry: Retail Jewellery",
          "Project: Brand Launch — AVIRA Lab-Grown Diamonds",
          "Duration: Brand Launch Campaign",
          "Agency: Leverage Advertising",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "Launching a new jewellery brand presents unique challenges. In addition to creating visual appeal, the communication must educate customers, build trust, and differentiate the brand in a highly competitive marketplace.",
          "For AVIRA, the primary challenges included:",
        ],
        list: [
          "Introducing a completely new premium jewellery brand.",
          "Creating awareness around lab-grown diamonds.",
          "Building customer confidence in an emerging product category.",
          "Positioning AVIRA as a modern luxury brand while leveraging the trust associated with Sri Lakshmi Jewellery.",
          "Maintaining consistency across every communication platform.",
        ],
      },
      {
        heading: "Our Strategic Approach",
        paragraphs: [
          "Rather than developing isolated advertisements, Leverage Advertising approached the assignment as a comprehensive brand-building initiative.",
          "Our strategy focused on creating a unified brand experience that would communicate luxury, authenticity, and contemporary elegance across every customer interaction. The approach included:",
        ],
        list: [
          "Brand Positioning — positioning AVIRA as a premium, contemporary diamond brand designed for modern lifestyles while reinforcing quality, trust, and sophistication.",
          "Consistent Brand Language — developing a cohesive visual identity that maintained consistency across print, digital, outdoor, and retail environments.",
          "Customer-Centric Communication — creating messaging that balanced aspiration with education, helping customers understand the value and beauty of lab-grown diamonds.",
          "Integrated Campaign Execution — ensuring every customer touchpoint, from newspaper advertisements to social media and retail branding, worked together to reinforce a single, memorable brand story.",
        ],
      },
      {
        heading: "Creative Execution",
        paragraphs: [
          "Leverage Advertising managed the creative development and production of a wide range of marketing assets to support the launch.",
        ],
        list: [
          "Brand Communication — launch campaign concepts, creative direction, brand messaging, campaign visual language.",
          "Print Advertising — newspaper advertisements, magazine advertisements, promotional campaigns, launch announcements.",
          "Digital Communication — social media campaigns, digital advertisements, promotional creatives, WhatsApp marketing creatives.",
          "Retail Branding — in-store branding, display panels, standees, point-of-sale materials, window graphics.",
          "Outdoor Advertising — hoardings, outdoor campaign creatives, transit branding.",
          "Marketing Collateral — brochures, invitation cards, promotional leaflets, product catalogues.",
          "Photography & Visual Content — product photography, creative art direction, campaign imagery.",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "The AVIRA launch successfully established a distinctive premium identity for the new brand while maintaining strong alignment with the heritage and credibility of Sri Lakshmi Jewellery.",
          "Through a carefully planned integrated communication strategy, the campaign achieved:",
        ],
        list: [
          "A strong and consistent premium brand identity.",
          "High visibility across multiple communication platforms.",
          "Effective introduction of a new product category.",
          "Enhanced customer awareness and engagement.",
          "A seamless brand experience across online and offline channels.",
          "A scalable creative framework for future marketing campaigns.",
        ],
      },
      {
        heading: "Our Contribution",
        paragraphs: [
          "At Leverage Advertising, we believe that successful brands are built through consistent strategy, compelling storytelling, and disciplined execution.",
          "The AVIRA launch exemplifies our ability to transform a business vision into a market-ready brand by combining strategic thinking with creative excellence.",
          "From concept to campaign execution, every element was designed to build recognition, inspire trust, and create lasting customer engagement.",
        ],
      },
      {
        heading: "Project Snapshot",
        paragraphs: [],
        list: [
          "Client: Sri Lakshmi Jewellery",
          "Brand: AVIRA Lab-Grown Diamonds",
          "Industry: Jewellery Retail",
          "Project Type: Brand Launch",
          "Agency Role: Brand Strategy, Creative Direction & Integrated Campaign Development",
          "Deliverables: Print, Digital, Retail Branding, Outdoor, Photography, Marketing Collateral",
          "Campaign Objective: Launch a premium lab-grown diamond brand with a unified communication strategy",
        ],
      },
      {
        heading: "Services Delivered",
        paragraphs: [],
        list: [
          "Brand Strategy",
          "Creative Direction",
          "Campaign Concept Development",
          "Print Advertising",
          "Digital Marketing Creatives",
          "Retail Branding",
          "Outdoor Advertising",
          "Product Photography",
          "Marketing Collateral",
          "Integrated Brand Communication",
        ],
      },
    ],
    closing: [
      "Every successful brand begins with a story worth telling.",
      "For AVIRA, the challenge was not simply to launch a new jewellery brand, but to introduce a new way of thinking about diamonds. Through a strategic blend of branding, storytelling, and integrated marketing communication, Leverage Advertising helped transform an idea into a distinctive premium brand with a compelling market presence.",
    ],
    gallery: [
      { src: "/case-studies/avira-diamonds/16-model-portrait-06.webp", alt: "AVIRA Diamonds bridal campaign model portrait with diamond necklace and chandelier earrings" },
      { src: "/case-studies/avira-diamonds/17-model-portrait-07.webp", alt: "AVIRA Diamonds bridal campaign model portrait in emerald-embellished saree with diamond necklace" },
      { src: "/case-studies/avira-diamonds/02-model-portrait-01.webp", alt: "AVIRA Diamonds brand campaign model portrait with diamond rings" },
      { src: "/case-studies/avira-diamonds/03-model-portrait-02.webp", alt: "AVIRA Diamonds brand campaign model portrait with diamond necklace" },
      { src: "/case-studies/avira-diamonds/04-model-portrait-03.webp", alt: "AVIRA Diamonds brand campaign model portrait in traditional saree with diamond jewellery" },
      { src: "/case-studies/avira-diamonds/05-model-portrait-04.webp", alt: "AVIRA Diamonds brand campaign model portrait with gold necklace" },
      { src: "/case-studies/avira-diamonds/15-model-portrait-05.webp", alt: "AVIRA Diamonds campaign model portrait showing layered diamond rings" },
      { src: "/case-studies/avira-diamonds/18-model-portrait-08.webp", alt: "AVIRA Diamonds editorial campaign model portrait with diamond necklace and bracelet" },
      { src: "/case-studies/avira-diamonds/01-cover.webp", alt: "\"Why Choose Lab-Grown Diamond Jewelry\" AVIRA Diamonds social media campaign creative" },
      { src: "/case-studies/avira-diamonds/06-bracelet-campaign.webp", alt: "\"Glitzy & Classy\" AVIRA Diamonds bracelet campaign creative" },
      { src: "/case-studies/avira-diamonds/07-pendant-campaign.webp", alt: "AVIRA Diamonds rose gold pendant necklace campaign creative" },
      { src: "/case-studies/avira-diamonds/08-why-choose-avira.webp", alt: "\"Why Choose AVIRA Diamonds\" campaign creative with brand trust icons" },
      { src: "/case-studies/avira-diamonds/09-ring-campaign.webp", alt: "\"Sparkle Spectrum\" AVIRA Diamonds ring campaign creative" },
      { src: "/case-studies/avira-diamonds/10-4cs-education.webp", alt: "\"4C's of Diamonds\" AVIRA Diamonds educational campaign creative" },
      { src: "/case-studies/avira-diamonds/11-retail-outdoor-display.webp", alt: "AVIRA Diamonds \"Found Sustainable Luxury\" retail outdoor display mockup" },
      { src: "/case-studies/avira-diamonds/19-showroom-storefront.webp", alt: "AVIRA Diamonds Pondicherry showroom storefront and launch invitation back panel" },
      { src: "/case-studies/avira-diamonds/13-invitation-outer-spread.webp", alt: "AVIRA Diamonds showroom launch invitation, outer spread" },
      { src: "/case-studies/avira-diamonds/14-invitation-inner-spread.webp", alt: "AVIRA Diamonds showroom launch invitation, inner spread with directors and model" },
      { src: "/case-studies/avira-diamonds/12-launch-invitation-front.webp", alt: "AVIRA Diamonds showroom launch invitation featuring brand ambassador and store front" },
    ],
    relatedSlugs: ["brand-strategy-consulting", "creative-advertising", "creative-design"],
  },
  {
    slug: "shanthi-jewellery-rebrand",
    client: "Shanthi Jewellery, Chennai",
    category: "Brand Repositioning & Integrated Retail Marketing",
    logo: "/case-studies/logos/shanthi.webp",
    coverImage: "/case-studies/shanthi-jewellery/01-cover.webp",
    teaserImage: "/case-studies/shanthi-jewellery/03-model-portrait.webp",
    summary:
      "How Leverage Advertising rebranded a century-old Chennai jewellery house into a modern, premium retail brand through integrated branding, photography and advertising.",
    subtitle: "Rebranding a Trusted Jewellery House into a Modern Retail Brand",
    intro: [
      "A new logo doesn't build a brand. A new perception does.",
      "For years, Shanthi Jewellery had earned customer trust through quality, value and relationships.",
      "But in a rapidly changing jewellery market, trust alone was no longer enough.",
      "Customers were choosing brands that looked premium, communicated consistently and created aspiration before they even stepped into the showroom.",
      "Shanthi Jewellery needed more than fresh advertising. It needed a complete brand transformation.",
      "Leverage Advertising was entrusted with the responsibility of redefining how customers perceived the brand—while preserving the credibility it had built over decades.",
    ],
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [],
        list: [
          "Client: Shanthi Jewellery, Chennai",
          "Industry: Jewellery Retail",
          "Agency: Leverage Advertising",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "The jewellery market in Chennai had become fiercely competitive.",
          "National chains were investing heavily in celebrity campaigns, premium photography, luxury retail experiences and integrated marketing. Shanthi Jewellery needed to compete without losing its identity.",
          "The objective was clear:",
        ],
        list: [
          "Modernise the brand.",
          "Enhance premium perception.",
          "Attract younger jewellery buyers.",
          "Strengthen customer trust.",
          "Increase showroom traffic through integrated marketing.",
        ],
      },
      {
        heading: "Our Strategic Approach",
        paragraphs: [
          "We approached the assignment as a complete brand-building exercise rather than a creative makeover.",
          "Every customer touchpoint was reimagined to reflect elegance, trust and aspiration. From the first advertisement to the final shopping bag, the brand had to speak one consistent visual language.",
          "Our strategy combined branding, photography, advertising, outdoor media and retail marketing into one integrated communication platform.",
        ],
      },
      {
        heading: "Complete Brand Repositioning",
        paragraphs: [
          "Leverage Advertising led the complete rebranding of Shanthi Jewellery. Our scope included:",
        ],
        list: [
          "Brand Strategy",
          "Brand Positioning",
          "Visual Identity Development",
          "Creative Direction",
          "Advertising Campaigns",
          "Retail Communication",
          "Packaging Design",
          "Marketing Collateral",
          "Outdoor Advertising",
          "Promotional Campaigns",
        ],
      },
      {
        heading: "Professional Model Photography",
        paragraphs: [
          "The result was a brand identity that reflected the quality of the jewellery and the aspirations of modern consumers.",
          "One of the biggest transformations came through photography. Instead of conventional catalogue images, we introduced professionally art-directed fashion photography featuring experienced jewellery models.",
          "Every photoshoot was carefully planned to showcase:",
        ],
        list: ["Elegance", "Craftsmanship", "Luxury", "Lifestyle appeal", "Emotional storytelling"],
      },
      {
        heading: "Creative Campaigns That Built Recall",
        paragraphs: [
          "These visual assets became the foundation for print advertisements, outdoor campaigns, brochures, showroom branding and digital communication. The upgraded photography dramatically elevated the perceived value of the brand and helped Shanthi Jewellery compete visually with leading national jewellery retailers.",
          "Beyond individual advertisements, we developed a consistent creative language for the brand. Over multiple campaigns, Leverage Advertising created:",
        ],
        list: [
          "Festival campaigns",
          "Wedding collections",
          "Akshaya Tritiya promotions",
          "Diwali campaigns",
          "Bridal jewellery campaigns",
          "Product launches",
          "Newspaper advertisements",
          "Digital creatives",
          "Retail communication",
          "In-store branding",
        ],
      },
      {
        heading: "Outdoor Advertising & Roadshows",
        paragraphs: [
          "Every campaign strengthened brand recognition and maintained consistency across all customer touchpoints.",
          "To maximise visibility across Chennai, we executed extensive outdoor advertising campaigns, including:",
        ],
        list: [
          "Premium hoardings",
          "Pole kiosks",
          "Retail branding",
          "Transit advertising",
          "Roadshows",
          "Local promotional events",
        ],
      },
      {
        heading: "Gold Saving Scheme Campaigns",
        paragraphs: [
          "These high-impact campaigns increased brand visibility and drove customers directly to the showroom during key shopping seasons.",
          "Jewellery retail is built on long-term customer relationships. To support customer acquisition and retention, we conceptualised and promoted Shanthi Jewellery's Gold Saving Schemes through integrated marketing campaigns.",
          "Our communication focused on:",
        ],
        list: [
          "Building customer trust",
          "Encouraging recurring purchases",
          "Simplifying the benefits of the scheme",
          "Increasing enrolments through compelling creative communication",
        ],
      },
      {
        heading: "Seasonal Sales & Retail Promotions",
        paragraphs: [
          "These campaigns helped position the savings scheme not merely as a financial plan but as a smart pathway to future jewellery purchases.",
          "Throughout our association, we designed and executed numerous retail sales campaigns that created excitement and increased showroom footfall. These included:",
        ],
        list: [
          "Anniversary Sale Campaigns",
          "Festive Offers",
          "Wedding Season Promotions",
          "Exchange Offers",
          "Gold Rate Campaigns",
          "Seasonal Retail Activations",
        ],
      },
      {
        heading: "The Business Impact",
        paragraphs: [
          "Every campaign was carefully crafted to balance promotional messaging with premium brand perception.",
          "The transformation extended far beyond aesthetics. The new brand identity elevated customer perception, strengthened market presence and gave Shanthi Jewellery a more contemporary, premium image in an increasingly competitive marketplace.",
          "The integrated marketing approach ensured that every advertisement, photograph, roadshow, outdoor campaign and promotional activity worked together to build one strong, recognisable brand.",
        ],
      },
      {
        heading: "Services Delivered",
        paragraphs: [],
        list: [
          "Complete Brand Rebranding",
          "Brand Strategy",
          "Visual Identity",
          "Professional Jewellery Photography",
          "Creative Direction",
          "Print Advertising",
          "Outdoor Advertising",
          "Roadshows",
          "Retail Branding",
          "Promotional Campaigns",
          "Gold Saving Scheme Marketing",
          "Seasonal Sales Campaigns",
          "Marketing Collateral",
          "Integrated Brand Communication",
        ],
      },
    ],
    closing: [
      "A jewellery brand is not built by beautiful jewellery alone. It is built by the way customers see it, remember it and trust it.",
      "Through strategic branding, premium photography and integrated marketing, Leverage Advertising helped Shanthi Jewellery present itself with the confidence and sophistication of a leading jewellery retailer.",
      "This project reflects our philosophy that branding is not about making businesses look different—it is about making them more desirable, more memorable and more valuable.",
    ],
    gallery: [
      { src: "/case-studies/shanthi-jewellery/01-cover.webp", alt: "Shanthi Jewellers 107 years anniversary showroom expansion campaign featuring a bridal jewellery model" },
      { src: "/case-studies/shanthi-jewellery/02-invitation-front.webp", alt: "Pallavaram Shanthi Jewellers showroom expansion invitation cover, 107 years of trust" },
      { src: "/case-studies/shanthi-jewellery/03-model-portrait.webp", alt: "Shanthi Jewellers bridal jewellery campaign model portrait with gold necklace and bangles" },
      { src: "/case-studies/shanthi-jewellery/04-invitation-inner.webp", alt: "Shanthi Jewellers showroom inauguration invitation inner spread with special offers" },
      { src: "/case-studies/shanthi-jewellery/05-product-photography.webp", alt: "Shanthi Jewellers temple-design gold pendant necklace product photography" },
    ],
    relatedSlugs: ["brand-strategy-consulting", "creative-advertising", "ad-films-photography"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

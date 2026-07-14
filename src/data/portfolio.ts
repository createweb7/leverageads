export type PortfolioCategory = {
  slug: string;
  name: string;
};

export type PortfolioItem = {
  src: string;
  alt: string;
  categorySlug: string;
  width: number;
  height: number;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "jewellery", name: "Jewellery" },
  { slug: "logo-identity", name: "Logo & Identity" },
  { slug: "photography", name: "Photography" },
  { slug: "hospitality-food", name: "Hospitality & Food" },
  { slug: "corporate", name: "Corporate" },
  { slug: "real-estate", name: "Real Estate" },
  { slug: "education", name: "Education" },
  { slug: "textile-fashion", name: "Textile & Fashion" },
  { slug: "website", name: "Website" },
  { slug: "magazine", name: "Magazine" },
  { slug: "cinema", name: "Cinema" },
  { slug: "packaging", name: "Packaging" },
  { slug: "products", name: "Products" },
];

export const portfolioItems: PortfolioItem[] = [
  // jewellery
  { src: "/portfolio/jewellery/01.webp", alt: "Sovereign jewellery festive campaign", categorySlug: "jewellery", width: 827, height: 871 },
  { src: "/portfolio/jewellery/02.webp", alt: "GRT Jewellers campaign creative", categorySlug: "jewellery", width: 591, height: 984 },
  { src: "/portfolio/jewellery/03.webp", alt: "Hayagrivas \"Elegance Intact\" saree campaign", categorySlug: "jewellery", width: 827, height: 878 },
  { src: "/portfolio/jewellery/04.webp", alt: "Challani Jewellery Mart \"RARE!\" pearl bangles", categorySlug: "jewellery", width: 1168, height: 1036 },
  { src: "/portfolio/jewellery/05.webp", alt: "Sri Lakshmi Jewellery gold necklace campaign", categorySlug: "jewellery", width: 591, height: 984 },
  { src: "/portfolio/jewellery/06.webp", alt: "Challani Jewellery Mart brand campaign portrait", categorySlug: "jewellery", width: 591, height: 835 },
  { src: "/portfolio/jewellery/07.webp", alt: "PGP gemstone jewellery flatlay", categorySlug: "jewellery", width: 591, height: 591 },
  { src: "/portfolio/jewellery/08.webp", alt: "KRT gold antique jewellery campaign", categorySlug: "jewellery", width: 1167, height: 1096 },

  // logo-identity
  { src: "/portfolio/logo-identity/01.webp", alt: "Challani Jewellery Mart brand identity and stationery", categorySlug: "logo-identity", width: 3937, height: 4650 },
  { src: "/portfolio/logo-identity/02.webp", alt: "Haco Tech logo and stationery system", categorySlug: "logo-identity", width: 620, height: 709 },
  { src: "/portfolio/logo-identity/03.webp", alt: "Sudharma Foundation brand identity and stationery", categorySlug: "logo-identity", width: 1181, height: 1571 },
  { src: "/portfolio/logo-identity/04.webp", alt: "Surbharti brand identity and stationery", categorySlug: "logo-identity", width: 1000, height: 750 },
  { src: "/portfolio/logo-identity/05.webp", alt: "Logo design collection — Nidhish Krishnaa, Phoenix, Sudharma, MFM, Big Tree, Haco Tech", categorySlug: "logo-identity", width: 2267, height: 2993 },
  { src: "/portfolio/logo-identity/06.webp", alt: "Logo design collection — CoolTrip, Tejaas, SS Shriman, IcorePro, RARS", categorySlug: "logo-identity", width: 2267, height: 2993 },

  // photography
  { src: "/portfolio/photography/01.webp", alt: "Diamond and pearl necklace product photography", categorySlug: "photography", width: 827, height: 727 },
  { src: "/portfolio/photography/02.webp", alt: "Emerald and ruby necklace product photography", categorySlug: "photography", width: 827, height: 583 },
  { src: "/portfolio/photography/03.webp", alt: "Diamond necklace product photography", categorySlug: "photography", width: 827, height: 583 },
  { src: "/portfolio/photography/04.webp", alt: "Gold necklace product photography on colour backdrop", categorySlug: "photography", width: 583, height: 827 },
  { src: "/portfolio/photography/05.webp", alt: "Pearl bracelet styled product photography", categorySlug: "photography", width: 583, height: 827 },
  { src: "/portfolio/photography/06.webp", alt: "Jewellery styled product photography", categorySlug: "photography", width: 827, height: 583 },
  { src: "/portfolio/photography/07.webp", alt: "Luxury watch product photography", categorySlug: "photography", width: 827, height: 583 },
  { src: "/portfolio/photography/08.webp", alt: "Lakshmi Jewellery campaign model photography", categorySlug: "photography", width: 1456, height: 1322 },

  // hospitality-food
  { src: "/portfolio/hospitality-food/01.webp", alt: "Restaurant buffet promotional creative", categorySlug: "hospitality-food", width: 1181, height: 778 },
  { src: "/portfolio/hospitality-food/02.webp", alt: "Relishpro beverage brand campaign", categorySlug: "hospitality-food", width: 1181, height: 778 },
  { src: "/portfolio/hospitality-food/03.webp", alt: "Bar and drinks menu design", categorySlug: "hospitality-food", width: 931, height: 1317 },
  { src: "/portfolio/hospitality-food/04.webp", alt: "Dakshin restaurant menu design", categorySlug: "hospitality-food", width: 1181, height: 840 },
  { src: "/portfolio/hospitality-food/05.webp", alt: "Cup O Cafe pizza promotional creative", categorySlug: "hospitality-food", width: 1181, height: 833 },
  { src: "/portfolio/hospitality-food/06.webp", alt: "Vijay Homoeo Clinic healthcare campaign", categorySlug: "hospitality-food", width: 860, height: 1289 },
  { src: "/portfolio/hospitality-food/07.webp", alt: "Buhari Hotel restaurant campaign", categorySlug: "hospitality-food", width: 3543, height: 3543 },
  { src: "/portfolio/hospitality-food/08.webp", alt: "Ocean Spray resort magazine advertisement", categorySlug: "hospitality-food", width: 1772, height: 665 },

  // corporate
  { src: "/portfolio/corporate/01.webp", alt: "Premier Voltage Stabilizer product campaign", categorySlug: "corporate", width: 945, height: 946 },
  { src: "/portfolio/corporate/02.webp", alt: "Festive corporate greeting creative", categorySlug: "corporate", width: 945, height: 1489 },
  { src: "/portfolio/corporate/03.webp", alt: "Raj Printers brand campaign", categorySlug: "corporate", width: 1686, height: 2403 },
  { src: "/portfolio/corporate/04.webp", alt: "MMRT corporate event creative", categorySlug: "corporate", width: 827, height: 1170 },
  { src: "/portfolio/corporate/05.webp", alt: "Chamber of commerce annual report cover", categorySlug: "corporate", width: 899, height: 1324 },
  { src: "/portfolio/corporate/06.webp", alt: "Industrial coating and corrosion campaign", categorySlug: "corporate", width: 908, height: 1284 },
  { src: "/portfolio/corporate/07.webp", alt: "Pulse72 fitness brand campaign", categorySlug: "corporate", width: 945, height: 945 },
  { src: "/portfolio/corporate/08.webp", alt: "Philips sustainability campaign", categorySlug: "corporate", width: 939, height: 2004 },

  // real-estate
  { src: "/portfolio/real-estate/01.webp", alt: "REBI Property Fair campaign", categorySlug: "real-estate", width: 1181, height: 949 },
  { src: "/portfolio/real-estate/02.webp", alt: "Landmax real estate campaign", categorySlug: "real-estate", width: 945, height: 1508 },
  { src: "/portfolio/real-estate/03.webp", alt: "Vertical Brokers real estate brand creative", categorySlug: "real-estate", width: 1524, height: 1363 },
  { src: "/portfolio/real-estate/04.webp", alt: "Real estate investment campaign", categorySlug: "real-estate", width: 904, height: 1413 },
  { src: "/portfolio/real-estate/05.webp", alt: "Rau Holdings anniversary campaign", categorySlug: "real-estate", width: 1018, height: 1013 },
  { src: "/portfolio/real-estate/06.webp", alt: "Real estate launch invitation stationery", categorySlug: "real-estate", width: 1181, height: 1559 },
  { src: "/portfolio/real-estate/07.webp", alt: "Residential property architectural render poster", categorySlug: "real-estate", width: 2481, height: 1754 },

  // education
  { src: "/portfolio/education/01.webp", alt: "St. Paul's Matriculation School brochure cover", categorySlug: "education", width: 1181, height: 788 },
  { src: "/portfolio/education/02.webp", alt: "St. Paul's Matriculation School brochure spread", categorySlug: "education", width: 1181, height: 788 },
  { src: "/portfolio/education/03.webp", alt: "RARS Matriculation School admissions campaign", categorySlug: "education", width: 1181, height: 591 },
  { src: "/portfolio/education/04.webp", alt: "Akshara Vidyaashram school brochure cover", categorySlug: "education", width: 945, height: 622 },
  { src: "/portfolio/education/05.webp", alt: "Akshara Vidyaashram school brochure spread", categorySlug: "education", width: 1181, height: 777 },
  { src: "/portfolio/education/06.webp", alt: "Achariya school admissions campaign", categorySlug: "education", width: 3513, height: 2483 },

  // textile-fashion
  { src: "/portfolio/textile-fashion/01.webp", alt: "Atelier Trousers \"Royal Satin\" campaign", categorySlug: "textile-fashion", width: 750, height: 531 },
  { src: "/portfolio/textile-fashion/02.webp", alt: "Atelier Trousers \"Structured\" campaign", categorySlug: "textile-fashion", width: 1781, height: 1100 },
  { src: "/portfolio/textile-fashion/03.webp", alt: "Sellers menswear fashion photography", categorySlug: "textile-fashion", width: 650, height: 520 },
  { src: "/portfolio/textile-fashion/04.webp", alt: "Nakshatra silk sarees festive campaign", categorySlug: "textile-fashion", width: 1600, height: 1132 },
  { src: "/portfolio/textile-fashion/05.webp", alt: "Diva Collection fashion campaign", categorySlug: "textile-fashion", width: 827, height: 1170 },
  { src: "/portfolio/textile-fashion/06.webp", alt: "Atelier Trousers \"Cool Khakis\" campaign", categorySlug: "textile-fashion", width: 750, height: 531 },
  { src: "/portfolio/textile-fashion/07.webp", alt: "Fashion retail digital campaign creative", categorySlug: "textile-fashion", width: 1250, height: 850 },
  { src: "/portfolio/textile-fashion/08.webp", alt: "Rajendira's Women's Store & Men's Store family campaign photography", categorySlug: "textile-fashion", width: 1000, height: 1001 },
  { src: "/portfolio/textile-fashion/09.webp", alt: "Rajendira's Women's Store \"What Women Want\" hoarding campaign", categorySlug: "textile-fashion", width: 1000, height: 1000 },
  { src: "/portfolio/textile-fashion/10.webp", alt: "Rajendira's Women's Store magazine advertisement", categorySlug: "textile-fashion", width: 1500, height: 1057 },
  { src: "/portfolio/textile-fashion/11.webp", alt: "Rajendira's Women's Store Tamil press advertisement with floor directory", categorySlug: "textile-fashion", width: 1079, height: 1700 },
  { src: "/portfolio/textile-fashion/12.webp", alt: "Rajendira's Women's Store press advertisement with floor directory", categorySlug: "textile-fashion", width: 800, height: 1050 },
  { src: "/portfolio/textile-fashion/13.webp", alt: "Rajendira's Men's Store & Women's Store brochure cover design", categorySlug: "textile-fashion", width: 1500, height: 1000 },
  { src: "/portfolio/textile-fashion/14.webp", alt: "Rajendira's Women's Store outdoor banner campaign", categorySlug: "textile-fashion", width: 1600, height: 1600 },
  { src: "/portfolio/textile-fashion/15.webp", alt: "Rajendira's family clothing store hoarding campaign", categorySlug: "textile-fashion", width: 1600, height: 1600 },

  // website
  { src: "/portfolio/website/01.webp", alt: "RT magazine website design", categorySlug: "website", width: 945, height: 1293 },
  { src: "/portfolio/website/02.webp", alt: "Event website design", categorySlug: "website", width: 1181, height: 1489 },
  { src: "/portfolio/website/03.webp", alt: "Vijay Homoeo Clinic website design", categorySlug: "website", width: 945, height: 1460 },
  { src: "/portfolio/website/04.webp", alt: "Relishpro website design", categorySlug: "website", width: 945, height: 1489 },
  { src: "/portfolio/website/05.webp", alt: "Lakshmi Silvers e-commerce website design", categorySlug: "website", width: 1032, height: 789 },
  { src: "/portfolio/website/06.webp", alt: "Silvers online jewellery store website design", categorySlug: "website", width: 1240, height: 947 },

  // magazine
  { src: "/portfolio/magazine/01.webp", alt: "RT magazine cover feature", categorySlug: "magazine", width: 932, height: 1319 },
  { src: "/portfolio/magazine/02.webp", alt: "RT magazine cover feature", categorySlug: "magazine", width: 931, height: 1318 },
  { src: "/portfolio/magazine/03.webp", alt: "RT magazine cover feature", categorySlug: "magazine", width: 931, height: 1327 },
  { src: "/portfolio/magazine/04.webp", alt: "RT magazine cover feature", categorySlug: "magazine", width: 922, height: 1305 },
  { src: "/portfolio/magazine/05.webp", alt: "RT magazine cover feature", categorySlug: "magazine", width: 923, height: 1306 },
  { src: "/portfolio/magazine/06.webp", alt: "RT magazine travel feature cover", categorySlug: "magazine", width: 922, height: 1314 },
  { src: "/portfolio/magazine/07.webp", alt: "RT magazine food feature cover", categorySlug: "magazine", width: 923, height: 1306 },

  // cinema
  { src: "/portfolio/cinema/01.webp", alt: "Tamil film release campaign creative", categorySlug: "cinema", width: 983, height: 737 },
  { src: "/portfolio/cinema/02.webp", alt: "Tamil film release campaign creative", categorySlug: "cinema", width: 983, height: 737 },
  { src: "/portfolio/cinema/03.webp", alt: "Tamil film release campaign creative", categorySlug: "cinema", width: 972, height: 729 },
  { src: "/portfolio/cinema/04.webp", alt: "Tamil film release campaign creative", categorySlug: "cinema", width: 973, height: 730 },
  { src: "/portfolio/cinema/05.webp", alt: "Tamil film release campaign creative", categorySlug: "cinema", width: 967, height: 726 },
  { src: "/portfolio/cinema/06.webp", alt: "Tamil film release campaign creative", categorySlug: "cinema", width: 972, height: 729 },

  // packaging
  { src: "/portfolio/packaging/01.webp", alt: "Tablet product packaging design", categorySlug: "packaging", width: 1628, height: 1511 },
  { src: "/portfolio/packaging/02.webp", alt: "Nutrition supplement jar packaging range", categorySlug: "packaging", width: 1181, height: 1559 },
  { src: "/portfolio/packaging/03.webp", alt: "Premium gift box packaging design", categorySlug: "packaging", width: 1772, height: 1254 },
  { src: "/portfolio/packaging/04.webp", alt: "Cup O Cafe branded packaging", categorySlug: "packaging", width: 2266, height: 1446 },
  { src: "/portfolio/packaging/05.webp", alt: "Challani desk calendar design", categorySlug: "packaging", width: 2500, height: 1500 },
  { src: "/portfolio/packaging/06.webp", alt: "Custom packaging die-line design", categorySlug: "packaging", width: 3145, height: 2156 },
  { src: "/portfolio/packaging/07.webp", alt: "Silk saree gift box packaging design", categorySlug: "packaging", width: 1000, height: 1000 },

  // products
  { src: "/portfolio/products/01.webp", alt: "Silver mandapam product photography", categorySlug: "products", width: 827, height: 1378 },
  { src: "/portfolio/products/02.webp", alt: "Silver decorative fountain product photography", categorySlug: "products", width: 827, height: 922 },
  { src: "/portfolio/products/03.webp", alt: "Gold-plated Nataraja product photography", categorySlug: "products", width: 827, height: 1378 },
  { src: "/portfolio/products/04.webp", alt: "Silver lamp gifting product photography", categorySlug: "products", width: 827, height: 1377 },
  { src: "/portfolio/products/05.webp", alt: "Gold Lakshmi feet product photography", categorySlug: "products", width: 1181, height: 756 },
  { src: "/portfolio/products/06.webp", alt: "Silver urli with fruits product photography", categorySlug: "products", width: 827, height: 1144 },
  { src: "/portfolio/products/07.webp", alt: "Silver candle stand product photography", categorySlug: "products", width: 1181, height: 839 },
];

export function getPortfolioItemsByCategory(categorySlug: string) {
  return portfolioItems.filter((item) => item.categorySlug === categorySlug);
}

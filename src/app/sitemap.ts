import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { industries } from "@/data/industries";
import { insightPosts } from "@/data/insights";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/suresh-ramakrishnan",
    "/services",
    "/industries",
    "/portfolio",
    "/case-studies",
    "/insights",
    "/contact",
  ].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${siteConfig.url}/case-studies/${cs.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries
    .filter((i) => i.intro)
    .map((industry) => ({
      url: `${siteConfig.url}/industries/${industry.slug}`,
      lastModified: new Date(),
    }));

  const insightRoutes = insightPosts.map((post) => ({
    url: `${siteConfig.url}/insights/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...industryRoutes, ...insightRoutes];
}

import { MetadataRoute } from "next";
import { blogPosts, caseStudies } from "@/lib/data";

const BASE = "https://saandigitalsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/services`,          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`,      lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog`,              lastModified: now, changeFrequency: "daily",   priority: 0.7 },
    { url: `${BASE}/careers`,           lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}

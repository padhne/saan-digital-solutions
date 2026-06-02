import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: "https://saandigitalsolutions.com/sitemap.xml",
    host: "https://saandigitalsolutions.com",
  };
}

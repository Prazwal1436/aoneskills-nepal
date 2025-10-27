import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/",
          "/api/",
          "/admin/",
          "/_next/",
          "/temp/",
          "*.php",
          "*.cgi",
          "/search?*",
          "/filter?*"
        ],
        crawlDelay: 1
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/api/", "/admin/"]
      },
      {
        userAgent: "Bingbot", 
        allow: "/",
        disallow: ["/private/", "/api/", "/admin/"],
        crawlDelay: 2
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/"
      },
      {
        userAgent: "Twitterbot",
        allow: "/"
      }
    ],
    sitemap: "https://aoneskill.com.np/sitemap.xml",
    host: "https://aoneskill.com.np"
  };
}

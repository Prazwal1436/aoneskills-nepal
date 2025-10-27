import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AOne Skills International - Leading IT Company Nepal",
    short_name: "AOne Skills Nepal",
    description:
      "Leading IT services company in Nepal. Professional web development, mobile apps, e-commerce solutions, digital marketing, and custom software development for businesses across Nepal.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#3B82F6",
    categories: ["business", "technology", "education"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/logo.png",
        sizes: "500x500",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    screenshots: [],
    shortcuts: [
      {
        name: "Contact Us",
        short_name: "Contact",
        description: "Get in touch with AOne Skills International",
        url: "/contact",
        icons: [
          {
            src: "/icon.svg",
            sizes: "96x96"
          }
        ]
      },
      {
        name: "Our Services", 
        short_name: "Services",
        description: "View our IT services and solutions",
        url: "/services",
        icons: [
          {
            src: "/icon.svg", 
            sizes: "96x96"
          }
        ]
      },
      {
        name: "IT Products",
        short_name: "Products", 
        description: "Browse our ready-to-use digital products and solutions",
        url: "/products",
        icons: [
          {
            src: "/icon.svg",
            sizes: "96x96"
          }
        ]
      }
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.aoneskill.app",
        id: "com.aoneskill.app"
      }
    ],
    prefer_related_applications: false
  };
}

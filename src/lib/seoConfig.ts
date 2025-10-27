// SEO Configuration for A.One Skills International
export const seoConfig = {
  // Base website information
  baseUrl: "https://aoneskills.com.np",
  siteName: "A.One Skills Tech Solutions Nepal",
  siteTitle: "AOne Skills - Nepal #1 IT Company | सस्तो Website Mobile App Software SEO Digital Marketing सेवा",
  siteDescription: "Nepal को #1 IT company - सबैभन्दा सस्तो website बनाउने, mobile app development, e-commerce, digital marketing, SEO, software training। Kathmandu Pokhara Chitwan Butwal Dharan Biratnagar मा सेवा। Best quality, affordable price, expert Nepali team।",
  
  // Contact Information
  contact: {
    phone: "+977-9842747572",
  email: "info@aoneskills.com.np",
    whatsapp: "+977-9842747572",
    address: {
      street: "A.One Skills Tech Solution Pvt. Ltd.",
      city: "Damak",
      state: "Koshi Province", 
      postalCode: "57217",
      country: "Nepal",
      countryCode: "NP"
    },
    coordinates: {
      latitude: "26.6649",
      longitude: "87.6922"
    }
  },

  // Social Media Links
  social: {
    facebook: "https://www.facebook.com/aoneskills",
    instagram: "https://www.instagram.com/aoneskills/",
    linkedin: "https://www.linkedin.com/company/aoneskillsinternational",
    twitter: "https://twitter.com/aoneskillnepal",
    youtube: "https://www.youtube.com/@aoneskillsnepal",
    whatsapp: "https://wa.me/9779842747572",
    telegram: "https://t.me/aoneskillsnepal"
  },

  // SEO Keywords by Category
  keywords: {
    primary: [
      "Nepal IT company", "सस्तो website Nepal", "mobile app Nepal", "software development Nepal",
      "digital marketing Nepal", "SEO services Nepal", "web design Nepal", "cheap website Nepal",
      "best IT company Nepal", "affordable app development Nepal", "website design Kathmandu",
      "mobile app Pokhara", "software Chitwan", "IT services Butwal", "web development Dharan",
      "best website company Nepal", "best website company Damak", "best website company Purvanchal",
      "best website company Province 1", "best IT company Province 1", "website development Province 1",
      "website company Koshi Province", "website company Eastern Nepal", "website company Sunsari",
      "website company Jhapa", "website company Morang", "website company Biratnagar"
    ],
    services: [
      "website development Nepal", "mobile app development Nepal", "e-commerce development Nepal",
      "digital marketing Nepal", "SEO company Nepal", "software development Nepal",
      "web design Nepal", "app development Nepal", "IT consulting Nepal", "domain hosting Nepal"
    ],
    locations: [
      "website company Kathmandu", "IT company Pokhara", "web development Chitwan",
      "mobile app Butwal", "software company Dharan", "website company Biratnagar",
      "IT services Damak", "web design Nepalgunj", "app development Janakpur",
      "website company near me Nepal", "IT company near me Nepal"
    ],
    nepali: [
      "सस्तो website बनाउने", "mobile app बनाउने", "software development Nepal",
      "digital marketing Nepal", "SEO सेवा Nepal", "website company Nepal",
      "IT सेवा Nepal", "web design Nepal", "app development Nepal",
      "domain hosting Nepal", "online store Nepal", "e-commerce Nepal"
    ]
  },

  // Location-based SEO
  serviceAreas: [
    { city: "Kathmandu", state: "Bagmati Province", priority: 1 },
    { city: "Pokhara", state: "Gandaki Province", priority: 2 },
    { city: "Chitwan", state: "Bagmati Province", priority: 3 },
    { city: "Butwal", state: "Lumbini Province", priority: 4 },
    { city: "Dharan", state: "Koshi Province", priority: 5 },
    { city: "Biratnagar", state: "Koshi Province", priority: 6 },
    { city: "Damak", state: "Koshi Province", priority: 7 },
    { city: "Nepalgunj", state: "Lumbini Province", priority: 8 },
    { city: "Janakpur", state: "Madhesh Province", priority: 9 },
    { city: "Hetauda", state: "Bagmati Province", priority: 10 }
  ],

  // Service Categories
  services: [
    {
      name: "Website Development",
      slug: "website-development",
      keywords: ["website development Nepal", "web design Nepal", "business website Nepal"],
      priceRange: "NPR 35,000 - 85,000"
    },
    {
      name: "Mobile App Development", 
      slug: "mobile-app-development",
      keywords: ["mobile app development Nepal", "Android app Nepal", "iOS app Nepal"],
      priceRange: "NPR 120,000 - 350,000"
    },
    {
      name: "E-commerce Solutions",
      slug: "ecommerce-solutions", 
      keywords: ["e-commerce development Nepal", "online store Nepal", "shopping website Nepal"],
      priceRange: "NPR 75,000 - 180,000"
    },
    {
      name: "Digital Marketing",
      slug: "digital-marketing",
      keywords: ["digital marketing Nepal", "SEO services Nepal", "social media marketing Nepal"],
      priceRange: "NPR 18,000 - 65,000/month"
    },
    {
      name: "Software Solutions",
      slug: "software-solutions",
      keywords: ["custom software Nepal", "management system Nepal", "business software Nepal"],
      priceRange: "NPR 60,000 - 450,000"
    },
    {
      name: "IT Training",
      slug: "it-training",
      keywords: ["IT training Nepal", "programming course Nepal", "web development course Nepal"],
      priceRange: "NPR 12,000 - 45,000"
    }
  ],

  // Business Information
  business: {
    name: "A.One Skills Tech Solutions Pvt Ltd",
    alternateName: ["AOne Skills Nepal", "A1 Skills Nepal", "A One Skills International"],
    foundingDate: "2019",
    employees: "12+",
    experience: "5+ years",
    projectsCompleted: "150+",
    clientSatisfaction: "98%",
    rating: 4.8,
    reviewCount: 150,
    priceRange: "NPR 15000 - NPR 450000",
    paymentMethods: ["Cash", "Bank Transfer", "eSewa", "Khalti", "IME Pay", "ConnectIPS"],
    languages: ["English", "Nepali", "Hindi"],
    workingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00", 
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "09:00-18:00",
      sunday: "Closed"
    }
  },

  // Analytics and Tracking IDs
  analytics: {
    googleAnalytics: "G-5Y2T9CWNX4", // Your actual GA4 ID
    googleTagManager: "GTM-T5V24T4Z", // Replace with actual GTM ID
    facebookPixel: "1283005036962428", // Replace with actual FB Pixel ID
    hotjarId: "XXXXXXX", // Replace with actual Hotjar ID
    microsoftClarity: "XXXXXXXXXX", // Replace with actual Clarity ID
    linkedInInsight: "107131290" // Replace with actual LinkedIn ID
  },

  // Image and Media
  images: {
    logo: "/images/aone-skills-logo.png",
    favicon: "/favicon.ico",
    ogImage: "/images/og-image.jpg",
    twitterCard: "/images/twitter-card.jpg",
    appleTouchIcon: "/images/apple-touch-icon.png"
  }
};

// Generate dynamic meta tags
export const generateMetaTags = (pageType: string, customData?: any) => {
  const base = {
    title: seoConfig.siteTitle,
    description: seoConfig.siteDescription,
    keywords: seoConfig.keywords.primary.join(", "),
    url: seoConfig.baseUrl
  };

  switch (pageType) {
    case 'homepage':
      return {
        ...base,
        title: "A.One Skills - Nepal #1 IT Company | सस्तो Website Mobile App Software SEO Digital Marketing सेवा",
        description: "Nepal को #1 IT company - सबैभन्दा सस्तो website बनाउने, mobile app development, e-commerce, digital marketing, SEO, software training। Kathmandu Pokhara Chitwan Butwal Dharan Biratnagar मा सेवा। Best quality, affordable price, expert Nepali team।"
      };
    
    case 'services':
      return {
        ...base,
        title: "IT Services Nepal - Web Development, Mobile Apps, Software | AOne Skills",
        description: "Complete IT services in Nepal: Website development, mobile apps, e-commerce, digital marketing, custom software, SEO. Professional team, affordable prices, 24/7 support across Nepal.",
        keywords: seoConfig.keywords.services.join(", ")
      };
    
    case 'contact':
      return {
        ...base,
        title: "Contact AOne Skills Nepal - Best IT Company | Call +977-9842747572",
        description: "Contact Nepal's #1 IT company for website, mobile app, software development. Free consultation, expert team, affordable prices. Call +977-9842747572 or WhatsApp for instant response."
      };
    
    case 'about':
      return {
        ...base,
        title: "About AOne Skills - Leading IT Company Nepal | 150+ Projects, 5+ Years Experience",
        description: "Founded in 2019, AOne Skills is Nepal's trusted IT partner with 150+ completed projects, 98% client satisfaction. Expert team providing website, app, software solutions across Nepal."
      };
    
    default:
      return base;
  }
};

export default seoConfig;
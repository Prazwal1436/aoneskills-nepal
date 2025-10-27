"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DiscountSpinner from "../components/DiscountSpinner";
import FloatingDiscountWidget from "../components/FloatingDiscountWidget";
import { useDiscount } from "../hooks/useDiscount";

// Enhanced JSON-LD structured data for comprehensive SEO
const getOrganizationJsonLd = (discountState: { discount: number; isActive: boolean }) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://aoneskill.com.np/#organization",
  name: "A.One Skills Tech Solutions Pvt Ltd",
  alternateName: ["AOne Skills Nepal", "A1 Skills Nepal", "A One Skills International", "Best IT Company Nepal", "Top Software Company Nepal"],
  url: "https://aoneskill.com.np",
  logo: {
    "@type": "ImageObject",
    url: "https://aoneskill.com.np/logo.png",
    width: "300",
    height: "100"
  },
  image: [
    "https://aoneskill.com.np/images/aone-skills-office.jpg",
    "https://aoneskill.com.np/images/team-photo.jpg"
  ],
  description: "Nepal's #1 IT company providing best software development, web design, mobile app development, e-commerce solutions, digital marketing, and IT training services in Kathmandu, Pokhara, Chitwan, Butwal, Dharan, Biratnagar, Nepalgunj, and across all major cities of Nepal. Affordable IT services for small business, corporate companies, NGOs, and international clients.",
  slogan: "Nepal's Most Trusted IT Partner - सबैभन्दा भरपर्दो IT सेवा",
  foundingDate: "2019",
  keywords: [
    "IT company Nepal", "software company Nepal", "web development Nepal", "mobile app development Nepal", 
    "website design Nepal", "e-commerce Nepal", "digital marketing Nepal", "SEO services Nepal",
    "software development Kathmandu", "web design Pokhara", "app development Chitwan",
    "IT services Butwal", "website company Dharan", "software firm Biratnagar",
    "cheap website Nepal", "affordable IT services", "best IT company Nepal",
    "top software company Nepal", "professional website Nepal", "business website Nepal",
    "online store Nepal", "mobile app Nepal", "android app Nepal", "iOS app Nepal",
    "Laravel development Nepal", "React development Nepal", "WordPress Nepal",
    "PHP development Nepal", "Java training Nepal", "Python training Nepal",
    "digital marketing company Nepal", "SEO company Nepal", "social media marketing Nepal",
    "graphic design Nepal", "logo design Nepal", "branding services Nepal",
    "domain hosting Nepal", "web hosting Nepal", "SSL certificate Nepal",
    "payment gateway Nepal", "khalti integration", "esewa integration",
    "nepal software", "nepal IT", "technology Nepal", "startup Nepal",
    "freelancer Nepal", "outsourcing Nepal", "remote work Nepal"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "A.One Skills Tech Solution Pvt. Ltd.",
    addressLocality: "Damak",
    addressRegion: "Koshi Province", 
    postalCode: "57217",
    addressCountry: "NP"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.6649",
    longitude: "87.6922"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nepal"
    },
    {
      "@type": "City",
      name: "Kathmandu"
    },
    {
      "@type": "City",
      name: "Pokhara"
    },
    {
      "@type": "City",
      name: "Chitwan"
    },
    {
      "@type": "City",
      name: "Butwal"
    },
    {
      "@type": "City",
      name: "Dharan"
    },
    {
      "@type": "City",
      name: "Biratnagar"
    },
    {
      "@type": "City",
      name: "Nepalgunj"
    },
    {
      "@type": "City",
      name: "Janakpur"
    },
    {
      "@type": "City",
      name: "Hetauda"
    },
    {
      "@type": "City",
      name: "Damak"
    },
    {
      "@type": "Country", 
      name: "India"
    },
    "Global"
  ],
  serviceType: [
    "Custom Software Development Nepal",
    "Business Website Development Nepal", 
    "E-commerce Website Nepal",
    "Mobile App Development Nepal",
    "Android App Development Nepal",
    "iOS App Development Nepal",
    "Digital Marketing Services Nepal",
    "SEO Services Nepal",
    "Social Media Marketing Nepal",
    "Google Ads Management Nepal",
    "Facebook Marketing Nepal",
    "IT Consulting Nepal",
    "Software Training Nepal",
    "Programming Course Nepal",
    "Web Design Nepal",
    "UI UX Design Nepal",
    "Graphic Design Nepal",
    "Logo Design Nepal",
    "WordPress Development Nepal",
    "Laravel Development Nepal",
    "React Development Nepal",
    "Flutter App Development Nepal",
    "PHP Development Nepal",
    "JavaScript Development Nepal",
    "Python Development Nepal",
    "Java Training Nepal",
    "Database Design Nepal",
    "Cloud Services Nepal",
    "Web Hosting Nepal",
    "Domain Registration Nepal",
    "SSL Certificate Nepal",
    "Payment Gateway Integration Nepal",
    "Khalti Integration Nepal",
    "eSewa Integration Nepal",
    "ConnectIPS Integration Nepal",
    "School Management System Nepal",
    "Hospital Management System Nepal",
    "Inventory Management System Nepal",
    "POS System Nepal",
    "Accounting Software Nepal",
    "CRM Software Nepal",
    "ERP System Nepal",
    "Restaurant Management System Nepal",
    "Hotel Booking System Nepal",
    "Real Estate Website Nepal",
    "News Portal Development Nepal",
    "Job Portal Development Nepal",
    "Online Learning Platform Nepal",
    "Multi-vendor Marketplace Nepal",
    "Government Project Nepal",
    "NGO Website Nepal",
    "Corporate Website Nepal",
    "Small Business Website Nepal",
    "Startup IT Services Nepal"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9842747572",
    email: "info@aoneskill.com.np",
    contactType: "Customer Service",
    areaServed: ["Nepal", "Kathmandu", "Pokhara", "Chitwan", "Butwal", "Dharan", "Biratnagar", "Damak"],
    availableLanguage: ["English", "Nepali", "Hindi", "नेपाली"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    }
  },
  sameAs: [
    "https://www.facebook.com/aoneskills",
    "https://www.instagram.com/aoneskills/",
    "https://www.linkedin.com/company/aoneskillsinternational",
    "https://wa.me/9779842747572"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  },
  offers: discountState.isActive ? {
    "@type": "Offer",
    description: `${discountState.discount}% discount on all IT services and software development projects`,
    discount: `${discountState.discount}%`,
    validFrom: new Date().toISOString(),
    validThrough: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "A.One Skills Tech Solutions Pvt Ltd"
    }
  } : undefined,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nepal IT Services - सबैभन्दा सस्तो र राम्रो",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "सस्तो Website बनाउने सेवा Nepal - Cheap Website Development",
          description: "Business website, company website, personal website, portfolio website - सबैभन्दा सस्तो दरमा"
        },
        priceCurrency: "NPR",
        price: "15000-75000"
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Online Shop बनाउने - E-commerce Website Nepal",
          description: "Khalti, eSewa, ConnectIPS payment सहितको online store - सबैभन्दा सस्तो"
        },
        priceCurrency: "NPR",
        price: "45000-150000"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Mobile App बनाउने - Android iOS App Nepal",
          description: "Business app, service app, delivery app - professional mobile application"
        },
        priceCurrency: "NPR",
        price: "80000-250000"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "SEO Digital Marketing Nepal - गुगलमा Top आउने सेवा",
          description: "Google मा website को rank बढाउने, Facebook Instagram marketing, social media"
        },
        priceCurrency: "NPR",
        price: "25000-75000"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Software Training Course Nepal - सिकाउने सेवा",
          description: "Web development, programming, digital marketing सिकाउने course - job guarantee"
        },
        priceCurrency: "NPR",
        price: "35000-85000"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Management System Nepal - Office Software",
          description: "School, hospital, restaurant, inventory management system - custom software"
        },
        priceCurrency: "NPR",
        price: "150000-500000"
      }
    ]
  }
});

const getWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://aoneskill.com.np/#website",
  url: "https://aoneskill.com.np",
  name: "A.One Skills Tech Solutions - Best IT Company Nepal | सबैभन्दा राम्रो IT सेवा",
  description: "Nepal ko #1 IT company - सस्तो website, mobile app, software, digital marketing, SEO, training - Kathmandu, Pokhara, Chitwan, Butwal, Dharan, Biratnagar सबै ठाउँमा सेवा",
  publisher: {
    "@id": "https://aoneskill.com.np/#organization"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aoneskill.com.np/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  inLanguage: ["en-US", "ne-NP"]
});

const getWebpageJsonLd = (discountState: { discount: number; isActive: boolean }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://aoneskill.com.np/#webpage",
  url: "https://aoneskill.com.np",
  name: discountState.isActive 
    ? `AOne Skills International - ${discountState.discount}% OFF IT Services Nepal`
    : "AOne Skills International - Leading IT Company Nepal",
  description: discountState.isActive
    ? `Professional IT services in Nepal with ${discountState.discount}% discount. Web development, mobile apps, software solutions for Nepali businesses.`
    : "Professional IT services in Nepal. Web development, mobile apps, e-commerce, digital marketing, and custom software solutions for businesses across Nepal.",
  isPartOf: {
    "@id": "https://aoneskill.com.np/#website"
  },
  about: {
    "@id": "https://aoneskill.com.np/#organization"
  },
  datePublished: "2019-01-01",
  dateModified: new Date().toISOString().split('T')[0]
});

const getBreadcrumbJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://aoneskill.com.np"
    }
  ]
});

const getFaqJsonLd = () => ({
  "@context": "https://schema.org", 
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What IT services do you provide in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide comprehensive IT services including web development, mobile app development, e-commerce solutions, digital marketing, custom software development, IT training, and technical support specifically for Nepali businesses."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide services in Nepali language?",
      acceptedAnswer: {
        "@type": "Answer", 
        text: "Yes, we provide full support in Nepali, Hindi, and English languages. Our team understands local business culture and can communicate effectively in your preferred language."
      }
    },
    {
      "@type": "Question",
      name: "What are your pricing for website development in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our website development pricing starts from NPR 35,000 for basic business websites up to NPR 85,000 for advanced websites. E-commerce solutions range from NPR 75,000 to NPR 180,000 depending on features and complexity."
      }
    },
    {
      "@type": "Question",
      name: "Do you accept local payment methods in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we accept all major Nepali payment methods including eSewa, Khalti, IME Pay, and direct bank transfers. We also accept international payments for global clients."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to complete a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on complexity. Business websites take 1-4 weeks, e-commerce solutions 2-6 weeks, mobile apps 3-8 weeks, and custom software 2-12 weeks. We provide detailed timelines during consultation."
      }
    }
  ]
});

export default function Home() {
  const [showSpinner, setShowSpinner] = useState(false);
  const { discountState, getRemainingTime } = useDiscount();

  // Dynamic SEO content based on discount state
  const seoTitle = discountState.isActive
    ? `A.One Skills - ${discountState.discount}% छुट! सबैभन्दा सस्तो Website Mobile App Nepal | Best IT Company`
    : "A.One Skills - Nepal #1 IT Company | सस्तो Website Mobile App Software SEO Digital Marketing सेवा";
    
  const seoDescription = discountState.isActive
    ? `Nepal ko best IT company बाट ${discountState.discount}% discount मा website, mobile app, software development! सबैभन्दा सस्तो र राम्रो सेवा - Kathmandu, Pokhara, Chitwan, Butwal, Dharan, Biratnagar मा उपलब्ध। Professional team, 24/7 support, job guarantee training।`
    : "Nepal को #1 IT company - सबैभन्दा सस्तो website बनाउने, mobile app development, e-commerce, digital marketing, SEO, software training। Kathmandu Pokhara Chitwan Butwal Dharan Biratnagar मा सेवा। Best quality, affordable price, expert Nepali team।";

  const seoKeywords = discountState.isActive
    ? `Nepal IT company discount, ${discountState.discount}% छुट website Nepal, सस्तो mobile app Nepal, cheap software development Nepal, discount digital marketing Nepal, offer web design Nepal, सस्तो IT सेवा Nepal, best price website Nepal, affordable app development Nepal, discount SEO Nepal, cheap training course Nepal`
    : "Nepal IT company, सस्तो website Nepal, mobile app Nepal, software development Nepal, digital marketing Nepal, SEO services Nepal, web design Nepal, cheap website Nepal, best IT company Nepal, affordable app development Nepal, website design Kathmandu, mobile app Pokhara, software Chitwan, IT services Butwal, web development Dharan, app development Biratnagar, cheap website Nepalgunj, affordable software Janakpur, best web design Hetauda, IT training Nepal, programming course Nepal, job guarantee training Nepal, freelancer Nepal, startup Nepal, small business website Nepal, corporate website Nepal, e-commerce Nepal, online store Nepal, khalti integration Nepal, esewa integration Nepal, payment gateway Nepal, school management system Nepal, hospital software Nepal, restaurant POS Nepal, inventory system Nepal, accounting software Nepal, CRM Nepal, ERP Nepal, government project Nepal, NGO website Nepal, news portal Nepal, job portal Nepal, learning platform Nepal, marketplace Nepal, real estate website Nepal, hotel booking system Nepal, graphic design Nepal, logo design Nepal, branding Nepal, domain hosting Nepal, web hosting Nepal, SSL certificate Nepal, cloud services Nepal, database design Nepal, Laravel Nepal, WordPress Nepal, React Nepal, Flutter Nepal, PHP Nepal, JavaScript Nepal, Python Nepal, Java training Nepal, Android app Nepal, iOS app Nepal, hybrid app Nepal, progressive web app Nepal, responsive website Nepal, mobile friendly website Nepal, fast loading website Nepal, SEO optimized website Nepal, Google ranking Nepal, social media marketing Nepal, Facebook marketing Nepal, Instagram marketing Nepal, YouTube marketing Nepal, Google ads Nepal, content marketing Nepal, email marketing Nepal, influencer marketing Nepal, brand promotion Nepal, online marketing Nepal, digital agency Nepal, marketing company Nepal, advertising Nepal, promotion Nepal";  useEffect(() => {
    // Dynamic meta tags management for SEO
    document.title = seoTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoDescription;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoKeywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = seoKeywords;
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const updateOrCreateOgTag = (property: string, content: string) => {
      const ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOrCreateOgTag('og:title', seoTitle);
    updateOrCreateOgTag('og:description', seoDescription);
    updateOrCreateOgTag('og:url', 'https://aoneskill.com.np');
    updateOrCreateOgTag('og:type', 'website');
    updateOrCreateOgTag('og:image', 'https://aoneskill.com.np/images/og-image.jpg');
    updateOrCreateOgTag('og:site_name', 'AOne Skills International');
    updateOrCreateOgTag('og:locale', 'en_US');
    updateOrCreateOgTag('og:locale:alternate', 'ne_NP');

    // Twitter Card tags
    const updateOrCreateTwitterTag = (name: string, content: string) => {
      const twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
    updateOrCreateTwitterTag('twitter:title', seoTitle);
    updateOrCreateTwitterTag('twitter:description', seoDescription);
    updateOrCreateTwitterTag('twitter:image', 'https://aoneskill.com.np/images/twitter-card.jpg');
    updateOrCreateTwitterTag('twitter:site', '@aoneskillnepal');
    updateOrCreateTwitterTag('twitter:creator', '@aoneskillnepal');

    // Additional SEO meta tags
    updateOrCreateOgTag('business:contact_data:street_address', 'Putalisadak, New Baneshwor');
    updateOrCreateOgTag('business:contact_data:locality', 'Kathmandu');
    updateOrCreateOgTag('business:contact_data:region', 'Bagmati Province');
    updateOrCreateOgTag('business:contact_data:postal_code', '44600');
    updateOrCreateOgTag('business:contact_data:country_name', 'Nepal');

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://aoneskill.com.np');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://aoneskill.com.np';
      document.head.appendChild(link);
    }

    // Hreflang tags for language/region targeting
    const addHreflang = (hreflang: string, href: string) => {
      const existing = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    addHreflang('en', 'https://aoneskill.com.np');
    addHreflang('ne', 'https://aoneskill.com.np/ne');
    addHreflang('x-default', 'https://aoneskill.com.np');

  }, [discountState.isActive, discountState.discount, seoTitle, seoDescription, seoKeywords]);

  useEffect(() => {
    // Show spinner after 3 seconds if no discount is active
    const timer = setTimeout(() => {
      if (!discountState.isActive) {
        setShowSpinner(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [discountState.isActive]);

  return (
    <>
      {/* Comprehensive JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd(discountState)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebpageJsonLd(discountState)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd()) }}
      />

      {/* Discount Spinner */}
      {showSpinner && <DiscountSpinner onDiscountApplied={() => setShowSpinner(false)} />}
      
      {/* Floating Discount Widget */}
      <FloatingDiscountWidget />

      {/* Enhanced Discount Banner - Show when discount is active */}
      {discountState.isActive && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white py-4 px-4 text-center relative z-40 shadow-lg"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {/* Main Discount Info */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <span className="font-bold text-xl">🎉 {discountState.discount}% OFF ACTIVE!</span>
                  <div className="text-green-100 text-sm">
                    Save thousands on all our services
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">
                  {getRemainingTime()?.hours}h {getRemainingTime()?.minutes}m remaining
                </span>
              </div>

              {/* Sample Savings */}
              <div className="text-sm bg-white/20 rounded-full px-4 py-2">
                <span className="font-medium">
                  Save up to NPR 67,500 on a NPR 450,000 project! 💰
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Professional Design */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center overflow-hidden pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rotate-45"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-blue-300 rotate-12"></div>
            <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-blue-500 -rotate-12"></div>
          </div>
          
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 opacity-15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Nepal&apos;s Leading IT Solutions Provider
              </motion.div>

              {/* Company Logo */}
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Image 
                  src="/logo.png" 
                  alt="A.One Skills International Logo" 
                  width={64}
                  height={64}
                  className="rounded-xl shadow-lg bg-white/10 p-2"
                />
                <div>
                  <h2 className="text-xl font-bold text-white">A.One Skills International</h2>
                  <p className="text-blue-300 text-sm">Tech Solutions Pvt Ltd</p>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Nepal #1 IT Company
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                  सबैभन्दा सस्तो र राम्रो
                </span>
                <span className="block text-2xl md:text-3xl mt-2 text-blue-200">
                  Complete Digital Solutions
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                तपाईंको नजिकैको सबैभन्दा राम्रो Website Company! सस्तो Website, Mobile App, Software बनाउने। Professional quality, affordable price, expert Nepali team। Nepal भरमा सेवा - जहाँ भए पनि पुग्छौं।
              </motion.p>

              {/* Key Value Points */}
              <motion.div
                className="flex flex-wrap gap-6 text-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  "नेपालमा बनेको - Made in Nepal",
                  "सबैभन्दा सस्तो - Cheapest Price",  
                  "नेपाली भाषामा सेवा - Nepali Support",
                  "24/7 सहयोग - Round Clock Support"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center text-blue-200">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">🚀 Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <a
                  href={`https://wa.me/9779842747572?text=${encodeURIComponent('Hi! I want to know about your IT services and pricing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  💬 WhatsApp Now
                </a>
                
                {/* Spin for Discount Button */}
                {!discountState.isActive && (
                  <button
                    onClick={() => setShowSpinner(true)}
                    className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                    </svg>
                    🎰 Spin for Discount!
                  </button>
                )}
                
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-10 py-5 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  📋 View Our Work
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative lg:h-[600px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/logo-land.png" 
                  alt="A.One Skills Professional Services" 
                  width={500}
                  height={206}
                  className="opacity-20 rounded-2xl"
                />
              </div>

              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full z-10"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-slate-400">Professional Solutions</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Projects Completed", value: "150+" },
                      { label: "Happy Clients", value: "98%" },
                      { label: "Years in Nepal", value: "5+" },
                      { label: "Local Developers", value: "12+" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-blue-300">{stat.value}</div>
                        <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="text-sm text-slate-300">Technologies We Master</div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Laravel", "WordPress", "Flutter", "PHP", "MySQL"].map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-400/30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            className="mt-20 pt-12 pb-20 border-t border-slate-700/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-4">
              {[
                { number: "150+", label: "Projects Delivered" },
                { number: "45+", label: "Nepali Businesses" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "Local", label: "Support Team" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-300">{item.number}</div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section - Professional Design */}
      <motion.section
        className="relative pt-16 pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Why Industry Leaders Choose Us
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Built for Nepal's
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We understand Nepal's unique business landscape and create digital solutions that work for our local market while meeting international standards.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-5 rounded-2xl shadow-lg">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {/* Nepal Flag Colors Accent */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>
                ),
                title: "Nepal-Focused Solutions",
                desc: "We understand local business needs, payment systems, and market dynamics. Every solution is tailored for the Nepali market.",
                metrics: "Local Expertise",
                highlight: "Made for Nepal"
              },
              {
                icon: (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                ),
                title: "Competitive Pricing",
                desc: "Premium quality at fair market prices. Professional solutions that deliver real value for growing Nepali businesses.",
                metrics: "Best Value",
                highlight: "Quality Focused"
              },
              {
                icon: (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-2xl">
                      <Image 
                        src="/window.svg" 
                        alt="Local Support" 
                        width={32}
                        height={32}
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                ),
                title: "Local Support Team",
                desc: "Get support in Nepali, Hindi, and English. Our team understands your language and your business culture.",
                metrics: "24/7 Available",
                highlight: "Multilingual"
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + idx * 0.2 }}
              >
                <div className="relative bg-white border border-slate-200 rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:border-blue-300">
                  {/* Icon */}
                  <motion.div
                    className="pb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">Performance</span>
                        <span className="text-sm font-semibold text-blue-600">{feature.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <motion.div
            className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center pb-12">
              <h3 className="text-3xl font-bold text-white pb-4">Our Proven Process</h3>
              <p className="text-slate-300 text-lg">From concept to launch, we follow a systematic approach that ensures success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Deep dive into your business goals and requirements" },
                { step: "02", title: "Strategy", desc: "Create a comprehensive roadmap and technical architecture" },
                { step: "03", title: "Development", desc: "Agile development with regular check-ins and updates" },
                { step: "04", title: "Launch & Support", desc: "Smooth deployment with ongoing maintenance and optimization" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                >
                  <div className="relative pb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-40"></div>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-white pb-3">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our IT Services Section - Professional Design */}
      <motion.section
        className="relative mt-20 pt-24 pb-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)] opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.05),transparent_50%)] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Complete Digital Solutions Portfolio
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Digital Solutions for
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                Modern Nepal
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering Nepali businesses with affordable, high-quality digital solutions. From small startups to established enterprises across Nepal.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                ),
                title: "Business Websites",
                description: "Professional websites for Nepali businesses. SEO-optimized, mobile-friendly, and built to attract customers. Perfect for restaurants, shops, services.",
                duration: "1-4 weeks",
                features: ["Nepali/English Content", "Local SEO", "Mobile Optimized", "Google My Business"],
                price: "NPR 35,000 - 85,000",
                minPrice: 35000,
                maxPrice: 85000,
                gradient: "from-blue-500 to-blue-600",
                learnMoreUrl: "/services/website-development"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                title: "E-commerce Solutions",
                description: "Complete online stores with local payment integration (eSewa, Khalti, IME Pay). Inventory management, order tracking, and customer support.",
                duration: "2-6 weeks",
                features: ["Local Payment Gateway", "Inventory System", "Order Management", "Customer Dashboard"],
                price: "NPR 75,000 - 180,000",
                minPrice: 75000,
                maxPrice: 180000,
                gradient: "from-purple-500 to-purple-600",
                learnMoreUrl: "/services/ecommerce-solutions"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Apps",
                description: "Android and iOS apps for your business. Food delivery, ride-sharing, marketplace apps with features tailored for Nepali market.",
                duration: "3-8 weeks",
                features: ["Android & iOS", "Nepal-specific Features", "GPS Integration", "Push Notifications"],
                price: "NPR 120,000 - 350,000",
                minPrice: 120000,
                maxPrice: 350000,
                gradient: "from-emerald-500 to-emerald-600",
                learnMoreUrl: "/services/mobile-app-development"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                ),
                title: "Digital Marketing",
                description: "Facebook ads, Google ads, and social media marketing specifically for Nepali businesses. Increase your online presence and sales.",
                duration: "Ongoing",
                features: ["Facebook Marketing", "Google Ads", "Social Media", "Content Creation"],
                price: "NPR 18,000 - 65,000/month",
                minPrice: 18000,
                maxPrice: 65000,
                gradient: "from-rose-500 to-rose-600",
                learnMoreUrl: "/services/digital-marketing"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "IT Training & Support",
                description: "Learn web development, digital marketing, and IT skills. Training programs for individuals and businesses. Available in Nepali language.",
                duration: "1-3 months",
                features: ["Nepali Language", "Hands-on Training", "Certification", "Job Support"],
                price: "NPR 12,000 - 45,000",
                minPrice: 12000,
                maxPrice: 45000,
                gradient: "from-orange-500 to-orange-600",
                learnMoreUrl: "/products"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Software Solutions",
                description: "Custom software for schools, hospitals, accounting, inventory management. Built specifically for Nepali businesses and institutions.",
                duration: "2-12 weeks",
                features: ["Custom Development", "Local Database", "Multi-language", "Cloud or Local"],
                price: "NPR 60,000 - 450,000",
                minPrice: 60000,
                maxPrice: 450000,
                gradient: "from-violet-500 to-violet-600",
                learnMoreUrl: "/services/software-solutions"
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              >
                <div className="relative bg-white border border-slate-200 rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:border-blue-300 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white pb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-medium rounded-full opacity-90`}>
                        {service.duration}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Pricing and CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-sm text-slate-500">Starting from</span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                            {service.price}
                          </div>
                          {discountState.isActive && (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                              -{discountState.discount}%
                            </span>
                          )}
                        </div>
                        {discountState.isActive && (
                          <div className="text-sm text-green-600 font-medium mt-1">
                            Save {discountState.discount}% on all packages!
                          </div>
                        )}
                      </div>
                      <Link
                        href={service.learnMoreUrl}
                        className="group/btn inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Service Highlight */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold pb-6">Ready to Grow Your Nepali Business?</h3>
                <p className="text-blue-100 text-lg pb-8 leading-relaxed">
                  From small local businesses to large enterprises, we help Nepali companies succeed online. Get affordable, professional digital solutions that work for the local market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Start Your Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-200">Free Consultation</span>
                      <span className="text-green-300 font-medium">✓ Available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-200">Nepali Support</span>
                      <span className="text-green-300 font-medium">✓ Available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-200">Local Payment</span>
                      <span className="text-white font-medium">eSewa, Bank</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-200">Satisfaction Guarantee</span>
                      <span className="text-green-300 font-medium">✓ 100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="mt-20 pt-24 pb-24 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 pb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
            {[
              {
                name: "John S.",
                company: "TechWave Solutions",
                review: "AOne Skills International delivered a stunning website for our business. The process was smooth, and the results exceeded our expectations!",
              },
              {
                name: "Priya K.",
                company: "StartupHub",
                review: "Their team built our custom app from scratch. Great communication, transparent pricing, and top-notch support throughout.",
              },
              {
                name: "Michael R.",
                company: "Global Retail Group",
                review: "We loved the redesign! Our new site is fast, modern, and our customers love the new look. Highly recommended!",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
              >
                <div className="pb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg pb-4 text-center">"{testimonial.review}"</p>
                <div className="text-blue-600 font-semibold">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold pb-2 text-blue-700">Give Us Your Review</h3>
            <p className="text-gray-600 pb-6">We value your feedback! Share your experience and help us improve.</p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Submit Your Review
            </Link>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section for Better SEO */}
      <motion.section
        className="mt-20 pt-24 pb-24 bg-slate-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center pb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 pb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Get answers to common questions about our IT services in Nepal
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Nepal मा सबैभन्दा सस्तो website कहाँ बनाउने? | Where to get cheapest website in Nepal?",
                answer: "A.One Skills Tech Solutions मा Nepal को सबैभन्दा सस्तो दरमा professional website बनाइन्छ। हामी NPR 15,000 देखि शुरु गरेर quality website बनाउँछौं। Business website, company website, personal website, portfolio, blog - सबै प्रकारको website हामीले बनाउँछौं। Free domain, hosting, SSL certificate पनि दिइन्छ।"
              },
              {
                question: "Mobile app बनाउन कति खर्च लाग्छ Nepal मा? | Mobile app development cost in Nepal?",
                answer: "Mobile app को cost NPR 80,000 देखि NPR 2,50,000 सम्म हुन्छ features अनुसार। Simple business app NPR 80,000, e-commerce app NPR 1,50,000, complex app NPR 2,50,000+। Android र iOS दुवैमा बनाइन्छ। Free consultation, maintenance, र app store मा publish गर्ने सेवा पनि दिइन्छ।"
              },
              {
                question: "Digital marketing SEO service Nepal मा कहाँ गर्ने राम्रो?",
                answer: "हामी Nepal को best digital marketing र SEO service provide गर्छौं। Google मा website rank गराउने, Facebook Instagram marketing, YouTube promotion, Google Ads campaign - सबै सेवा उपलब्ध छ। NPR 25,000 देखि package शुरु हुन्छ। Result guarantee छ, 6 महिनामा Google को पहिलो page मा ल्याइदिन्छ।"
              },
              {
                question: "E-commerce online shop website Nepal मा कसरी बनाउने?",
                answer: "हामी complete e-commerce solution provide गर्छौं NPR 45,000 देखि। Khalti, eSewa, ConnectIPS payment gateway integration, inventory management, order tracking, SMS notification सबै feature सहित। Daraz जस्तै professional online shop बनाइदिन्छ। Free training र 1 वर्ष support पनि दिइन्छ।"
              },
              {
                question: "Programming सिकाउने best institute Nepal मा कुन हो?",
                answer: "A.One Skills Tech Solutions मा practical oriented programming course सिकाइन्छ। Web development (HTML, CSS, JavaScript, PHP, Laravel), Mobile app (Flutter, React Native), Digital marketing - सबै course उपलब्ध छ। Job placement guarantee छ। NPR 35,000 देखि course fees, 6 महीना duration, weekend class पनि available छ।"
              },
              {
                question: "Nepal मा software company job कसरी पाउने?",
                answer: "हामी job placement guarantee सहित training provide गर्छौं। Course complete गरेपछि हाम्रै company वा partner companies मा job दिलाइदिन्छ। Fresher देखि experienced सबैका लागि opportunity छ। Remote work, freelancing guidance पनि दिइन्छ। Salary NPR 25,000 देखि शुरु हुन्छ।"
              },
              {
                question: "Freelancing कसरी सुरु गर्ने Nepal बाट? | How to start freelancing from Nepal?",
                answer: "हामी complete freelancing training provide गर्छौं। Upwork, Fiverr, Freelancer.com मा profile setup, proposal writing, client communication, project delivery - सबै सिकाइन्छ। 3 महिनामा $500+ monthly income guarantee छ। Web development, graphic design, digital marketing सबै field मा training दिइन्छ।"
              },
              {
                question: "School college management system Nepal मा कहाँ बनाउने?",
                answer: "हामी complete school/college management system बनाउँछौं। Student admission, fees collection, attendance, exam marks, library management, transport - सबै module सहित। NPR 1,50,000 देखि शुरु हुन्छ। Cloud based system, mobile app, parent portal सबै feature included छ। Free demo उपलब्ध छ।"
              },
              {
                question: "Hospital clinic software Nepal मा best कुन हो?",
                answer: "हामी hospital management system बनाउँछौं जसमा patient registration, appointment booking, billing, pharmacy, lab report, doctor schedule सबै feature छ। NPR 2,00,000 देखि complete solution। Government approved, data security guarantee छ। Free installation र training दिइन्छ।"
              },
              {
                question: "Restaurant POS billing system Nepal मा कति पर्छ?",
                answer: "Restaurant POS system NPR 85,000 देखि शुरु हुन्छ। Menu management, order taking, billing, inventory, kitchen display, customer database सबै feature सहित। Touch screen, thermal printer, cash drawer included छ। Cloud based system, multiple branch support, daily sales report - सबै available छ।"
              },
              {
                question: "Domain hosting SSL कहाँ किन्ने Nepal मा सस्तो?",
                answer: "हामी domain (.com.np, .com, .org), hosting, SSL certificate सबै provide गर्छौं सस्तो दरमा। .com.np NPR 1,500, .com NPR 1,800, hosting NPR 6,000/year, SSL free। 99.9% uptime guarantee, 24/7 support, free backup service दिइन्छ।"
              },
              {
                question: "Graphic design logo कहाँ बनाउने Nepal मा professional?",
                answer: "हामी professional graphic design service provide गर्छौं। Logo design NPR 5,000, business card NPR 2,000, brochure NPR 8,000, banner NPR 3,000। Complete branding package NPR 25,000 मा मिल्छ। Unlimited revision, source file, print ready format सबै दिइन्छ।"
              },
              {
                question: "Best website company near me Nepal मा कुन हो? | Which is the best website company near me?",
                answer: "A.One Skills Tech Solutions - Nepal को सबैभन्दा नजिकको र राम्रो website company। हाम्रो team Damak मा base भएर Nepal भरमा service गर्छ। तपाईं जहाँ भए पनि - Kathmandu, Pokhara, Chitwan, Butwal, Dharan, Biratnagar - हामी तपाईंको नजिकै छौं। Online meeting, phone support, on-site visit सबै available छ। Call गर्नुहोस् +977-9842747572।"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 text-blue-600 group-open:rotate-180 transition-transform duration-300">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center pt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-slate-600 pb-6">
              Still have questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Local Business Information Section for Local SEO */}
      <motion.section
        className="mt-20 pt-24 pb-24 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Near Me Section - Targeting "best website company near me" searches */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center pb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 pb-6">
                Best Website Company Near Me Nepal 🗺️
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto pb-8">
                तपाईंको नजिकैको सबैभन्दा राम्रो website company खोज्दै हुनुहुन्छ? A.One Skills Tech Solutions - Nepal भरमा service।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-slate-900 mb-2">Your Location</h3>
                <p className="text-sm text-slate-600">We serve your area with professional website development</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-slate-900 mb-2">Fast Service</h3>
                <p className="text-sm text-slate-600">Quick delivery and instant support in your local language</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-slate-900 mb-2">Best Price</h3>
                <p className="text-sm text-slate-600">Most affordable website development in your area</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-slate-900 mb-2">Top Quality</h3>
                <p className="text-sm text-slate-600">Award-winning designs and professional development</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                "Website Company Near Me" - हामी कहाँ कहाँ छौं?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                {[
                  "Kathmandu Valley", "Pokhara Area", "Chitwan District", 
                  "Butwal Region", "Dharan City", "Biratnagar Zone",
                  "Damak Area", "Nepalgunj Region", "Janakpur Zone",
                  "Hetauda District", "Bharatpur City", "Bhairahawa Area"
                ].map((location, index) => (
                  <div key={location} className="flex items-center bg-blue-50 rounded-lg px-3 py-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-slate-700 font-medium">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                Why Choose Us as Your Local Website Company?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">🌟</div>
                  <h5 className="font-bold text-green-800 mb-2">Best in Your Area</h5>
                  <p className="text-green-700">Nepal's #1 rated website company with 150+ satisfied local clients</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">🗣️</div>
                  <h5 className="font-bold text-blue-800 mb-2">Local Language Support</h5>
                  <p className="text-blue-700">Complete service in Nepali, Hindi, and English - समझेर बनाउँछौं</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">💼</div>
                  <h5 className="font-bold text-purple-800 mb-2">Local Business Expert</h5>
                  <p className="text-purple-700">We understand Nepal market and local business needs perfectly</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              नेपालभर IT सेवा - Serving All Major Cities in Nepal
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Damak बाट शुरु गरेर Nepal का सबै ठूला शहरहरूमा professional IT services। सस्तो दर, राम्रो quality, Nepali team।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                city: "Kathmandu काठमाडौं",
                region: "Bagmati Province",
                description: "राजधानीमा complete IT services - website, mobile app, software development, digital marketing। सबैभन्दा experienced team।",
                services: ["Business Website NPR 25,000", "E-commerce NPR 75,000", "Mobile App NPR 120,000", "SEO NPR 35,000"],
                icon: "🏢"
              },
              {
                city: "Pokhara पोखरा", 
                region: "Gandaki Province",
                description: "पर्यटन शहरमा hotel, restaurant, travel agency का लागि special IT solutions। Tourism focused websites र apps।",
                services: ["Hotel Website NPR 45,000", "Travel Portal NPR 85,000", "Booking System NPR 150,000", "Tourism App NPR 200,000"],
                icon: "🏔️"
              },
              {
                city: "Chitwan चितवन",
                region: "Bagmati Province", 
                description: "कृषि र पर्यटन business का लागि modern digital solutions। Agriculture focused software र tourism websites।",
                services: ["Agriculture Software NPR 180,000", "Tourism Website NPR 65,000", "Inventory System NPR 120,000", "Mobile App NPR 150,000"],
                icon: "🌾"
              },
              {
                city: "Butwal बुटवल",
                region: "Lumbini Province",
                description: "पश्चिम नेपालको व्यापारिक केन्द्रमा comprehensive IT services। Business automation र e-commerce solutions।",
                services: ["Business Website NPR 35,000", "E-commerce NPR 95,000", "Digital Marketing NPR 45,000", "Software Training NPR 40,000"],
                icon: "🏪"
              },
              {  
                city: "Biratnagar विराटनगर",
                region: "Koshi Province",
                description: "पूर्वी नेपालको औद्योगिक केन्द्रमा enterprise software र business automation। Factory management systems।",
                services: ["Factory Software NPR 350,000", "Inventory System NPR 180,000", "Business Website NPR 40,000", "Industrial App NPR 250,000"],
                icon: "🏭"
              },
              {
                city: "Dharan धरान",
                region: "Koshi Province", 
                description: "शिक्षा र स्वास्थ्य क्षेत्रका लागि specialized IT solutions। Hospital र school management systems।",
                services: ["School Software NPR 200,000", "Hospital System NPR 300,000", "Educational App NPR 150,000", "Website NPR 30,000"],
                icon: "�"
              },
              {
                city: "Damak दमक",
                region: "Koshi Province", 
                description: "हाम्रो मुख्य कार्यालय। सबै प्रकारका IT services उपलब्ध। Direct service र support।",
                services: ["All Services Available", "Direct Support", "On-site Service", "24/7 Available"],
                icon: "🏠"
              },
              {
                city: "Nepalgunj नेपालगन्ज",
                region: "Lumbini Province", 
                description: "सुदूरपश्चिम नेपालमा business digitization। Trade र commerce focused solutions।",
                services: ["Trading Software NPR 200,000", "Business Website NPR 35,000", "Mobile App NPR 140,000", "E-commerce NPR 85,000"],
                icon: "🏛️"
              },
              {
                city: "Janakpur जनकपुर",
                region: "Madhesh Province", 
                description: "ऐतिहासिक शहरमा tourism र religious business का लागि special websites र apps।",
                services: ["Tourism Website NPR 55,000", "Religious App NPR 120,000", "Business Website NPR 30,000", "E-commerce NPR 75,000"],
                icon: "🕉️"
              }
            ].map((location, index) => (
              <motion.div
                key={location.city}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {location.city}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {location.region}
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {location.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    Get Services in {location.city}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              नेपालभर IT सेवा - All 77 Districts Coverage
            </h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Damak देखि Kathmandu सम्म, Nepal का सबै 7 प्रदेश र 77 जिल्लामा professional IT services। Remote support, on-site visits, local partnerships - जहाँ भए पनि quality service।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact for Your Location
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with Animation */}
      {/* Comprehensive SEO Keywords Section */}
      <motion.section
        className="mt-20 pt-20 pb-20 bg-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Complete IT Solutions Nepal - सम्पूर्ण IT सेवा
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              A.One Skills Tech Solutions - Nepal को पहिलो पसन्द IT company। सबैभन्दा सस्तो, राम्रो, र भरपर्दो सेवा।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">🌐 Website Development Nepal</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Business Website Design Nepal</li>
                <li>• Company Website Development</li>
                <li>• Professional Website Nepal</li>
                <li>• Corporate Website Design</li>
                <li>• Responsive Website Nepal</li>
                <li>• E-commerce Website Nepal</li>
                <li>• WordPress Website Nepal</li>
                <li>• Custom Website Development</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">📱 Mobile App Development</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Android App Development Nepal</li>
                <li>• iOS App Development Nepal</li>
                <li>• Business Mobile App Nepal</li>
                <li>• E-commerce Mobile App</li>
                <li>• Delivery App Development</li>
                <li>• Service Booking App Nepal</li>
                <li>• Educational App Nepal</li>
                <li>• Healthcare App Development</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">💻 Software Development</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Custom Software Nepal</li>
                <li>• Business Management System</li>
                <li>• School Management Software</li>
                <li>• Hospital Management System</li>
                <li>• Restaurant POS System</li>
                <li>• Inventory Management Nepal</li>
                <li>• Accounting Software Nepal</li>
                <li>• CRM Software Development</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">🎯 Digital Marketing Nepal</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• SEO Services Nepal</li>
                <li>• Google Ads Management</li>
                <li>• Facebook Marketing Nepal</li>
                <li>• Social Media Marketing</li>
                <li>• Content Marketing Nepal</li>
                <li>• Email Marketing Services</li>
                <li>• YouTube Marketing Nepal</li>
                <li>• Brand Promotion Nepal</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">🎓 IT Training Nepal</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Web Development Course</li>
                <li>• Programming Training Nepal</li>
                <li>• Digital Marketing Course</li>
                <li>• Mobile App Development</li>
                <li>• Graphic Design Training</li>
                <li>• Freelancing Course Nepal</li>
                <li>• Job Guarantee Training</li>
                <li>• Online IT Course Nepal</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">🏢 Business Services</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Domain Registration Nepal</li>
                <li>• Web Hosting Services</li>
                <li>• SSL Certificate Nepal</li>
                <li>• Email Hosting Nepal</li>
                <li>• Cloud Services Nepal</li>
                <li>• IT Consulting Nepal</li>
                <li>• Tech Support Services</li>
                <li>• Server Management</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500 leading-relaxed max-w-6xl mx-auto">
              <strong>Nepal IT Keywords:</strong> best website company near me Nepal, website company near me, IT company near me Nepal, web development near me, mobile app development near me, सस्तो website Nepal, mobile app Nepal, software development Nepal, digital marketing Nepal, SEO Nepal, web design Nepal, app development Nepal, IT company Nepal, website company Nepal, cheap website Nepal, best IT Nepal, professional website Nepal, business app Nepal, e-commerce Nepal, online store Nepal, management system Nepal, POS system Nepal, school software Nepal, hospital software Nepal, restaurant software Nepal, inventory system Nepal, accounting software Nepal, freelancing Nepal, IT training Nepal, programming course Nepal, job guarantee Nepal, domain hosting Nepal, web hosting Nepal, SSL Nepal, payment gateway Nepal, khalti integration, esewa integration, Nepal software company, Nepal IT services, website company Kathmandu, IT company Pokhara, web development Chitwan, mobile app Butwal, software company Dharan, website company Biratnagar, IT services Damak, web design near me Nepal, app development near me Nepal, startup Nepal, business Nepal, corporate Nepal, SME Nepal, government project Nepal, NGO website Nepal, local website company Nepal, nearby IT services Nepal
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-20 pt-20 pb-20 bg-blue-600 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ready to Scale Your Business with Technology?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Partner with AOne Skills International for premium IT services, custom software solutions, and strategic digital transformation opportunities
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:scale-105 active:scale-95 duration-200"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:scale-105 active:scale-95 duration-200"
            >
              Explore Partnership Options
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

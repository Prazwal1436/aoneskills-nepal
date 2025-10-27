"use client";
import type { Metadata } from "next";
import Link from "next/link";
import PriceDisplay from "@/components/PriceDisplay";
import { useDiscount } from "@/hooks/useDiscount";
import FloatingDiscountWidget from "@/components/FloatingDiscountWidget";
import { useEffect } from "react";

// SEO Metadata for Services Page
// Note: Since this is a client component, metadata should be handled in layout or parent component
// Recommended metadata for layout:
// title: "IT Services & Software Solutions Nepal | A.One Skills International - Web Development, Mobile Apps, Digital Marketing"
// description: "Professional IT services in Nepal - Website development from NPR 35,000, Mobile apps, E-commerce solutions, Digital marketing, Custom software. Trusted by 100+ businesses. Free consultation!"
// keywords: "IT services Nepal, web development Nepal, mobile app development Nepal, digital marketing Nepal, software development Nepal, e-commerce Nepal, website design Nepal, SEO Nepal"

export default function Services() {
  const { discountState } = useDiscount();

  // SEO Optimization: Set page title and meta tags dynamically
  useEffect(() => {
    // Set dynamic title based on discount state
    const baseTitle = "IT Services & Software Solutions Nepal | A.One Skills International";
    const discountTitle = discountState.isActive 
      ? `${discountState.discount}% OFF IT Services Nepal | A.One Skills International`
      : baseTitle;
    
    document.title = discountTitle;

    // Set meta description
    const metaDescription = discountState.isActive
      ? `Save ${discountState.discount}% on professional IT services in Nepal! Web development from NPR 35,000, mobile apps, digital marketing, custom software. Trusted by 100+ businesses.`
      : "Professional IT services in Nepal - Website development from NPR 35,000, Mobile apps, E-commerce solutions, Digital marketing, Custom software. Trusted by 100+ businesses. Free consultation!";
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.getElementsByTagName('head')[0].appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescription);

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.getElementsByTagName('head')[0].appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'IT services Nepal, web development Nepal, mobile app development Nepal, digital marketing Nepal, software development Nepal, e-commerce Nepal, website design Nepal, SEO Nepal, custom software Nepal, digital solutions Nepal');

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: discountTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://aoneskillsinternational.com/services' },
      { property: 'og:image', content: 'https://aoneskillsinternational.com/og-services.png' },
      { property: 'og:site_name', content: 'A.One Skills International' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.getElementsByTagName('head')[0].appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: discountTitle },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: 'https://aoneskillsinternational.com/twitter-services.jpg' }
    ];

    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        document.getElementsByTagName('head')[0].appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "A.One Skills International",
      "alternateName": "AOneSkill International Nepal",
      "url": "https://aoneskillsinternational.com",
      "logo": "https://aoneskillsinternational.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977-984-2747572",
        "contactType": "customer service",
        "areaServed": "NP",
        "availableLanguage": ["English", "Nepali"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Nepal",
        "addressRegion": "Province 1"
      },
      "sameAs": [
        "https://facebook.com/aoneskills",
        "https://linkedin.com/company/aoneskills"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services Nepal",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development Nepal",
              "description": "Professional website development services for Nepal businesses starting from NPR 35,000"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development Nepal",
              "description": "Android and iOS mobile app development for Nepal market starting from NPR 120,000"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Digital Marketing Nepal",
              "description": "Social media marketing, SEO, and Google Ads services for Nepal businesses starting from NPR 18,000/month"
            }
          }
        ]
      }
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.getElementsByTagName('head')[0].appendChild(script);

  }, [discountState]);
  const pricingPackages = [
    {
      category: "Website Development",
      packages: [
        {
          name: "Basic Website",
          price: "NPR 35,000",
          duration: "2-3 weeks",
          features: [
            "Up to 5 pages",
            "Mobile responsive design",
            "Basic SEO optimization",
            "Contact form integration",
            "Social media integration",
            "3 months free support",
          ],
          popular: false,
        },
        {
          name: "Business Website",
          price: "NPR 65,000",
          duration: "3-4 weeks",
          features: [
            "Up to 15 pages",
            "Professional UI/UX design",
            "Advanced SEO optimization",
            "Content management system",
            "Google Analytics setup",
            "6 months free support",
            "Free SSL certificate",
          ],
          popular: true,
        },
        {
          name: "Premium Website",
          price: "NPR 85,000",
          duration: "4-6 weeks",
          features: [
            "Unlimited pages",
            "Custom design & animations",
            "Advanced SEO strategy",
            "Multi-language support",
            "Performance optimization",
            "12 months premium support",
            "Free domain & hosting setup",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "E-commerce Development",
      packages: [
        {
          name: "Starter Store",
          price: "NPR 75,000",
          duration: "3-4 weeks",
          features: [
            "Up to 50 products",
            "eSewa payment integration",
            "Basic product management",
            "Order tracking system",
            "Customer accounts",
            "3 months support",
          ],
          popular: false,
        },
        {
          name: "Professional Store",
          price: "NPR 125,000",
          duration: "4-6 weeks",
          features: [
            "Unlimited products",
            "eSewa, Khalti, IME Pay integration",
            "Advanced product management",
            "Inventory management",
            "Customer reviews & ratings",
            "Analytics dashboard",
            "6 months support",
          ],
          popular: true,
        },
        {
          name: "Enterprise Store",
          price: "NPR 180,000",
          duration: "6-8 weeks",
          features: [
            "Multi-vendor marketplace",
            "All Nepal payment gateways",
            "Advanced reporting",
            "Wholesale pricing",
            "Mobile app included",
            "SEO optimization",
            "12 months premium support",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "Mobile App Development",
      packages: [
        {
          name: "Single Platform",
          price: "NPR 120,000",
          duration: "6-8 weeks",
          features: [
            "Android or iOS",
            "Modern UI/UX design",
            "Push notifications",
            "App store submission",
            "Basic features",
            "3 months support",
          ],
          popular: false,
        },
        {
          name: "Cross-Platform",
          price: "NPR 200,000",
          duration: "8-10 weeks",
          features: [
            "Android & iOS apps",
            "Advanced UI/UX design",
            "Backend integration",
            "Push notifications",
            "Analytics integration",
            "Both store submissions",
            "6 months support",
          ],
          popular: true,
        },
        {
          name: "Premium App",
          price: "NPR 350,000",
          duration: "10-14 weeks",
          features: [
            "Native Android & iOS",
            "Complex features",
            "Offline functionality",
            "Advanced security",
            "Custom backend",
            "Admin panel included",
            "12 months premium support",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "Digital Marketing",
      packages: [
        {
          name: "Starter Package",
          price: "NPR 18,000/month",
          duration: "3 months minimum",
          features: [
            "Facebook page management",
            "2 posts per week",
            "Basic Facebook ads",
            "Monthly analytics report",
            "WhatsApp support",
          ],
          popular: false,
        },
        {
          name: "Growth Package",
          price: "NPR 35,000/month",
          duration: "6 months minimum",
          features: [
            "Facebook + Instagram marketing",
            "5 posts per week",
            "Google Ads management",
            "Content creation",
            "SEO optimization",
            "Bi-weekly reports",
            "Phone support",
          ],
          popular: true,
        },
        {
          name: "Premium Package",
          price: "NPR 65,000/month",
          duration: "12 months minimum",
          features: [
            "All social media platforms",
            "Daily content creation",
            "Advanced ad campaigns",
            "Video content creation",
            "Weekly strategy calls",
            "Dedicated account manager",
            "24/7 support",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "Software Solutions",
      packages: [
        {
          name: "Basic System",
          price: "NPR 80,000",
          duration: "4-6 weeks",
          features: [
            "Up to 5 modules",
            "Basic user interface",
            "Database setup",
            "User manual",
            "3 months support",
            "Source code included",
          ],
          popular: false,
        },
        {
          name: "Professional System",
          price: "NPR 150,000",
          duration: "6-8 weeks",
          features: [
            "Up to 10 modules",
            "Modern user interface",
            "Advanced database design",
            "User roles & permissions",
            "Training included",
            "6 months support",
            "Mobile responsive",
            "Source code included",
          ],
          popular: true,
        },
        {
          name: "Enterprise System",
          price: "NPR 300,000",
          duration: "8-12 weeks",
          features: [
            "Unlimited modules",
            "Custom UI/UX design",
            "Complex integrations",
            "Advanced analytics",
            "Multi-user system",
            "Comprehensive training",
            "12 months support",
            "Mobile app included",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "IT Training",
      packages: [
        {
          name: "Individual Course",
          price: "NPR 15,000 - 35,000",
          duration: "2-6 months",
          features: [
            "Choose any single course",
            "Expert instructors",
            "Hands-on projects",
            "Certificate of completion",
            "Job placement support",
            "Lifetime course access",
          ],
          popular: false,
        },
        {
          name: "Skill Bundle",
          price: "NPR 45,000",
          duration: "6-9 months",
          features: [
            "3 related courses",
            "Integrated curriculum",
            "Portfolio development",
            "Industry certifications",
            "Internship opportunities",
            "Career counseling",
            "Alumni network access",
          ],
          popular: true,
        },
        {
          name: "Complete Program",
          price: "NPR 75,000",
          duration: "12 months",
          features: [
            "Full-stack development",
            "All major technologies",
            "Real-world projects",
            "Industry mentorship",
            "Guaranteed job placement",
            "Startup incubation support",
            "Lifetime career support",
          ],
          popular: false,
        },
      ],
    },
  ];

  const services = [
    {
      title: "Website Development",
      description:
        "Professional websites for Nepal businesses with mobile-responsive design, SEO optimization, and local payment integration.",
      features: [
        "Mobile-responsive design",
        "SEO optimized for Nepal market",
        "Contact forms & social integration",
        "Fast loading & secure hosting",
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online stores with eSewa, Khalti integration. Perfect for Nepal businesses wanting to sell online.",
      features: [
        "eSewa, Khalti, IME Pay integration",
        "Product catalog & inventory",
        "Order management system",
        "Customer reviews & ratings",
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "Android and iOS apps for Nepal market with local features, payment integration, and Play Store submission.",
      features: [
        "Android & iOS development",
        "Local payment gateway integration",
        "Push notifications in Nepali",
        "Play Store & App Store submission",
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      description:
        "Facebook ads, Google ads, and social media marketing specifically designed for Nepal businesses and customers.",
      features: [
        "Facebook & Instagram marketing",
        "Google Ads for Nepal market",
        "Local SEO optimization",
        "Content creation in Nepali",
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0l1 16h8l1-16" />
        </svg>
      ),
    },
    {
      title: "Software Solutions",
      description:
        "Custom software for Nepal businesses including inventory management, school systems, and accounting software.",
      features: [
        "Inventory management systems",
        "School management software",
        "Accounting & billing systems",
        "Hospital management systems",
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "IT Training & Courses",
      description:
        "Learn programming, web development, digital marketing, and IT skills with expert instructors and job placement support.",
      features: [
        "Web development courses",
        "Digital marketing training",
        "Programming languages",
        "Job placement assistance",
      ],
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <FloatingDiscountWidget />
      
      {/* Breadcrumb Navigation - SEO Enhancement */}
      <nav className="bg-slate-100 py-3" itemScope itemType="https://schema.org/BreadcrumbList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-600">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-600 transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-slate-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-slate-900 font-medium" itemProp="name">IT Services Nepal</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>
      {/* Hero Section - SEO Optimized */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 text-white py-24 overflow-hidden relative" itemScope itemType="https://schema.org/Service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="name">
              Professional IT Services Nepal
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Web Development & Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8" itemProp="description">
              Leading IT services company in Nepal providing website development from NPR 35,000, mobile app development, e-commerce solutions, digital marketing, and custom software development. Trusted by 100+ businesses across Nepal with 7+ years of experience.
            </p>
            
            {/* Discount Banner */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-6 inline-block">
              {discountState.isActive ? (
                <>
                  <span className="font-semibold text-yellow-300 text-xl">🎉 Your {discountState.discount}% Discount is Active!</span>
                  <span className="block text-blue-100 text-sm mt-2">Save on all our premium services. Professional solutions at unbeatable prices with your exclusive discount.</span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-yellow-300 text-xl">🎰 Spin for Discount - Save Up to 15%!</span>
                  <span className="block text-blue-100 text-sm mt-2">Unlock exclusive savings on our professional IT services. Click the floating spinner to get your discount!</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid - SEO Optimized */}
      <section className="py-20 bg-slate-50" itemScope itemType="https://schema.org/Service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete IT Services Portfolio Nepal
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Full-service digital agency offering website development, mobile apps, e-commerce, digital marketing, custom software, and IT training across Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors" itemProp="name">
                  {service.title} Nepal
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed" itemProp="description">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-slate-700"
                    >
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                    itemProp="url"
                  >
                    Get Started - {service.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - SEO Enhanced */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose A.One Skills International Nepal?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Leading IT company in Nepal with 100+ satisfied clients, 7+ years experience, and proven track record in delivering quality digital solutions across Kathmandu, Pokhara, and major cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Nepal-Friendly Pricing</h3>
              <p className="text-slate-300 leading-relaxed">Competitive rates designed for Nepal market with flexible payment options and transparent pricing</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">Local Market Expertise</h3>
              <p className="text-slate-300 leading-relaxed">Deep understanding of Nepal business culture, market needs, and customer preferences</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Premium Quality</h3>
              <p className="text-slate-300 leading-relaxed">International standard quality with meticulous attention to detail and client satisfaction</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">Reliable Delivery</h3>
              <p className="text-slate-300 leading-relaxed">Consistent on-time project delivery with comprehensive support and long-term maintenance</p>
            </div>
          </div>

          {/* Stats Section - Schema Enhanced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-700" itemScope itemType="https://schema.org/Organization">
            <div className="text-center" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <div className="text-4xl font-bold text-blue-400 mb-2" itemProp="ratingCount">100+</div>
              <div className="text-slate-300">Satisfied Clients Nepal</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2" itemProp="foundingDate" content="2018">7+</div>
              <div className="text-slate-300">Years Experience Nepal IT</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-slate-300">Successful Projects Nepal</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-slate-300">Customer Support Nepal</div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Section - SEO Optimized */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/PriceSpecification">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              IT Services Pricing Nepal - Affordable Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {discountState.isActive ? (
                <>Best IT service prices in Nepal with your <span className="font-bold text-blue-600">{discountState.discount}% discount</span> - Website development from NPR 35,000, Mobile apps from NPR 120,000, Digital marketing from NPR 18,000/month</>
              ) : (
                <>Transparent pricing for all IT services in Nepal - Website development from NPR 35,000, Mobile apps from NPR 120,000, Digital marketing from NPR 18,000/month. Get instant discount with our spinner!</>
              )}
            </p>
            
            {discountState.isActive && (
              <div className="mt-6 inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Your {discountState.discount}% discount is automatically applied to all prices below!
              </div>
            )}
          </div>

          <div className="space-y-16">
            {pricingPackages.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className={`relative bg-white border-2 rounded-2xl p-8 transition-all hover:shadow-2xl group ${
                        pkg.popular
                          ? "border-blue-500 shadow-xl scale-105 bg-gradient-to-t from-blue-50/50 to-white"
                          : "border-slate-200 hover:border-blue-200"
                      }`}
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                            ⭐ Most Popular
                          </span>
                        </div>
                      )}
                      
                      {/* Discount Badge */}
                      {discountState.isActive && (
                        <div className="absolute -top-3 right-4">
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-3 py-1 rounded-full text-xs shadow-lg animate-pulse">
                            {discountState.discount}% OFF
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors" itemProp="name">
                          {pkg.name} {category.category} Nepal
                        </h4>
                        <div className="mb-3" itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
                          <meta itemProp="priceCurrency" content="NPR" />
                          <meta itemProp="price" content={pkg.price.replace(/[^\d.]/g, "")} />
                          <PriceDisplay
                            originalPrice={Number(pkg.price.replace(/[^\d.]/g, ""))}
                            className="text-4xl font-bold"
                            showSavings={true}
                            size="xl"
                          />
                        </div>
                        <p className="text-slate-600 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full inline-block" itemProp="deliveryTime">
                          📅 {pkg.duration} delivery
                        </p>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-slate-700"
                          >
                            <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                              <svg
                                className="h-3 w-3 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/contact"
                        className={`block text-center px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-105 ${
                          pkg.popular
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200"
                        }`}
                      >
                        {pkg.popular ? "🚀 Get Started Now" : "Get Started"}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. If our standard packages don't fit your needs,
              we'll create a custom proposal tailored to your specific requirements and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Enhancement */}
      <section className="py-20 bg-slate-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions - IT Services Nepal
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about our IT services, pricing, and process in Nepal
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                What IT services do you provide in Nepal?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-slate-600 leading-relaxed" itemProp="text">
                  We provide comprehensive IT services across Nepal including website development (starting NPR 35,000), mobile app development (Android/iOS from NPR 120,000), e-commerce solutions, digital marketing (from NPR 18,000/month), custom software development, and IT training. We serve businesses in Kathmandu, Pokhara, and all major cities in Nepal.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                How much does website development cost in Nepal?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-slate-600 leading-relaxed" itemProp="text">
                  Website development in Nepal starts from NPR 35,000 for basic websites (5 pages), NPR 65,000 for business websites (15 pages), and NPR 85,000 for premium websites with unlimited pages. All packages include mobile responsiveness, SEO optimization, and free support. Prices may be reduced with our discount spinner.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                Do you provide mobile app development services in Nepal?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-slate-600 leading-relaxed" itemProp="text">
                  Yes, we develop mobile apps for both Android and iOS platforms. Single platform apps start from NPR 120,000, cross-platform apps from NPR 200,000, and premium native apps from NPR 350,000. All apps include modern UI/UX design, app store submission, and support. We specialize in apps for the Nepal market with local payment integration.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                What areas in Nepal do you serve?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-slate-600 leading-relaxed" itemProp="text">
                  We serve clients across all of Nepal including Kathmandu, Pokhara, Chitwan, Butwal, Dharan, Itahari, Birgunj, Janakpur, Nepalgunj, and other major cities. We also have special expertise in Purbanchal and Jhapa regions. Remote collaboration allows us to work with businesses anywhere in Nepal.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                How long does it take to complete an IT project in Nepal?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-slate-600 leading-relaxed" itemProp="text">
                  Project timelines vary by service: Basic websites take 2-3 weeks, business websites 3-4 weeks, mobile apps 6-14 weeks, and custom software 4-12 weeks. We maintain transparent communication throughout the process and provide regular updates. All projects include free support period after completion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                Do you provide ongoing support and maintenance?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-slate-600 leading-relaxed" itemProp="text">
                  Yes, all our services include free support periods (3-12 months depending on package). We provide 24/7 customer support, regular backups, security updates, and performance monitoring. Extended support and maintenance plans are available at competitive rates for long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Section - Local SEO */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Serving IT Needs Across Nepal</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Based in Nepal with deep local market knowledge, we provide IT services to businesses across all major cities and regions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="font-semibold text-blue-400">Kathmandu</h3>
              <p className="text-xs text-slate-300 mt-1">Capital Region</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="font-semibold text-green-400">Pokhara</h3>
              <p className="text-xs text-slate-300 mt-1">Tourism Hub</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chitwan</h3>
              <p className="text-xs text-slate-300 mt-1">Central Nepal</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="font-semibold text-orange-400">Butwal</h3>
              <p className="text-xs text-slate-300 mt-1">Industrial City</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="font-semibold text-pink-400">Dharan</h3>
              <p className="text-xs text-slate-300 mt-1">Eastern Nepal</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4">
              <h3 className="font-semibold text-yellow-400">Birgunj</h3>
              <p className="text-xs text-slate-300 mt-1">Border Trade</p>
            </div>
          </div>
          
          <div className="mt-12 bg-slate-700/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4" itemProp="name">A.One Skills International Nepal</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <h4 className="font-semibold text-blue-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  <span itemProp="addressRegion">Province 1</span>, 
                  <span itemProp="addressCountry">Nepal</span>
                </p>
              </div>
              <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <h4 className="font-semibold text-green-400 mb-2">Contact</h4>
                <p className="text-slate-300">
                  <span itemProp="telephone">+977-984-2747572</span><br/>
                  <span itemProp="email">contact@aoneskills.com.np</span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Business Hours</h4>
                <div itemProp="openingHours" content="Mo-Sa 09:00-18:00">
                  <p className="text-slate-300">Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {discountState.isActive ? (
                <>Your <span className="font-bold text-yellow-300">{discountState.discount}% discount</span> is ready! Get professional IT services designed for Nepal businesses at unbeatable prices.</>
              ) : (
                <>Get professional IT services designed for Nepal businesses. Spin our discount wheel for exclusive savings, then contact us for a free consultation!</>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Consultation
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Ready Products
              </Link>
            </div>
            <p className="text-blue-200 mt-6 text-sm">
              {discountState.isActive ? (
                <>🎉 Your {discountState.discount}% discount expires in 24 hours. Professional quality at Nepal-friendly prices!</>
              ) : (
                <>🎰 Don't miss out! Spin our discount wheel for instant savings on all our premium services!</>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

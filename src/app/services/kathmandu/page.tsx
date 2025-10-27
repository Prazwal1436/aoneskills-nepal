"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Note: Metadata moved to layout due to client component requirement
/*
export const metadata: Metadata = {
  title: "Best Website Company Kathmandu Nepal | Mobile App Development, Software Solutions",
  description: "Leading IT company in Kathmandu providing professional website development, mobile app development, e-commerce solutions, digital marketing, and custom software. Expert Nepali team, affordable prices, 24/7 support in Kathmandu valley.",
  keywords: [
    "website company Kathmandu",
    "IT company Kathmandu", 
    "web development Kathmandu",
    "mobile app development Kathmandu",
    "software company Kathmandu",
    "digital marketing Kathmandu",
    "SEO services Kathmandu",
    "e-commerce development Kathmandu",
    "website design Kathmandu",
    "app development Kathmandu",
    "IT services Kathmandu valley",
    "web design company Kathmandu",
    "software development Kathmandu",
    "cheap website Kathmandu",
    "best IT company Kathmandu"
  ],
  alternates: {
    canonical: "https://aoneskill.com.np/services/kathmandu"
  },
  openGraph: {
    title: "Best Website Company Kathmandu Nepal | AOne Skills",
    description: "Professional IT services in Kathmandu - website development, mobile apps, software solutions. Expert team, affordable prices, local support.",
    url: "https://aoneskill.com.np/services/kathmandu",
    siteName: "AOne Skills International Nepal",
    locale: "en_US",
    type: "website"
  }
};
*/

export default function KathmanduServices() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD for Kathmandu Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://aoneskill.com.np/services/kathmandu#localbusiness",
            "name": "AOne Skills International - Kathmandu",
            "description": "Professional IT services in Kathmandu Nepal - website development, mobile app development, e-commerce solutions, digital marketing, and custom software development.",
            "url": "https://aoneskill.com.np/services/kathmandu",
            "telephone": "+977-9842747572",
            "email": "kathmandu@aoneskill.com.np",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati Province",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 27.7172,
              "longitude": 85.3240
            },
            "areaServed": {
              "@type": "City",
              "name": "Kathmandu",
              "containedInPlace": {
                "@type": "State",
                "name": "Bagmati Province"
              }
            },
            "serviceType": [
              "Website Development Kathmandu",
              "Mobile App Development Kathmandu", 
              "E-commerce Development Kathmandu",
              "Digital Marketing Kathmandu",
              "SEO Services Kathmandu",
              "Software Development Kathmandu"
            ],
            "priceRange": "NPR 35000 - NPR 450000",
            "paymentAccepted": ["Cash", "Bank Transfer", "eSewa", "Khalti"],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-18:00"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Serving Kathmandu Valley • काठमाडौं उपत्यकामा सेवा
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Best Website Company
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Kathmandu Nepal
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              काठमाडौंमा सबैभन्दा राम्रो IT सेवा! Professional website development, mobile app development, e-commerce solutions, digital marketing, and custom software development in Kathmandu valley. Expert Nepali team, affordable prices, local support.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Kathmandu Team
              </Link>
              <Link
                href="https://wa.me/9779842747572?text=Hello, I need IT services in Kathmandu"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Kathmandu
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Kathmandu Specific Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              IT Services in Kathmandu Valley
              <span className="block text-2xl text-blue-600 mt-2">काठमाडौं उपत्यकामा IT सेवा</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive digital solutions for businesses in Kathmandu, Lalitpur, Bhaktapur, and surrounding areas. Local team, affordable prices, professional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Websites Kathmandu",
                description: "Professional websites for Kathmandu businesses - restaurants, hotels, shops, services. Mobile-friendly, SEO-optimized, local payment integration.",
                price: "NPR 35,000 - 85,000",
                features: ["Local SEO Kathmandu", "Google My Business", "Nepali/English Content", "Mobile Responsive"],
                icon: "🌐"
              },
              {
                title: "E-commerce Solutions KTM",
                description: "Complete online stores for Kathmandu businesses. eSewa, Khalti integration, inventory management, order tracking, customer support.",
                price: "NPR 75,000 - 180,000", 
                features: ["Local Payment Gateway", "Delivery Integration", "Inventory System", "Customer Dashboard"],
                icon: "🛒"
              },
              {
                title: "Mobile Apps Kathmandu",
                description: "Android and iOS apps for Kathmandu businesses. Food delivery, service booking, e-commerce apps with local features and payment integration.",
                price: "NPR 120,000 - 350,000",
                features: ["Android & iOS", "Local Features", "GPS Integration", "Push Notifications"],
                icon: "📱"
              },
              {
                title: "Digital Marketing KTM",
                description: "Facebook ads, Google ads, SEO specifically for Kathmandu market. Local keyword targeting, Google My Business optimization, social media management.",
                price: "NPR 25,000 - 75,000/month",
                features: ["Local SEO", "Google Ads", "Facebook Marketing", "Content Creation"],
                icon: "📈"
              },
              {
                title: "Software Solutions KTM",
                description: "Custom software for Kathmandu businesses - school management, hospital systems, restaurant POS, inventory management, accounting software.",
                price: "NPR 150,000 - 500,000",
                features: ["Custom Development", "Local Database", "Multi-language", "Cloud/Local Hosting"],
                icon: "💻"
              },
              {
                title: "IT Training Kathmandu",
                description: "Web development, digital marketing, programming courses in Kathmandu. Hands-on training, job placement assistance, Nepali language instruction.",
                price: "NPR 35,000 - 85,000",
                features: ["Nepali Instruction", "Job Guarantee", "Hands-on Training", "Certification"],
                icon: "🎓"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Kathmandu */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose AOne Skills in Kathmandu?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Local expertise, global standards. We understand Kathmandu market and deliver solutions that work for local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Local Team Kathmandu",
                description: "Dedicated team in Kathmandu valley with deep understanding of local market and business culture.",
                icon: "👥"
              },
              {
                title: "Affordable Pricing",
                description: "Competitive pricing specifically designed for Kathmandu businesses - small shops to large enterprises.",
                icon: "💰"
              },
              {
                title: "Quick Support",
                description: "24/7 support with Nepali, Hindi, English language. Quick response time for Kathmandu clients.",
                icon: "⚡"
              },
              {
                title: "Local SEO Expert",
                description: "Specialized in Kathmandu local SEO - get found by customers searching in your area.",
                icon: "📍"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA for Kathmandu */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project in Kathmandu?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get a free consultation for your website, mobile app, or software project. Local team, professional service, affordable pricing in Kathmandu valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="tel:+9779842747572"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +977-9842747572
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
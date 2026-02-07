"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import { generateMetaTags } from "@/lib/seoConfig";

export default function WebsiteDevelopment() {
  const meta = generateMetaTags("website-development");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Development",
    "provider": {
      "@type": "Organization",
      "name": "A.One Skills Tech Solutions Pvt Ltd",
      "url": "https://aoneskills.com.np"
    },
    "areaServed": ["Nepal", "Kathmandu", "Pokhara", "Chitwan", "Butwal", "Dharan", "Biratnagar", "Damak"],
    "description": meta.description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "NPR",
      "price": "35000+",
      "url": "https://aoneskills.com.np/services/website-development"
    },
    "keywords": meta.keywords
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Website Development
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Custom websites built for Nepali businesses. Modern, responsive, and optimized for search engines to help you attract more customers online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Starting from NPR 35,000</h3>
                <div className="space-y-4">
                  {[
                    "Responsive Design",
                    "SEO Optimization",
                    "Mobile-First Approach",
                    "Local Business Focus",
                    "Nepali/English Content",
                    "Google My Business Setup"
                  ].map((feature, index) => (
                    <div key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* What We Offer */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Business Websites",
                    desc: "Professional websites for restaurants, shops, clinics, and service providers."
                  },
                  {
                    title: "Portfolio Websites",
                    desc: "Showcase your work and attract clients with stunning portfolio sites."
                  },
                  {
                    title: "Corporate Websites",
                    desc: "Enterprise-level websites for established businesses and organizations."
                  },
                  {
                    title: "Landing Pages",
                    desc: "High-converting single pages for marketing campaigns and promotions."
                  }
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Process */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900">Our Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Discovery",
                    desc: "Understanding your business, goals, and target audience."
                  },
                  {
                    step: "2",
                    title: "Design",
                    desc: "Creating mockups and wireframes for your approval."
                  },
                  {
                    step: "3",
                    title: "Development",
                    desc: "Building your website with modern technologies."
                  },
                  {
                    step: "4",
                    title: "Launch",
                    desc: "Testing, optimization, and going live with support."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900">Technologies</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React",
                  "Next.js",
                  "WordPress",
                  "Laravel",
                  "PHP",
                  "MySQL",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Bootstrap",
                  "Tailwind CSS",
                  "SEO Tools"
                ].map((tech) => (
                  <div key={tech} className="bg-slate-100 rounded-lg p-3 text-center font-medium text-slate-700">
                    {tech}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-4">Perfect for Nepal</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Fast loading even on slow internet</li>
                  <li>• Mobile-optimized for smartphone users</li>
                  <li>• Local payment gateway integration</li>
                  <li>• Nepali and English language support</li>
                  <li>• SEO for local search results</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Website Development Packages</h2>
            <p className="text-xl text-slate-600">Choose the perfect package for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Website",
                price: "NPR 35,000",
                description: "Perfect for small businesses and startups",
                features: [
                  "5 Pages (Home, About, Services, Contact, etc.)",
                  "Responsive Design",
                  "Basic SEO Setup",
                  "Contact Form",
                  "Google Maps Integration",
                  "1 Month Support"
                ],
                popular: false
              },
              {
                name: "Business Website",
                price: "NPR 60,000",
                description: "Ideal for growing businesses",
                features: [
                  "10 Pages",
                  "Advanced Design",
                  "SEO Optimization",
                  "Blog Setup",
                  "Social Media Integration",
                  "Google My Business Setup",
                  "2 Months Support",
                  "Basic Analytics"
                ],
                popular: true
              },
              {
                name: "Premium Website",
                price: "NPR 85,000",
                description: "Complete solution for established businesses",
                features: [
                  "Unlimited Pages",
                  "Custom Design",
                  "Advanced SEO",
                  "Content Management",
                  "Multiple Language Support",
                  "Advanced Analytics",
                  "3 Months Support",
                  "Performance Optimization"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a professional website that helps your business grow. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now: +977-1-4567890
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
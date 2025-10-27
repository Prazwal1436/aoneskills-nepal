"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DigitalMarketing() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-rose-800 text-white py-24 overflow-hidden"
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
                Digital Marketing
                <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  For Nepal
                </span>
              </h1>
              <p className="text-xl text-rose-100 mb-8">
                Facebook ads, Google ads, and social media marketing specifically designed for Nepali businesses. Increase your online presence and sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#results"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-rose-400 text-rose-300 font-semibold rounded-lg hover:bg-rose-500 hover:text-white transition-colors"
                >
                  See Results
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
                <h3 className="text-2xl font-bold mb-6">Starting from NPR 18,000/month</h3>
                <div className="space-y-4">
                  {[
                    "Facebook Marketing",
                    "Google Ads Management",
                    "Instagram Marketing",
                    "Content Creation",
                    "SEO Optimization",
                    "Social Media Management",
                    "Performance Analytics",
                    "Monthly Reports"
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-slate-600">Complete digital marketing solutions for Nepali businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0l1 16h8l1-16" />
                  </svg>
                ),
                title: "Facebook Marketing",
                description: "Targeted Facebook ads to reach your ideal customers in Nepal. Page management and content creation included.",
                benefits: ["Targeted Audience", "Local Reach", "Brand Awareness", "Lead Generation"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Google Ads",
                description: "Pay-per-click advertising on Google search results. Target customers actively searching for your products.",
                benefits: ["High Intent Traffic", "Immediate Results", "Measurable ROI", "Local Targeting"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Instagram Marketing",
                description: "Visual content marketing on Instagram. Stories, posts, and reels to engage younger audiences.",
                benefits: ["Visual Storytelling", "Youth Audience", "Brand Building", "Engagement"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: "Content Creation",
                description: "High-quality graphics, videos, and written content for your social media and marketing campaigns.",
                benefits: ["Professional Content", "Brand Consistency", "Engaging Visuals", "Nepali Language"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "SEO Optimization",
                description: "Improve your website's ranking on Google search results. Increase organic traffic and visibility.",
                benefits: ["Organic Traffic", "Long-term Results", "Cost Effective", "Brand Authority"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Analytics & Reports",
                description: "Detailed performance reports and analytics to track your marketing ROI and optimize campaigns.",
                benefits: ["Performance Tracking", "ROI Measurement", "Data Insights", "Monthly Reports"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-rose-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Marketing Process</h2>
            <p className="text-xl text-slate-600">How we help grow your business online</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Strategy & Analysis",
                description: "We analyze your business, competitors, and target audience to create a winning strategy.",
                duration: "Week 1"
              },
              {
                step: "2", 
                title: "Campaign Setup",
                description: "Setting up ads, creating content, and optimizing your digital presence.",
                duration: "Week 2"
              },
              {
                step: "3",
                title: "Launch & Monitor",
                description: "Launch campaigns and continuously monitor performance for optimal results.",
                duration: "Week 3+"
              },
              {
                step: "4",
                title: "Optimize & Scale",
                description: "Analyze data, optimize campaigns, and scale successful strategies.",
                duration: "Ongoing"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center bg-white rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 mb-3">{phase.description}</p>
                <span className="text-sm text-rose-600 font-medium">{phase.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Digital Marketing Packages</h2>
            <p className="text-xl text-slate-600">Choose the right marketing package for your business growth</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Package",
                price: "NPR 18,000/month",
                description: "Perfect for small businesses starting online",
                features: [
                  "Facebook Page Management",
                  "2 Posts per Week",
                  "Basic Facebook Ads",
                  "Monthly Analytics Report",
                  "Ad Spend: NPR 10,000/month",
                  "WhatsApp Support"
                ],
                popular: false
              },
              {
                name: "Growth Package",
                price: "NPR 35,000/month",
                description: "Ideal for growing businesses",
                features: [
                  "Facebook + Instagram Marketing",
                  "5 Posts per Week",
                  "Google Ads Setup",
                  "Content Creation",
                  "SEO Optimization",
                  "Bi-weekly Reports",
                  "Ad Spend: NPR 20,000/month",
                  "Phone Support"
                ],
                popular: true
              },
              {
                name: "Premium Package",
                price: "NPR 65,000/month",
                description: "Complete digital marketing solution",
                features: [
                  "All Social Media Platforms",
                  "Daily Content Creation",
                  "Advanced Google Ads",
                  "Video Content",
                  "Website SEO",
                  "Weekly Strategy Calls",
                  "Detailed Analytics",
                  "Ad Spend: NPR 40,000/month",
                  "Dedicated Account Manager"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-rose-500 shadow-xl scale-105' : 'shadow-lg border border-slate-200'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-rose-600 mb-2">{plan.price}</div>
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
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              <strong>Note:</strong> Ad spend is separate from our service fee and goes directly to Facebook/Google for advertising your business.
            </p>
            <p className="text-sm text-slate-500">
              Minimum 3-month commitment required. Custom packages available for larger businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Results for Nepal Businesses</h2>
            <p className="text-xl text-slate-600">See how we've helped businesses grow their online presence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "300%",
                description: "Average increase in website traffic",
                icon: "📈"
              },
              {
                metric: "150%",
                description: "Boost in social media engagement",
                icon: "❤️"
              },
              {
                metric: "200%",
                description: "Growth in online sales",
                icon: "💰"
              },
              {
                metric: "85%",
                description: "Reduction in cost per customer",
                icon: "📊"
              }
            ].map((result, index) => (
              <motion.div
                key={result.description}
                className="text-center bg-white rounded-xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{result.icon}</div>
                <div className="text-3xl font-bold text-rose-600 mb-2">{result.metric}</div>
                <p className="text-slate-600">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
            <p className="text-xl text-rose-100 mb-8">
              Start reaching more customers with targeted digital marketing. Get more leads, sales, and brand awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-semibold rounded-lg hover:bg-rose-50 transition-colors"
              >
                Start Marketing
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-600 transition-colors"
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
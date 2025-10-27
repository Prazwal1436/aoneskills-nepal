"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EcommerceSolutions() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 text-white py-24 overflow-hidden"
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
                Complete
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  E-commerce Solutions
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Launch your online store with integrated Nepali payment systems. eSewa, Khalti, IME Pay - everything your customers need to buy online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
                >
                  View Demo
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
                <h3 className="text-2xl font-bold mb-6">Starting from NPR 75,000</h3>
                <div className="space-y-4">
                  {[
                    "eSewa Integration",
                    "Khalti Payment Gateway",
                    "IME Pay Support",
                    "Inventory Management",
                    "Order Tracking",
                    "Customer Dashboard",
                    "Admin Panel",
                    "Mobile Responsive"
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

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">E-commerce Features</h2>
            <p className="text-xl text-slate-600">Everything you need to run a successful online business in Nepal</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Payment Gateways",
                description: "Integrated eSewa, Khalti, IME Pay, and bank transfer options for easy payments."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: "Inventory Management",
                description: "Track stock levels, manage products, and get alerts when items run low."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                title: "Order Management",
                description: "Complete order processing system with status updates and notifications."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                ),
                title: "Customer Accounts",
                description: "Customer registration, order history, wishlist, and profile management."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Analytics & Reports",
                description: "Sales reports, customer analytics, and business insights dashboard."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Optimized",
                description: "Fully responsive design that works perfectly on mobile devices."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">E-commerce Packages</h2>
            <p className="text-xl text-slate-600">Choose the right package for your online store</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Store",
                price: "NPR 75,000",
                description: "Perfect for small businesses starting online",
                features: [
                  "Up to 50 Products",
                  "Basic Payment Gateway",
                  "Simple Admin Panel",
                  "Order Management",
                  "Customer Accounts",
                  "Mobile Responsive",
                  "1 Month Support"
                ],
                popular: false
              },
              {
                name: "Business Store",
                price: "NPR 125,000",
                description: "Ideal for growing online businesses",
                features: [
                  "Up to 500 Products",
                  "Multiple Payment Options",
                  "Advanced Admin Panel",
                  "Inventory Management",
                  "Customer Dashboard",
                  "SEO Optimization",
                  "Analytics Integration",
                  "2 Months Support"
                ],
                popular: true
              },
              {
                name: "Enterprise Store",
                price: "NPR 180,000",
                description: "Complete solution for large businesses",
                features: [
                  "Unlimited Products",
                  "All Payment Gateways",
                  "Multi-vendor Support",
                  "Advanced Reports",
                  "Custom Features",
                  "API Integration",
                  "Priority Support",
                  "3 Months Support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-purple-500 shadow-xl scale-105' : 'shadow-lg'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{plan.price}</div>
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
                      ? 'bg-purple-500 text-white hover:bg-purple-600'
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

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Integrated Payment Methods</h2>
            <p className="text-xl text-slate-600">Accept payments through all popular Nepali payment systems</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "eSewa",
                logo: "🟢", // You can replace with actual logos
                description: "Most popular digital wallet in Nepal"
              },
              {
                name: "Khalti",
                logo: "🟣",
                description: "Fast and secure digital payments"
              },
              {
                name: "IME Pay",
                logo: "🔵",
                description: "Digital wallet by IME"
              },
              {
                name: "Bank Transfer",
                logo: "🏦",
                description: "Direct bank account transfers"
              }
            ].map((payment, index) => (
              <motion.div
                key={payment.name}
                className="text-center bg-slate-50 rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{payment.logo}</div>
                <h3 className="font-bold text-slate-900 mb-2">{payment.name}</h3>
                <p className="text-sm text-slate-600">{payment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Start selling online with integrated Nepali payment systems. Get your e-commerce store ready in 2-6 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Start Your Store
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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
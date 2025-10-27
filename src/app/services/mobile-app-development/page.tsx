"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileAppDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 text-white py-24 overflow-hidden"
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
                Mobile App
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Native Android and iOS apps for your business. Food delivery, ride-sharing, marketplace, and custom business apps for the Nepali market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-400 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  View Apps
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
                <h3 className="text-2xl font-bold mb-6">Starting from NPR 120,000</h3>
                <div className="space-y-4">
                  {[
                    "Android & iOS Apps",
                    "Cross-Platform Development",
                    "GPS Integration",
                    "Push Notifications",
                    "Offline Functionality",
                    "Payment Integration",
                    "App Store Submission",
                    "Nepal-specific Features"
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

      {/* App Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Apps We Build</h2>
            <p className="text-xl text-slate-600">Custom mobile applications tailored for Nepal's market needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🍕",
                title: "Food Delivery Apps",
                description: "Restaurant apps with menu management, order tracking, and delivery integration.",
                features: ["Menu Management", "Order Tracking", "GPS Delivery", "Payment Gateway"]
              },
              {
                icon: "🚗",
                title: "Ride Sharing Apps",
                description: "Taxi and ride-sharing applications with real-time tracking and fare calculation.",
                features: ["Real-time GPS", "Fare Calculator", "Driver Matching", "Trip History"]
              },
              {
                icon: "🛒",
                title: "Marketplace Apps",
                description: "E-commerce mobile apps for buying and selling products online.",
                features: ["Product Catalog", "Shopping Cart", "Seller Dashboard", "Reviews & Ratings"]
              },
              {
                icon: "🏥",
                title: "Healthcare Apps",
                description: "Doctor appointment booking, health tracking, and medical record apps.",
                features: ["Appointment Booking", "Health Records", "Doctor Profiles", "Prescription Tracking"]
              },
              {
                icon: "🎓",
                title: "Education Apps",
                description: "Learning management systems, course delivery, and student tracking apps.",
                features: ["Course Management", "Video Lessons", "Progress Tracking", "Assignments"]
              },
              {
                icon: "💼",
                title: "Business Apps",
                description: "Custom business applications for inventory, sales, and customer management.",
                features: ["Inventory Tracking", "Sales Reports", "Customer Database", "Staff Management"]
              }
            ].map((app, index) => (
              <motion.div
                key={app.title}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                <p className="text-slate-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-slate-600">From idea to app store - here's how we build your app</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Planning & Design",
                description: "UI/UX design, wireframes, and technical architecture planning.",
                duration: "1-2 weeks"
              },
              {
                step: "2", 
                title: "Development",
                description: "Native app development with regular progress updates and testing.",
                duration: "4-8 weeks"
              },
              {
                step: "3",
                title: "Testing & QA",
                description: "Comprehensive testing on multiple devices and operating systems.",
                duration: "1-2 weeks"
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "App store submission, launch support, and ongoing maintenance.",
                duration: "1 week + ongoing"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center bg-white rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 mb-3">{phase.description}</p>
                <span className="text-sm text-emerald-600 font-medium">{phase.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-slate-600">Modern frameworks and tools for high-performance apps</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "React Native",
              "Flutter",
              "iOS Swift",
              "Android Kotlin",
              "Firebase",
              "Node.js APIs",
              "MongoDB",
              "Push Notifications",
              "GPS Integration",
              "Payment Gateways",
              "Cloud Storage",
              "Analytics"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-slate-100 rounded-lg p-4 text-center font-medium text-slate-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {tech}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mobile App Packages</h2>
            <p className="text-xl text-slate-600">Choose the right package for your mobile app project</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic App",
                price: "NPR 120,000",
                description: "Simple business app with core features",
                features: [
                  "Android OR iOS App",
                  "5-7 Core Features",
                  "Basic UI/UX Design",
                  "API Integration",
                  "App Store Submission",
                  "1 Month Support"
                ],
                popular: false
              },
              {
                name: "Standard App",
                price: "NPR 220,000",
                description: "Full-featured app for both platforms",
                features: [
                  "Android AND iOS Apps",
                  "10-15 Features",
                  "Custom UI/UX Design",
                  "Payment Integration",
                  "Push Notifications",
                  "GPS Integration",
                  "Admin Panel",
                  "2 Months Support"
                ],
                popular: true
              },
              {
                name: "Premium App",
                price: "NPR 350,000",
                description: "Enterprise-level app with advanced features",
                features: [
                  "Cross-Platform App",
                  "Unlimited Features",
                  "Advanced UI/UX",
                  "Real-time Features",
                  "Advanced Analytics",
                  "Multi-language Support",
                  "Priority Support",
                  "3 Months Support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-emerald-500 shadow-xl scale-105' : 'shadow-lg'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{plan.price}</div>
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
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
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
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Turn your app idea into reality. Get a custom mobile app built specifically for your business and the Nepali market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Start Your App
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
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
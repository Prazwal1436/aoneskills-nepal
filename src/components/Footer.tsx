"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-blue-300 rotate-12"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-blue-500 -rotate-12"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 border border-purple-400 rotate-45"></div>
        </div>
        
        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stay Updated with Latest Tech Trends
              </motion.h2>
              <motion.p
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Get insights, tips, and updates about IT services, technology trends, and business solutions delivered to your inbox.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
                <button className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="flex items-center">
                    Subscribe
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info - Takes up more space */}
            <motion.div className="lg:col-span-5" variants={itemVariants}>
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center group">
                  <div className="relative">
                    <Image
                      src="/logo-land.png"
                      alt="A.One Skills Tech Solutions"
                      width={60}
                      height={60}
                      className="rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      A.One Skills Tech Solutions
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">Pvt Ltd</p>
                  </div>
                </Link>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Nepal's premier IT solutions provider delivering cutting-edge technology services, custom software development, and digital transformation solutions. Empowering businesses across Nepal and beyond with innovative technology.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏆", text: "Award Winning" },
                  { icon: "🚀", text: "Fast Delivery" },
                  { icon: "💼", text: "Expert Team" },
                  { icon: "🔒", text: "Secure Solutions" }
                ].map((feature, index) => (
                  <div key={feature.text} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-gray-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "Facebook",
                      href: "https://www.facebook.com/aoneskills",
                      icon: (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      ),
                      color: "bg-blue-600 hover:bg-blue-700"
                    },
                    {
                      name: "Instagram",
                      href: "https://www.instagram.com/aoneskills/",
                      icon: (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987C18.636 23.974 24 18.607 24 11.987 24 5.367 18.636.001 12.017.001zm5.568 16.145c-.853 0-1.549-.696-1.549-1.549V9.451c0-.853.696-1.549 1.549-1.549s1.549.696 1.549 1.549v5.145c0 .853-.696 1.549-1.549 1.549zm-5.568 0c-2.27 0-4.108-1.838-4.108-4.108s1.838-4.108 4.108-4.108 4.108 1.838 4.108 4.108-1.838 4.108-4.108 4.108zm0-6.468c-1.302 0-2.36 1.058-2.36 2.36s1.058 2.36 2.36 2.36 2.36-1.058 2.36-2.36-1.058-2.36-2.36-2.36z" />
                        </svg>
                      ),
                      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    },
                    {
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/company/aoneskillsinternational",
                      icon: (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      color: "bg-blue-700 hover:bg-blue-800"
                    },
                    {
                      name: "WhatsApp",
                      href: "https://wa.me/9779842747572",
                      icon: (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386" />
                        </svg>
                      ),
                      color: "bg-green-600 hover:bg-green-700"
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                      aria-label={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-4">
                {[
                  { name: "Web Development", href: "/services" },
                  { name: "Mobile App Development", href: "/services" },
                  { name: "E-commerce Solutions", href: "/services" },
                  { name: "Custom Software", href: "/services" },
                  { name: "Digital Marketing", href: "/services" },
                  { name: "IT Consulting", href: "/services" },
                  { name: "Cloud Solutions", href: "/services" },
                  { name: "IT Training", href: "/products" }
                ].map((service, index) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></div>
                      {service.name}
                      <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Our Portfolio", href: "/portfolio" },
                  { name: "Success Stories", href: "/case-studies" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Careers", href: "/careers" },
                  { name: "Blog", href: "/blog" },
                  { name: "Support", href: "/support" }
                ].map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></div>
                      {link.name}
                      <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Office Address</h5>
                    <p className="text-gray-300 leading-relaxed">
                      A.One Skills Tech Solution Pvt. Ltd.<br />
                      Damak 57217, Koshi Province<br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Call Us</h5>
                    <p className="text-gray-300">
                      <a href="tel:+9779842747572" className="hover:text-white transition-colors duration-300">
                        +977-9842747572
                      </a>
                    </p>
                    <p className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Email Us</h5>
                    <p className="text-gray-300">
                      <a href="mailto:info@aoneskill.com.np" className="hover:text-white transition-colors duration-300">
                        info@aoneskill.com.np
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <a href="mailto:support@aoneskill.com.np" className="hover:text-white transition-colors duration-300">
                        support@aoneskill.com.np
                      </a>
                    </p>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+9779842747572"
                    className="group w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/9779842747572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="text-center md:text-left mb-4 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-400">
                  &copy; {currentYear} A.One Skills Tech Solutions Pvt Ltd. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Proudly serving Nepal and beyond with innovative IT solutions.
                </p>
              </motion.div>
              
              <motion.div
                className="flex space-x-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sitemap
                </Link>
              </motion.div>
            </div>
            
            {/* Additional Info */}
            <motion.div
              className="mt-6 pt-6 border-t border-gray-700/30 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Registered Business in Nepal
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ISO Certified Quality
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  150+ Projects Delivered
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

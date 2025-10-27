"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Metadata } from "next";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Dynamic SEO
  useEffect(() => {
    document.title = "Contact A.One Skills Tech Solutions Pvt Ltd - Leading IT Company Nepal | Get Free Consultation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact A.One Skills Tech Solutions Pvt Ltd for professional IT services in Nepal. Free consultation for web development, mobile apps, e-commerce, and custom software solutions. Available in Nepali and English.');
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'contact-form',
          userAgent: navigator.userAgent,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          budget: "",
          timeline: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact A.One Skills Tech Solutions Pvt Ltd",
            "description": "Contact leading IT company in Nepal for professional web development, mobile apps, and software solutions",
            "url": "https://aoneskills.com.np/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "A.One Skills Tech Solutions Pvt Ltd",
              "telephone": "+977-9842747572",
              "email": "info@aoneskills.com.np",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A.One Skills Tech Solution Pvt. Ltd.",
                "addressLocality": "Damak",
                "addressRegion": "Koshi Province",
                "postalCode": "57217",
                "addressCountry": "NP"
              },
              "openingHours": "Mo-Sa 09:00-18:00"
            }
          })
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rotate-45"></div>
              <div className="absolute top-40 right-20 w-24 h-24 border border-blue-300 rotate-12"></div>
              <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-blue-500 -rotate-12"></div>
            </div>
            
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
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get in Touch Today
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let&apos;s Build Your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                  Digital Future Together
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Ready to transform your business with professional IT solutions? Our expert team at A.One Skills Tech Solutions Pvt Ltd in Damak, Nepal is here to help you succeed with cutting-edge technology and local expertise.
            </p>              {/* Quick Contact Options */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">Nepal's Best</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form & Info Section */}
        <motion.section
          className="py-24 bg-gradient-to-b from-slate-50 to-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Start Your Project Today
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Tell us about your requirements and get a free consultation from our expert team.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    className="mb-8 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">We'll contact you within 24 hours. Check your email for confirmation.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="mb-8 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <svg className="w-5 h-5 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Error sending message</p>
                      <p className="text-sm">Please try again or contact us directly at +977-9842747572</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                        placeholder="Ram Sharma"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                        placeholder="ram@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                        placeholder="+977-98XXXXXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-3">
                      Service Needed *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ecommerce">E-commerce Solution</option>
                      <option value="software">Custom Software Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="training">IT Training</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-3">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                      >
                        <option value="">Select budget</option>
                        <option value="25000-50000">NPR 25,000 - 50,000</option>
                        <option value="50000-100000">NPR 50,000 - 100,000</option>
                        <option value="100000-250000">NPR 100,000 - 250,000</option>
                        <option value="250000-500000">NPR 250,000 - 500,000</option>
                        <option value="500000+">NPR 500,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-3">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 resize-none"
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Get Free Consultation
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Let's Connect
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Reach out to us through any of these channels. We're here to help you succeed!
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: "Email Us",
                      primary: "info@aoneskill.com.np",
                      secondary: "support@aoneskill.com.np",
                      gradient: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: "Call Us",
                      primary: "+977-9842747572",
                      secondary: "Available 9 AM - 6 PM",
                      gradient: "from-green-500 to-green-600"
                    },
                    {
                      icon: (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: "Visit Our Office",
                      primary: "A.One Skills Tech Solution Pvt. Ltd.",
                      secondary: "Damak 57217, Koshi Province, Nepal",
                      gradient: "from-purple-500 to-purple-600"
                    },
                    {
                      icon: (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: "Business Hours",
                      primary: "Monday - Saturday: 9:00 AM - 6:00 PM",
                      secondary: "Sunday: Closed",
                      gradient: "from-orange-500 to-orange-600"
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      className="group flex items-start p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className={`bg-gradient-to-r ${contact.gradient} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          {contact.icon}
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{contact.title}</h3>
                        <p className="text-slate-700 font-medium">{contact.primary}</p>
                        <p className="text-slate-600">{contact.secondary}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Contact Cards */}
                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="tel:+97714567890"
                      className="group flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
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
                      className="group flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Us</h3>
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
                        name: "Twitter",
                        href: "https://twitter.com/aoneskillnepal",
                        icon: (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        ),
                        color: "bg-blue-400 hover:bg-blue-500"
                      },
                      {
                        name: "Instagram",
                        href: "https://www.instagram.com/aoneskills/",
                        icon: (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987C18.636 23.974 24 18.607 24 11.987 24 5.367 18.636.001 12.017.001zm5.568 16.145c-.853 0-1.549-.696-1.549-1.549V9.451c0-.853.696-1.549 1.549-1.549s1.549.696 1.549 1.549v5.145c0 .853-.696 1.549-1.549 1.549zm-5.568 0c-2.27 0-4.108-1.838-4.108-4.108s1.838-4.108 4.108-4.108 4.108 1.838 4.108 4.108-1.838 4.108-4.108 4.108zm0-6.468c-1.302 0-2.36 1.058-2.36 2.36s1.058 2.36 2.36 2.36 2.36-1.058 2.36-2.36-1.058-2.36-2.36-2.36z" />
                          </svg>
                        ),
                        color: "bg-pink-600 hover:bg-pink-700"
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                        aria-label={social.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Interactive Map Section */}
        <motion.section
          className="relative bg-slate-50 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Located in Damak, Koshi Province - serving eastern Nepal and beyond. Come visit us for a face-to-face consultation and see our modern facilities.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Map Container */}
              <div className="relative h-96 md:h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.487422389564!2d87.69226314406271!3d26.664889389008746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58ff7a3c0003b%3A0xb9d7fd4ea424ef1b!2sA.One%20Skills%20Tech%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1760878573811!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="A.One Skills Tech Solutions Pvt Ltd Office Location"
                />
                
                {/* Overlay Info Card */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-lg max-w-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-slate-900 mb-1">A.One Skills Tech Solutions Pvt Ltd</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        A.One Skills Tech Solution Pvt. Ltd.<br />
                        Damak, Koshi Province, Nepal
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Open Now
                        </span>
                        <span className="text-slate-500 text-xs">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direction Button */}
                <div className="absolute bottom-6 right-6">
                  <a
                    href="https://www.google.com/maps/dir//A.One+Skills+Tech+Solution+Pvt.+Ltd./@26.664889389008746,87.69226314406271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-8 bg-gradient-to-r from-slate-50 to-blue-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-slate-900 mb-2">Office Address</h4>
                    <p className="text-slate-600">
                      A.One Skills Tech Solution Pvt. Ltd.<br />
                      Damak 57217, Koshi Province, Nepal
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-slate-900 mb-2">Contact Info</h4>
                    <p className="text-slate-600">
                      Phone: +977-1-4567890<br />
                      Email: info@aoneskill.com.np
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
                    <p className="text-slate-600">
                      Mon - Sat: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transportation Info */}
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "By Appointment",
                  description: "Schedule a meeting for personalized consultation"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Easy Access",
                  description: "Conveniently located with parking available"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Flexible Hours",
                  description: "Extended hours available for urgent projects"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Expert Team",
                  description: "Meet our experienced IT professionals in person"
                }
              ].map((item, index) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Ready to Start Your Digital Journey?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Join 150+ satisfied clients who trust A.One Skills Tech Solutions Pvt Ltd for their digital transformation. Let's build something amazing together!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a
                href="tel:+97714567890"
                className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="mailto:info@aoneskill.com.np"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

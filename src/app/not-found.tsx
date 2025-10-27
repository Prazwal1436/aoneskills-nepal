"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-blue-300 rotate-12"></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 border border-blue-500 -rotate-12"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-purple-400 rotate-45"></div>
        </div>

        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-1/3 left-10 text-blue-300 opacity-20 font-mono text-sm"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {"<div className='not-found'>"}
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-10 text-purple-300 opacity-20 font-mono text-sm"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          {"</div>"}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 404 Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Large 404 Text */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              404
            </motion.h1>
            
            {/* Glitch Effect */}
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl font-bold text-red-500 opacity-20"
              initial={{ x: 0 }}
              animate={{ x: [0, 2, -2, 0] }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 3,
                times: [0, 0.2, 0.8, 1]
              }}
            >
              404
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The page you&apos;re looking for seems to have taken a detour. Don&apos;t worry - even our best developers get lost sometimes! Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Fun Error Code */}
        <motion.div
          className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-left">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm">Error Console</span>
            </div>
            <div className="font-mono text-sm text-green-400">
              <div className="text-red-400">Error:</div>
              <div className="text-slate-300">Page not found in database</div>
              <div className="text-blue-400">Suggestion:</div>
              <div className="text-slate-300">Try navigating to home page</div>
              <div className="text-yellow-400 mt-2">Status: 404 - Page Missing</div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-semibold rounded-xl hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            View Services
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { name: "Website Development", href: "/services/website-development" },
            { name: "Mobile Apps", href: "/services/mobile-app-development" },
            { name: "E-commerce", href: "/services/ecommerce-solutions" },
            { name: "Digital Products", href: "/products" }
          ].map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className="block p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 text-sm"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Info */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-slate-400 text-sm">
            <p className="mb-2">A.One Skills Tech Solutions Pvt Ltd</p>
            <p>Nepal&apos;s Leading IT Company - Professional Web Development, Mobile Apps & Digital Solutions</p>
            <div className="mt-4 flex justify-center items-center space-x-6">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +977-9842747572
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@aoneskills.com.np
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
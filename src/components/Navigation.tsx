"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/logo-land.png"
                  alt="AOne Skills International"
                  width={180}
                  height={60}
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-blue-600 px-4 py-2 font-medium transition-all duration-300 group"
            >
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 hover:text-blue-600 px-4 py-2 font-medium transition-all duration-300 group"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
              href="/services"
              className="relative text-gray-700 hover:text-blue-600 px-4 py-2 font-medium transition-all duration-300 group"
            >
              <span>IT Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
              href="/products"
              className="relative text-gray-700 hover:text-blue-600 px-4 py-2 font-medium transition-all duration-300 group"
            >
              <span>Products</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile & Tablet Navigation */}
          <div className="hidden md:flex lg:hidden md:items-center md:space-x-4">
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-3 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-2">
            <Link
              href="/"
              className="group flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link
              href="/about"
              className="group flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </Link>
            <Link
              href="/services"
              className="group flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              IT Services
            </Link>
            <Link
              href="/products"
              className="group flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Products
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

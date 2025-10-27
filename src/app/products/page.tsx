"use client";
import type { Metadata } from "next";
import Link from "next/link";
import PriceDisplay from "@/components/PriceDisplay";
import { useDiscount } from "@/hooks/useDiscount";
import FloatingDiscountWidget from "@/components/FloatingDiscountWidget";

// Note: metadata moved to layout due to client component
// export const metadata: Metadata = {
//   title: "Products & Solutions - AOneSkill International Nepal",
//   description:
//     "Ready-to-use digital products and custom solutions for Nepal businesses. Website templates, software solutions, and digital tools designed for the Nepal market.",
// };

export default function Products() {
  const { discountState } = useDiscount();
  const products = [
    {
      category: "Complete Business Software Solutions",
      items: [
        {
          title: "Restaurant Management System",
          description:
            "Complete restaurant management software with POS, inventory, table booking, and kitchen management. Perfect for restaurants in Nepal.",
          features: ["POS System", "Table Booking", "Kitchen Display", "Inventory Management", "Staff Management", "Sales Reports", "Customer Database", "Nepali Language Support"],
          price: "NPR 85,000",
          oneTime: true,
        },
        {
          title: "School Management System Pro",
          description:
            "Advanced school management software for private schools with student records, online classes, fee management, and parent portal.",
          features: ["Student Information System", "Online Classes Integration", "Fee Management & Online Payment", "Exam & Result Management", "Parent Mobile App", "Teacher Portal", "Library Management", "Transport Management"],
          price: "NPR 120,000",
          oneTime: true,
        },
        {
          title: "Hospital Management System",
          description:
            "Comprehensive hospital management software for clinics and hospitals with patient records, appointments, and billing.",
          features: ["Patient Registration", "Appointment Scheduling", "Electronic Medical Records", "Billing & Insurance", "Pharmacy Management", "Lab Management", "Doctor Portal", "Report Generation"],
          price: "NPR 150,000",
          oneTime: true,
        },
      ],
    },
    {
      category: "E-commerce & Website Solutions",
      items: [
        {
          title: "Multi-Vendor E-commerce Platform",
          description:
            "Complete multi-vendor marketplace like Daraz for Nepal. Vendors can sell products with commission-based system.",
          features: ["Multi-Vendor Support", "eSewa/Khalti/IME Pay Integration", "Vendor Dashboard", "Commission Management", "Product Reviews", "Order Tracking", "Mobile App Included", "Admin Panel"],
          price: "NPR 200,000",
          oneTime: true,
        },
        {
          title: "Professional Business Website Package",
          description:
            "Premium business website with CMS, SEO optimization, and mobile app. Perfect for established businesses in Nepal.",
          features: ["Custom Design", "Content Management System", "SEO Optimization", "Google Analytics", "Social Media Integration", "Contact Forms", "Mobile Responsive", "1 Year Hosting Included"],
          price: "NPR 65,000",
          oneTime: true,
        },
        {
          title: "Online Learning Platform",
          description:
            "Complete e-learning platform like Coursera for Nepal market. Create and sell educational content online with video streaming.",
          features: ["Content Creation Tools", "Video Streaming", "Student Dashboard", "Certificate Generation", "Payment Integration", "Quiz & Assignments", "Mobile App", "Instructor Portal"],
          price: "NPR 180,000",
          oneTime: true,
        },
      ],
    },
    {
      category: "Mobile Apps & Digital Tools",
      items: [
        {
          title: "Delivery App Package (Android & iOS)",
          description:
            "Complete food delivery app solution like Foodmandu with customer app, rider app, and restaurant dashboard.",
          features: ["Customer Mobile App", "Rider Mobile App", "Restaurant Dashboard", "Real-time Tracking", "Payment Integration", "Push Notifications", "Admin Panel", "Source Code Included"],
          price: "NPR 250,000",
          oneTime: true,
        },
        {
          title: "Taxi Booking App System",
          description:
            "Complete taxi booking solution like Pathao with passenger app, driver app, and admin dashboard for Nepal market.",
          features: ["Passenger App", "Driver App", "GPS Tracking", "Fare Calculation", "Payment Integration", "Rating System", "Admin Dashboard", "Real-time Chat"],
          price: "NPR 300,000",
          oneTime: true,
        },
        {
          title: "Social Media Management Tool",
          description:
            "Professional social media management dashboard for agencies and businesses to manage multiple social accounts.",
          features: ["Multi-Account Management", "Post Scheduling", "Analytics Dashboard", "Content Calendar", "Team Collaboration", "Client Reports", "Auto-posting", "Hashtag Generator"],
          price: "NPR 45,000",
          oneTime: true,
        },
      ],
    },
    {
      category: "Accounting & Finance Software",
      items: [
        {
          title: "Complete Accounting Software",
          description:
            "Professional accounting software with VAT support, financial reports, and inventory management for Nepal businesses.",
          features: ["Double Entry Accounting", "VAT Calculation & Reports", "Financial Statements", "Inventory Management", "Bank Reconciliation", "Multi-Currency Support", "Backup & Restore", "User Permissions"],
          price: "NPR 75,000",
          oneTime: true,
        },
        {
          title: "Payroll Management System",
          description:
            "Advanced payroll system with employee management, salary processing, and government compliance for Nepal labor laws.",
          features: ["Employee Database", "Salary Processing", "Tax Calculations", "Provident Fund Management", "Leave Management", "Loan Management", "Payslip Generation", "Government Reports"],
          price: "NPR 55,000",
          oneTime: true,
        },
        {
          title: "Invoice & Billing System",
          description:
            "Professional invoicing software with quotations, tax calculations, and payment tracking for small businesses.",
          features: ["Invoice Generation", "Quotation Management", "Tax Calculations", "Payment Tracking", "Customer Management", "Product Catalog", "Reports & Analytics", "Email Integration"],
          price: "NPR 35,000",
          oneTime: true,
        },
      ],
    },
    {
      category: "Digital Marketing & SEO Tools",
      items: [
        {
          title: "Complete SEO Toolkit",
          description:
            "Professional SEO analysis and optimization toolkit for Nepal websites with keyword research and competitor analysis.",
          features: ["Keyword Research Tool", "Website Audit", "Competitor Analysis", "Backlink Checker", "Rank Tracking", "Local SEO Tools", "Report Generation", "White-label Reports"],
          price: "NPR 25,000",
          oneTime: true,
        },
        {
          title: "Facebook Marketing Automation",
          description:
            "Advanced Facebook marketing tool with auto-posting, lead generation, and analytics specifically for Nepal market.",
          features: ["Auto Post Scheduling", "Lead Generation Forms", "Audience Targeting", "Ad Campaign Management", "Analytics Dashboard", "Chatbot Integration", "Content Templates", "Performance Reports"],
          price: "NPR 18,000",
          oneTime: true,
        },
        {
          title: "Email Marketing Platform",
          description:
            "Complete email marketing solution with templates, automation, and analytics for Nepal businesses.",
          features: ["Email Templates", "Automation Workflows", "Subscriber Management", "A/B Testing", "Analytics & Reports", "Landing Pages", "Integration APIs", "Mobile Responsive"],
          price: "NPR 22,000",
          oneTime: true,
        },
      ],
    },
  ];

  // Remove hardcoded discount logic - now using dynamic discount system

  return (
    <div className="min-h-screen">
      <FloatingDiscountWidget />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 text-white py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ready-to-Use
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Products
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              Get instant access to professional software solutions, website templates, and digital tools designed specifically for Nepal businesses. No waiting, no custom development time.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-6 inline-block">
              {discountState.isActive ? (
                <>
                  <span className="font-semibold text-yellow-300 text-xl">🎉 Limited Time Offer - {discountState.discount}% OFF All Products</span>
                  <span className="block text-blue-100 text-sm mt-2">Your exclusive discount is active! Professional business solutions at Nepal-friendly prices. Complete source code, documentation, and 1-year support included.</span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-yellow-300 text-xl">🎰 Spin for Discount - Up to 15% OFF All Products</span>
                  <span className="block text-blue-100 text-sm mt-2">Spin our discount wheel to unlock exclusive savings! Professional business solutions at Nepal-friendly prices. Complete source code, documentation, and 1-year support included.</span>
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

      {/* Features Section */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Digital Products?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional solutions designed specifically for Nepal market with local payment integration and Nepali language support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Instant Download",
                description: "Get your product immediately after purchase with full source code"
              },
              {
                icon: "🇳🇵", 
                title: "Nepal Focused",
                description: "Built for Nepal market with local payment gateways and language support"
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                description: "Professional quality at prices that make sense for Nepal businesses"
              },
              {
                icon: "🛠️",
                title: "Full Customization",
                description: "Complete source code included for unlimited customization"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {products.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 bg-slate-50 odd:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                {category.category}
              </h2>
              <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Professional solutions ready for immediate deployment in your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((product, productIndex) => {
                return (
                  <div
                    key={productIndex}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-shadow flex flex-col relative group"
                  >
                    {/* Dynamic Discount Badge */}
                    {discountState.isActive && (
                      <span className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg animate-pulse">
                        {discountState.discount}% OFF
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{product.description}</p>
                    
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-sm text-slate-700"
                          >
                            <svg
                              className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-6 mt-auto">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <PriceDisplay
                            originalPrice={Number(product.price.replace(/[^\d.]/g, ""))}
                            className="text-3xl font-bold"
                            showSavings={true}
                            size="xl"
                          />
                          {product.oneTime && (
                            <span className="text-sm text-slate-500 ml-2 block mt-1">one-time payment</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link
                          href="/contact"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-lg font-semibold text-center transition-all transform hover:scale-105"
                        >
                          Buy Now
                        </Link>
                        <Link
                          href="/contact"
                          className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 font-semibold transition-colors text-slate-700"
                        >
                          Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What You Get With Every Product
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional digital solutions with everything you need to succeed in Nepal market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Complete Source Code",
                description: "Full source code included with detailed comments and documentation for easy customization."
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Setup Documentation",
                description: "Step-by-step installation guides and user manuals in both English and Nepali."
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "Nepal Payment Integration",
                description: "Pre-integrated with eSewa, Khalti, and other popular Nepal payment gateways."
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Lifetime Support",
                description: "Free technical support and updates. WhatsApp and email support included."
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center"
              >
                <div className="bg-blue-500/30 backdrop-blur-sm border border-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-600">Trusted by businesses across Nepal</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Sharma",
                business: "Electronics Shop, Kathmandu",
                text: "The inventory management system saved us so much time. Perfect for our business needs and very easy to use.",
                rating: 5
              },
              {
                name: "Sita Gurung", 
                business: "Himalayan School, Pokhara",
                text: "School management system is excellent. Parents love the online portal and fee management is so simple now.",
                rating: 5
              },
              {
                name: "Prakash Thapa",
                business: "Local Restaurant, Bhaktapur", 
                text: "Our new website with online menu brought so many new customers. Great investment for our restaurant.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
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
              Get professional digital solutions designed for Nepal market. Instant download, full source code, and lifetime support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Browse All Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Call: +977-1-4567890
              </Link>
            </div>
            <p className="text-blue-200 mt-6 text-sm">
              {discountState.isActive ? (
                <>🎉 Your {discountState.discount}% discount is active! Complete source code and 1-year support included!</>
              ) : (
                <>🎰 Spin our discount wheel for exclusive savings up to 15%! Complete source code and 1-year support included!</>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

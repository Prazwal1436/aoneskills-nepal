"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SoftwareSolutions() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-800 text-white py-24 overflow-hidden"
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
                Custom Software
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Tailored software development for Nepal businesses. From inventory management to school systems, we build solutions that work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-colors"
                >
                  View Solutions
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
                <h3 className="text-2xl font-bold mb-6">Starting from NPR 80,000</h3>
                <div className="space-y-4">
                  {[
                    "Custom Software Development",
                    "Database Design",
                    "User Interface Design",
                    "Testing & Quality Assurance",
                    "Documentation",
                    "Training & Support",
                    "Maintenance & Updates",
                    "Source Code Delivery"
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

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Software Solutions We Build</h2>
            <p className="text-xl text-slate-600">Custom software for different industries in Nepal</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Inventory Management",
                description: "Complete inventory tracking system for shops, warehouses, and businesses. Track stock, sales, and generate reports.",
                features: ["Stock Management", "Sales Tracking", "Reports", "Barcode Support"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "School Management",
                description: "Complete school management system for private schools. Student records, fees, exams, and parent communication.",
                features: ["Student Records", "Fee Management", "Exam System", "Parent Portal"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Hospital Management",
                description: "Patient management system for clinics and hospitals. Appointments, medical records, and billing system.",
                features: ["Patient Records", "Appointments", "Billing", "Doctor Schedules"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "Accounting Software",
                description: "Complete accounting solution for businesses. Income, expenses, tax calculation, and financial reports.",
                features: ["Income/Expense", "Tax Calculation", "Reports", "VAT Support"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "HR Management",
                description: "Employee management system for businesses. Payroll, attendance, leave management, and performance tracking.",
                features: ["Employee Records", "Payroll", "Attendance", "Leave Management"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "POS System",
                description: "Point of Sale system for retail businesses. Sales processing, receipt printing, and customer management.",
                features: ["Sales Processing", "Receipt Printing", "Customer Management", "Offline Mode"]
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Development Process</h2>
            <p className="text-xl text-slate-600">How we build your custom software solution</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description: "We understand your business needs and document all requirements.",
                duration: "1-2 weeks"
              },
              {
                step: "2", 
                title: "Design & Planning",
                description: "Create system design, database structure, and user interface mockups.",
                duration: "1-2 weeks"
              },
              {
                step: "3",
                title: "Development",
                description: "Build the software using modern technologies and best practices.",
                duration: "4-8 weeks"
              },
              {
                step: "4",
                title: "Testing",
                description: "Thorough testing to ensure the software works perfectly.",
                duration: "1-2 weeks"
              },
              {
                step: "5",
                title: "Deployment & Training",
                description: "Deploy the software and train your team to use it effectively.",
                duration: "1 week"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center bg-white rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 mb-3 text-sm">{phase.description}</p>
                <span className="text-sm text-indigo-600 font-medium">{phase.duration}</span>
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
            <p className="text-xl text-slate-600">Modern, reliable technologies for robust software solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React.js", "Vue.js", "HTML5/CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
                icon: "🎨"
              },
              {
                category: "Backend",
                technologies: ["Node.js", "PHP Laravel", "Python Django", "Java Spring", "ASP.NET", "Express.js"],
                icon: "⚙️"
              },
              {
                category: "Database",
                technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase"],
                icon: "🗄️"
              },
              {
                category: "Tools",
                technologies: ["Git", "Docker", "AWS", "Linux", "VS Code", "Postman"],
                icon: "🛠️"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.category}
                className="text-center bg-slate-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.technologies.map((technology) => (
                    <li key={technology} className="text-slate-600 text-sm">{technology}</li>
                  ))}
                </ul>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Software Development Pricing</h2>
            <p className="text-xl text-slate-600">Transparent pricing for custom software solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Software",
                price: "NPR 80,000 - 150,000",
                description: "Simple business software with basic features",
                features: [
                  "Up to 5 modules",
                  "Basic user interface",
                  "Database setup",
                  "Basic reporting",
                  "User manual",
                  "3 months support",
                  "Source code delivery"
                ],
                popular: false
              },
              {
                name: "Standard Software",
                price: "NPR 150,000 - 300,000",
                description: "Comprehensive business solution",
                features: [
                  "Up to 10 modules",
                  "Modern user interface",
                  "Advanced database design",
                  "Detailed reporting",
                  "User roles & permissions",
                  "6 months support",
                  "Training included",
                  "Mobile responsive",
                  "Source code delivery"
                ],
                popular: true
              },
              {
                name: "Enterprise Software",
                price: "NPR 300,000+",
                description: "Large-scale enterprise solution",
                features: [
                  "Unlimited modules",
                  "Custom UI/UX design",
                  "Complex integrations",
                  "Advanced analytics",
                  "Multi-user system",
                  "12 months support",
                  "Comprehensive training",
                  "Mobile app included",
                  "Cloud deployment",
                  "Source code delivery"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-indigo-500 shadow-xl scale-105' : 'shadow-lg border border-slate-200'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{plan.price}</div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              <strong>Note:</strong> Final pricing depends on specific requirements and complexity. Free consultation available.
            </p>
            <p className="text-sm text-slate-500">
              50% advance payment required. Remaining 50% on project completion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Custom Software?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get a software solution perfectly tailored for your business needs. Increase efficiency and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Start Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call: +977-1-4567890
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
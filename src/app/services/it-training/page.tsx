"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ITTraining() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-800 text-white py-24 overflow-hidden"
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
                IT Training &
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Courses
                </span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Learn programming, web development, and digital skills in Nepal. Both online and classroom training available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Enroll Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#training-programs"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-400 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  View Training Programs
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
                <h3 className="text-2xl font-bold mb-6">Course Features</h3>
                <div className="space-y-4">
                  {[
                    "Expert Instructors",
                    "Hands-on Projects",
                    "Certificate of Completion",
                    "Job Placement Support",
                    "Flexible Schedule",
                    "Online & Offline Classes",
                    "Study Materials Included",
                    "Lifetime Support"
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

      {/* Training Programs */}
      <section id="training-programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Available IT Courses</h2>
            <p className="text-xl text-slate-600">Learn in-demand skills for the digital age</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Web Development",
                description: "Learn HTML, CSS, JavaScript, React, and backend development. Build complete websites from scratch.",
                duration: "6 months",
                level: "Beginner to Advanced",
                price: "NPR 25,000"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile App Development",
                description: "Create Android and iOS apps using React Native and Flutter. Learn to build mobile applications.",
                duration: "4 months",
                level: "Intermediate",
                price: "NPR 30,000"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Python Programming",
                description: "Master Python programming for web development, data analysis, and automation. Great for beginners.",
                duration: "3 months",
                level: "Beginner",
                price: "NPR 18,000"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Data Science & Analytics",
                description: "Learn data analysis, visualization, and machine learning using Python and tools like Excel.",
                duration: "5 months",
                level: "Intermediate",
                price: "NPR 35,000"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0l1 16h8l1-16" />
                  </svg>
                ),
                title: "Digital Marketing",
                description: "Master Facebook ads, Google ads, SEO, and social media marketing for business growth.",
                duration: "2 months",
                level: "Beginner",
                price: "NPR 15,000"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Cybersecurity Basics",
                description: "Learn about network security, ethical hacking, and protecting digital assets and information.",
                duration: "3 months",
                level: "Beginner to Intermediate",
                price: "NPR 22,000"
              }
            ].map((course, index) => (
              <motion.div
                key={course.title}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-4">{course.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration: {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Level: {course.level}
                  </div>
                  <div className="flex items-center text-lg font-bold text-emerald-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {course.price}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center py-2 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Enroll Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Format */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Flexible Learning Options</h2>
            <p className="text-xl text-slate-600">Choose the learning format that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Classroom Training",
                description: "Traditional in-person classes with direct instructor interaction and hands-on practice.",
                features: ["Direct interaction", "Group learning", "Lab access", "Immediate help"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Online Learning",
                description: "Learn from anywhere with live online classes and recorded sessions for review.",
                features: ["Learn from home", "Flexible timing", "Recorded sessions", "Screen sharing"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Hybrid Learning",
                description: "Combination of online and offline classes for maximum flexibility and effectiveness.",
                features: ["Best of both worlds", "Weekend classes", "Online practice", "Flexible schedule"]
              }
            ].map((format, index) => (
              <motion.div
                key={format.title}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                  {format.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{format.title}</h3>
                <p className="text-slate-600 mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center text-sm text-slate-600">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our IT Training?</h2>
            <p className="text-xl text-slate-600">What makes our training programs special</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of real-world experience."
              },
              {
                icon: "🏆",
                title: "Certification",
                description: "Get recognized certificates that add value to your resume and career."
              },
              {
                icon: "💼",
                title: "Job Support",
                description: "Career guidance and job placement assistance after course completion."
              },
              {
                icon: "🛠️",
                title: "Practical Learning",
                description: "Hands-on projects and real-world examples to build your portfolio."
              },
              {
                icon: "⏰",
                title: "Flexible Schedule",
                description: "Weekend and evening batches available for working professionals."
              },
              {
                icon: "💻",
                title: "Latest Technology",
                description: "Learn current industry standards and trending technologies."
              },
              {
                icon: "🤝",
                title: "Small Batches",
                description: "Limited students per batch for personalized attention and better learning."
              },
              {
                icon: "📞",
                title: "Lifetime Support",
                description: "Get help and guidance even after completing your course."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center bg-slate-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-slate-600">Our students are now working in top companies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "500+",
                description: "Students trained successfully"
              },
              {
                metric: "85%",
                description: "Job placement rate"
              },
              {
                metric: "50+",
                description: "Partner companies for placement"
              },
              {
                metric: "4.8/5",
                description: "Average student rating"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.description}
                className="text-center bg-white rounded-xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.metric}</div>
                <p className="text-slate-600">{stat.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Start Your IT Career Today!</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of students who have transformed their careers with our IT training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Enroll Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+977-1-4567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Call: +977-1-4567890
              </Link>
            </div>
            <p className="text-emerald-200 mt-6 text-sm">
              Free demo class available. Contact us to book your seat!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
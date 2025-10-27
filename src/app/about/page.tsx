import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - A.One Skills International | Digital Solutions & IT Services",
  description:
    "Founded in 2018, A.One Skills International is a passionate digital agency helping 100+ clients across Nepal and internationally. We specialize in web development, mobile apps, digital marketing, and custom software solutions.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 text-white py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About 
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                A.One Skills International
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              A passionate digital agency empowering brands and startups to achieve their digital goals through innovative solutions and creative strategies. Founded in 2018, we&apos;ve helped 100+ clients transform their online presence and grow their brands.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              <span className="bg-blue-700/50 px-4 py-2 rounded-full">🚀 Founded in 2018</span>
              <span className="bg-blue-700/50 px-4 py-2 rounded-full">👥 100+ Satisfied Clients</span>
              <span className="bg-blue-700/50 px-4 py-2 rounded-full">🌍 Nepal & International</span>
              <span className="bg-blue-700/50 px-4 py-2 rounded-full">⭐ Expert Team</span>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Driving digital transformation through creativity, innovation, and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                <strong>Empower businesses to thrive in the digital era through innovative solutions and creative strategies.</strong> We combine creativity with cutting-edge technology to help brands stand out in the competitive digital landscape, delivering exceptional digital experiences that drive real business results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-10 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-orange-100 leading-relaxed text-lg">
                To become the leading digital solutions provider in Nepal and expand internationally, helping businesses of all sizes access professional-grade technology services. We envision a future where every business can leverage digital innovation to achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From humble beginnings to serving 100+ clients across Nepal and internationally
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Founded in 2018
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A.One Skills International was founded in 2018 with a clear vision: to bridge the digital gap for businesses in Nepal and beyond. Starting as a small team of passionate developers and designers, we focused on delivering high-quality digital solutions to local businesses in Purbanchal and Jhapa regions.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Growing Our Expertise
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Over the years, we expanded our services to include custom software development, mobile app development, digital marketing, branding, and IT consulting. Our diverse team of designers, developers, and marketers brings years of experience and a collaborative spirit to every project.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  International Expansion
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Today, we proudly serve clients not only across Nepal but also internationally. With 100+ successful projects under our belt, we&apos;ve established ourselves as a trusted digital partner for businesses ranging from startups to established enterprises, delivering solutions that drive real growth and success.
                </p>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Achievements</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">100+</div>
                      <div className="text-slate-300">Satisfied Clients</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">7+</div>
                      <div className="text-slate-300">Years of Excellence</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">20+</div>
                      <div className="text-slate-300">Services Offered</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">Global</div>
                      <div className="text-slate-300">International Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do at A.One Skills International
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Integrity</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                We build trust through transparent communication, honest pricing, and reliable delivery. Our clients know they can count on us to deliver what we promise, when we promise it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Creativity</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Innovation drives everything we do. We combine artistic vision with technical expertise to create unique digital experiences that help our clients stand out in competitive markets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Client Success</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Your success is our success. We&apos;re not just service providers - we&apos;re strategic partners invested in helping your business grow and achieve its digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Diverse team of specialists bringing years of experience and collaborative spirit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 group-hover:border-blue-200 transition-colors">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Web Development</h3>
                <p className="text-slate-600 text-sm">Modern, responsive websites and web applications</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 group-hover:border-green-200 transition-colors">
                <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Apps</h3>
                <p className="text-slate-600 text-sm">Android & iOS applications with seamless integration</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 group-hover:border-purple-200 transition-colors">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Marketing</h3>
                <p className="text-slate-600 text-sm">SEO, social media, and online marketing strategies</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 group-hover:border-orange-200 transition-colors">
                <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Branding & Design</h3>
                <p className="text-slate-600 text-sm">Logo, brochure, and brand identity design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted by businesses across Nepal and internationally
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">&quot;A-One Skills delivered our website on time and exceeded our expectations. Professional and creative team!&quot;</p>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Sujan Shrestha</div>
                <div className="text-slate-600">Founder, MY Cafe PK</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">&quot;Huge boost in online sales after their e-commerce site and digital marketing work. Highly recommended!&quot;</p>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Pratima Karki</div>
                <div className="text-slate-600">Marketing Lead, Himalayan Foods</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">&quot;Their branding work gave our business a fresh identity. Smooth process and fantastic results!&quot;</p>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Ramesh Thapa</div>
                <div className="text-slate-600">Director, Thapa Travels</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">&quot;A-One Skills is my go-to for web and marketing. They listen, deliver, and care about business growth.&quot;</p>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Anita Gurung</div>
                <div className="text-slate-600">Owner, Gurung Boutique</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

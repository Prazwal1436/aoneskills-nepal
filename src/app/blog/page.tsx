"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Note: Metadata moved to layout due to client component requirement
/*
export const metadata: Metadata = {
  title: "IT Blog Nepal - Web Development, Digital Marketing Tips | AOne Skills",
  description: "Latest insights on web development, mobile app development, digital marketing, SEO tips, and technology trends in Nepal. Expert advice from AOne Skills International team.",
  keywords: [
    "IT blog Nepal",
    "web development tips Nepal",
    "digital marketing Nepal blog",
    "SEO tips Nepal",
    "technology blog Nepal",
    "programming tutorials Nepal",
    "website development guide Nepal",
    "mobile app development Nepal blog",
    "business technology Nepal",
    "IT news Nepal"
  ]
};
*/

// Sample blog posts data - in real app, this would come from CMS or database
const blogPosts = [
  {
    id: 1,
    title: "सस्तो Website कसरी बनाउने Nepal मा? Complete Guide 2024",
    slug: "cheap-website-development-nepal-guide-2024",
    excerpt: "Nepal मा सबैभन्दा सस्तो दरमा professional website कसरी बनाउने? Step by step guide with pricing, features, और best practices।",
    author: "AOne Skills Team",
    date: "2024-01-15",
    category: "Web Development",
    readTime: "8 min read",
    image: "/blog/cheap-website-nepal.jpg",
    tags: ["Website Development", "Nepal", "Business", "सस्तो Website"]
  },
  {
    id: 2,
    title: "Mobile App Development Cost in Nepal - Complete Pricing Guide",
    slug: "mobile-app-development-cost-nepal-2024",
    excerpt: "Detailed breakdown of mobile app development costs in Nepal, factors affecting pricing, and how to choose the right development partner.",
    author: "Mobile App Expert",
    date: "2024-01-12",
    category: "Mobile Apps",
    readTime: "10 min read",
    image: "/blog/mobile-app-cost-nepal.jpg",
    tags: ["Mobile Apps", "Pricing", "Nepal", "Business"]
  },
  {
    id: 3,
    title: "Digital Marketing Strategy for Nepali Businesses in 2024",
    slug: "digital-marketing-strategy-nepal-businesses-2024",
    excerpt: "Comprehensive digital marketing strategies that work for Nepali businesses. Local SEO, social media, and online advertising tactics.",
    author: "Digital Marketing Team",
    date: "2024-01-10",
    category: "Digital Marketing",
    readTime: "12 min read",
    image: "/blog/digital-marketing-nepal.jpg",
    tags: ["Digital Marketing", "SEO", "Nepal", "Business Growth"]
  },
  {
    id: 4,
    title: "E-commerce Success Stories: Nepali Businesses Going Online",
    slug: "ecommerce-success-stories-nepal-businesses",
    excerpt: "Inspiring stories of Nepali businesses that successfully transitioned to e-commerce and achieved significant growth online.",
    author: "E-commerce Specialist",
    date: "2024-01-08",
    category: "E-commerce",
    readTime: "7 min read",
    image: "/blog/ecommerce-success-nepal.jpg",
    tags: ["E-commerce", "Success Stories", "Nepal", "Online Business"]
  },
  {
    id: 5,
    title: "SEO for Nepal: Local Search Optimization Tips and Tricks",
    slug: "seo-nepal-local-search-optimization-guide",
    excerpt: "Master local SEO in Nepal. Google My Business optimization, local keywords, and strategies to rank higher in Nepal search results.",
    author: "SEO Expert",
    date: "2024-01-05",
    category: "SEO",
    readTime: "15 min read",
    image: "/blog/seo-nepal-guide.jpg",
    tags: ["SEO", "Local SEO", "Nepal", "Google Ranking"]
  },
  {
    id: 6,
    title: "Best Programming Languages to Learn in Nepal for 2024",
    slug: "best-programming-languages-learn-nepal-2024",
    excerpt: "Which programming languages offer the best career opportunities in Nepal? Market analysis and learning roadmap for aspiring developers.",
    author: "Programming Instructor",
    date: "2024-01-03",
    category: "Programming",
    readTime: "9 min read",
    image: "/blog/programming-languages-nepal.jpg",
    tags: ["Programming", "Career", "Nepal", "Learning"]
  }
];

const categories = [
  { name: "All Posts", slug: "all", count: 15 },
  { name: "Web Development", slug: "web-development", count: 5 },
  { name: "Mobile Apps", slug: "mobile-apps", count: 3 },
  { name: "Digital Marketing", slug: "digital-marketing", count: 4 },
  { name: "SEO", slug: "seo", count: 2 },
  { name: "E-commerce", slug: "ecommerce", count: 3 },
  { name: "Programming", slug: "programming", count: 2 }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://aoneskill.com.np/blog#blog",
            "url": "https://aoneskill.com.np/blog",
            "name": "AOne Skills Nepal IT Blog",
            "description": "Latest insights on web development, mobile app development, digital marketing, SEO tips, and technology trends in Nepal.",
            "inLanguage": ["en", "ne"],
            "author": {
              "@type": "Organization",
              "name": "AOne Skills International Nepal"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AOne Skills International Nepal",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aoneskill.com.np/images/logo.png"
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Tech Insights & Tips
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              IT Blog Nepal
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Latest Tech Insights
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Web development tips, digital marketing strategies, programming tutorials, and technology trends specifically for Nepal's growing IT industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Featured Post
                  </span>
                  <span className="text-blue-200 text-sm">{blogPosts[0].date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-blue-200 text-sm mr-4">By {blogPosts[0].author}</span>
                    <span className="text-blue-200 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
                
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-sm">{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-500">
                        <span className="mr-4">By {post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Load More Articles
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <motion.div
                  className="bg-slate-50 rounded-2xl p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white transition-colors"
                      >
                        <span className="text-slate-700">{category.name}</span>
                        <span className="text-slate-500 text-sm">({category.count})</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get latest tech tips and insights directly in your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  className="bg-slate-50 rounded-2xl p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development", "Mobile Apps", "Digital Marketing", "SEO", "Nepal", 
                      "Business", "Programming", "E-commerce", "WordPress", "React"
                    ].map((tag, index) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                        className="px-3 py-1 bg-white text-slate-700 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
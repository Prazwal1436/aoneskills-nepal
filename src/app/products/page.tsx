"use client";
import Link from "next/link";
import { useDiscount } from "@/hooks/useDiscount";
import FloatingDiscountWidget from "@/components/FloatingDiscountWidget";

export default function Products() {
  const { discountState } = useDiscount();

  return (
    <div className="min-h-screen">
      <FloatingDiscountWidget />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 text-white py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Business
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              We do not sell ready‑use products. Every product is built as per your business needs, workflow, and budget.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-6 inline-block">
              {discountState.isActive ? (
                <>
                  <span className="font-semibold text-yellow-300 text-xl">🎉 Limited Time Offer - {discountState.discount}% OFF Custom Solutions</span>
                  <span className="block text-blue-100 text-sm mt-2">Your exclusive discount is active for custom software, web, and mobile projects.</span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-yellow-300 text-xl">🎰 Spin for Discount - Up to 15% OFF</span>
                  <span className="block text-blue-100 text-sm mt-2">Unlock exclusive savings on custom solutions built for your business.</span>
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

      {/* Custom Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built Specifically for Your Business</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We design and develop software, websites, and mobile apps that fit your exact requirements. No templates, no shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software",
                desc: "From inventory and accounting to school and hospital systems, we build solutions tailored to your workflow.",
              },
              {
                title: "Web & Mobile",
                desc: "Business websites, e‑commerce, and mobile apps built for performance, SEO, and conversion.",
              },
              {
                title: "Automation & Integration",
                desc: "Payment gateways, CRM, WhatsApp, and third‑party integrations to automate your operations.",
              }
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boosting Service */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Boosting Service</h2>
              <p className="text-lg text-slate-600 mb-6">
                We run Meta Ads, YouTube Ads, and full performance campaigns for Nepal‑based businesses. We manage targeting, creatives, and optimization to stabilize results.
              </p>
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="text-sm text-slate-500">Starting from</div>
                <div className="text-3xl font-bold text-slate-900 mt-2">$165</div>
                <div className="text-slate-600 mt-2">per campaign setup and management</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What’s Included</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Meta Ads (Facebook & Instagram)",
                  "YouTube Ads setup",
                  "Targeting & audience research",
                  "Creative guidance",
                  "Performance tracking & optimization"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tell Us Your Requirements</h2>
          <p className="text-lg text-blue-100 mb-8">We’ll propose the best solution and a clear roadmap tailored to your business.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

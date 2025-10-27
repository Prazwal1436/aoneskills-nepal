"use client";
import { useEffect } from 'react';
import Script from 'next/script';

interface SEOAnalyticsProps {
  pageTitle?: string;
  pageUrl?: string;
  customEvents?: Array<{
    eventName: string;
    parameters?: Record<string, any>;
  }>;
}

export default function SEOAnalytics({ pageTitle, pageUrl, customEvents }: SEOAnalyticsProps) {
  useEffect(() => {
    // Track page view in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-5Y2T9CWNX4', {
        page_title: pageTitle || document.title,
        page_location: pageUrl || window.location.href,
      });
    }

    // Track page view in Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Track custom events
    if (customEvents && customEvents.length > 0) {
      customEvents.forEach(event => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', event.eventName, event.parameters);
        }
      });
    }
  }, [pageTitle, pageUrl, customEvents]);

  // Schema.org JSON-LD for breadcrumbs
  const generateBreadcrumbSchema = () => {
    if (typeof window === 'undefined') return {};
    
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aoneskill.com.np"
      }
    ];

    pathSegments.forEach((segment, index) => {
      const url = `https://aoneskill.com.np/${pathSegments.slice(0, index + 1).join('/')}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": url
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  };

  return (
    <>
      {/* Dynamic Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema())
        }}
      />

      {/* Enhanced Event Tracking */}
      <Script id="enhanced-analytics" strategy="afterInteractive">
        {`
          // Enhanced click tracking
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            if (target) {
              const href = target.getAttribute('href');
              const text = target.textContent.trim();
              
              // Track outbound links
              if (href && (href.startsWith('http') && !href.includes('aoneskill.com.np'))) {
                gtag && gtag('event', 'click', {
                  event_category: 'outbound',
                  event_label: href,
                  transport_type: 'beacon'
                });
              }
              
              // Track phone clicks
              if (href && href.startsWith('tel:')) {
                gtag && gtag('event', 'phone_call', {
                  event_category: 'contact',
                  event_label: href.replace('tel:', ''),
                  value: 1
                });
              }
              
              // Track email clicks
              if (href && href.startsWith('mailto:')) {
                gtag && gtag('event', 'email_click', {
                  event_category: 'contact',
                  event_label: href.replace('mailto:', ''),
                  value: 1
                });
              }
              
              // Track WhatsApp clicks
              if (href && href.includes('wa.me')) {
                gtag && gtag('event', 'whatsapp_click', {
                  event_category: 'contact',
                  event_label: 'whatsapp',
                  value: 1
                });
              }
              
              // Track service page clicks
              if (href && href.includes('/services/')) {
                gtag && gtag('event', 'service_interest', {
                  event_category: 'services',
                  event_label: href,
                  value: 1
                });
              }
            }
          });
          
          // Enhanced form submission tracking
          document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.tagName === 'FORM') {
              const action = form.getAttribute('action') || 'unknown';
              
              gtag && gtag('event', 'form_submit', {
                event_category: 'engagement',
                event_label: action,
                value: 1
              });
              
              // Track contact form submissions
              if (action.includes('contact') || form.classList.contains('contact-form')) {
                gtag && gtag('event', 'contact_form_submit', {
                  event_category: 'lead',
                  event_label: 'contact_form',
                  value: 5
                });
                
                fbq && fbq('track', 'Lead');
              }
            }
          });
          
          // Scroll tracking for engagement
          let scrollTracked = false;
          window.addEventListener('scroll', function() {
            if (!scrollTracked && window.scrollY > window.innerHeight * 0.75) {
              gtag && gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: '75_percent',
                value: 1
              });
              scrollTracked = true;
            }
          });
          
          // Time on page tracking
          let startTime = Date.now();
          window.addEventListener('beforeunload', function() {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            if (timeOnPage > 10) { // Only track if more than 10 seconds
              gtag && gtag('event', 'timing_complete', {
                name: 'page_view_time',
                value: timeOnPage
              });
            }
          });
        `}
      </Script>

      {/* Service Worker Registration for PWA */}
      <Script id="sw-registration" strategy="afterInteractive">
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </Script>
    </>
  );
}

// Type declarations for global variables
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    fbq: (command: string, eventName: string, parameters?: any) => void;
    dataLayer: any[];
  }
}
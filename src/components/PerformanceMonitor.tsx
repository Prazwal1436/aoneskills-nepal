"use client";

import { useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined') {
      
      // Function to rate performance metrics
      const rateMetric = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
        switch (name) {
          case 'LCP': // Largest Contentful Paint
            return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
          case 'FID': // First Input Delay
            return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
          case 'CLS': // Cumulative Layout Shift
            return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
          case 'FCP': // First Contentful Paint
            return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
          case 'TTFB': // Time to First Byte
            return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
          default:
            return value <= 1000 ? 'good' : value <= 2000 ? 'needs-improvement' : 'poor';
        }
      };

      // Function to log performance with color coding
      const logPerformance = (metric: PerformanceMetric) => {
        const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
        console.log(`${color} ${metric.name}: ${metric.value}ms (${metric.rating})`);
        
        // Send to analytics if in production
        if (process.env.NODE_ENV === 'production' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: metric.name,
            value: Math.round(metric.value),
            custom_map: { 'metric_rating': metric.rating }
          });
        }
      };

      // Core Web Vitals Observer
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: PerformanceEntry) => {
          let metricName = '';
          let value = 0;

          if (entry.entryType === 'largest-contentful-paint') {
            metricName = 'LCP';
            value = (entry as PerformancePaintTiming).startTime;
          } else if (entry.entryType === 'first-input') {
            metricName = 'FID';
            value = (entry as PerformanceEventTiming).processingStart - entry.startTime;
          } else if (entry.entryType === 'layout-shift') {
            metricName = 'CLS';
            value = (entry as any).value;
          } else if (entry.name === 'first-contentful-paint') {
            metricName = 'FCP';
            value = (entry as PerformancePaintTiming).startTime;
          }

          if (metricName) {
            const metric: PerformanceMetric = {
              name: metricName,
              value: value,
              rating: rateMetric(metricName, value)
            };
            logPerformance(metric);
          }
        });
      });

      // Observe different performance entries
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        observer.observe({ entryTypes: ['first-input'] });
        observer.observe({ entryTypes: ['layout-shift'] });
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('Some performance observers not supported:', e);
      }

      // Navigation Timing
      const measureNavigationTiming = () => {
        const timing = performance.timing;
        const navigation = performance.navigation;
        
        const metrics = {
          'DNS Lookup': timing.domainLookupEnd - timing.domainLookupStart,
          'TCP Connection': timing.connectEnd - timing.connectStart,
          'Server Response': timing.responseEnd - timing.requestStart,
          'DOM Processing': timing.domContentLoadedEventEnd - timing.responseEnd,
          'Page Load': timing.loadEventEnd - timing.navigationStart,
          'TTFB': timing.responseStart - timing.navigationStart,
        };

        console.log('📊 A.One Skills - Navigation Performance:');
        Object.entries(metrics).forEach(([name, value]) => {
          const metric: PerformanceMetric = {
            name,
            value,
            rating: rateMetric(name === 'TTFB' ? 'TTFB' : name, value)
          };
          logPerformance(metric);
        });

        // Log navigation type
        const navType = navigation.type === 0 ? 'Navigate' : 
                       navigation.type === 1 ? 'Reload' : 
                       navigation.type === 2 ? 'Back/Forward' : 'Reserved';
        console.log(`🧭 Navigation Type: ${navType}`);
      };

      // Resource Performance
      const measureResourceTiming = () => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        
        const resourceStats = {
          images: [] as any[],
          scripts: [] as any[],
          stylesheets: [] as any[],
          fonts: [] as any[],
          other: [] as any[]
        };

        resources.forEach((resource) => {
          const duration = resource.responseEnd - resource.startTime;
          const type = resource.name.includes('.js') ? 'scripts' :
                      resource.name.includes('.css') ? 'stylesheets' :
                      resource.name.includes('.woff') || resource.name.includes('.ttf') ? 'fonts' :
                      resource.name.includes('.png') || resource.name.includes('.jpg') || resource.name.includes('.svg') ? 'images' :
                      'other';
          
          resourceStats[type].push({
            name: resource.name.split('/').pop() || resource.name,
            duration: Math.round(duration),
            size: resource.transferSize || 0
          });
        });

        console.log('📦 Resource Performance:');
        Object.entries(resourceStats).forEach(([type, resources]) => {
          if (resources.length > 0) {
            const totalDuration = resources.reduce((sum: number, r: any) => sum + r.duration, 0);
            const totalSize = resources.reduce((sum: number, r: any) => sum + r.size, 0);
            console.log(`${type}: ${resources.length} files, ${Math.round(totalDuration)}ms total, ${Math.round(totalSize/1024)}KB`);
          }
        });
      };

      // Memory Usage (if available)
      const measureMemoryUsage = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          console.log('💾 Memory Usage:', {
            used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
            total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
            limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
          });
        }
      };

      // Page load event
      window.addEventListener('load', () => {
        setTimeout(() => {
          measureNavigationTiming();
          measureResourceTiming();
          measureMemoryUsage();
        }, 1000);
      });

      // Performance Summary
      const logPerformanceSummary = () => {
        console.log('🎯 A.One Skills Website - Performance Monitor Active');
        console.log('================================================');
        console.log('🟢 Good | 🟡 Needs improvement | 🔴 Poor');
        console.log('LCP: ≤2.5s | FID: ≤100ms | CLS: ≤0.1 | FCP: ≤1.8s | TTFB: ≤800ms');
        console.log('================================================');
      };

      // Initial summary
      setTimeout(logPerformanceSummary, 500);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
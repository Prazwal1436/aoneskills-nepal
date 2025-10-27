"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useDiscount } from "../hooks/useDiscount";

export default function FloatingDiscountWidget() {
  const { discountState, getRemainingTime, applyDiscountToPrice } = useDiscount();

  if (!discountState.isActive) return null;

  const remainingTime = getRemainingTime();
  
  // Calculate sample savings for display
  const sampleSavings = applyDiscountToPrice(100000); // Sample NPR 100,000 service

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        className="fixed bottom-6 right-6 z-50 max-w-sm"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-green-400 overflow-hidden relative"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div>
                <div className="font-bold text-xl text-green-600">{discountState.discount}% OFF Active!</div>
                <div className="text-green-500 text-sm font-medium">
                  {remainingTime && `⏰ ${remainingTime.hours}h ${remainingTime.minutes}m remaining`}
                </div>
              </div>
            </div>

            {/* Savings Display */}
            <div className="bg-white rounded-xl p-3 border border-green-200 mb-3">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">You're saving on every service:</div>
                <div className="text-lg font-bold text-green-600">
                  NPR {sampleSavings.savings.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">per NPR 100,000 service</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-green-600 font-medium text-sm">
                <span>🎉</span>
                <span>All services discounted!</span>
                <span>🎉</span>
              </div>
            </div>

            {/* Pulse Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DiscountSpinnerProps {
  onDiscountApplied?: (discount: number) => void;
}

export default function DiscountSpinner({ onDiscountApplied }: DiscountSpinnerProps) {
  const [showOffer, setShowOffer] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Apply discount automatically and notify parent
  useEffect(() => {
    const discount = 15;
    localStorage.setItem('siteDiscount', discount.toString());
    localStorage.setItem('discountExpiry', (Date.now() + 24 * 60 * 60 * 1000).toString());
    
    if (onDiscountApplied) {
      onDiscountApplied(discount);
    }
    
    window.dispatchEvent(new CustomEvent('discountApplied', { 
      detail: { discount: discount } 
    }));
  }, [onDiscountApplied]);

  const closeOffer = () => {
    setShowOffer(false);
  };

  if (!showOffer) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-red-900/95 via-orange-900/95 to-yellow-900/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,165,0,0.15),transparent_70%)]" />
        
        <motion.div
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative bg-gradient-to-br from-white via-orange-50 to-yellow-50 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border-4 border-yellow-400"
        >
          {/* Urgent Header */}
          <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 p-6 text-white text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative text-4xl font-black mb-2 tracking-wide"
            >
              🚨 LIMITED TIME OFFER! 🚨
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative text-xl font-bold opacity-90"
            >
              This deal expires soon!
            </motion.p>
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeOffer}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10 group backdrop-blur-sm"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Main Content */}
          <div className="relative p-8">
            {/* Massive Discount Display */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="text-center mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-8xl font-black bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4"
                >
                  15% OFF
                </motion.div>
                
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12"
                >
                  SAVE NOW!
                </motion.div>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-2xl font-bold text-gray-800 mb-2"
              >
                Premium Discount Applied!
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-lg text-gray-600"
              >
                Save thousands on all our premium services
              </motion.p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-2xl p-6 mb-8 border-2 border-orange-300"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">⏰ Offer Expires In:</h3>
                <p className="text-red-600 font-semibold">Don't miss out on this incredible savings!</p>
              </div>
              
              <div className="flex justify-center items-center gap-6">
                {[
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    animate={{ 
                      scale: item.label === 'Seconds' ? [1, 1.1, 1] : [1],
                      color: item.value < 5 && item.label === 'Minutes' ? ['#000', '#dc2626', '#000'] : ['#000']
                    }}
                    transition={{ 
                      duration: item.label === 'Seconds' ? 1 : 2,
                      repeat: Infinity
                    }}
                    className="text-center"
                  >
                    <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-200 min-w-[80px]">
                      <div className="text-3xl font-black text-red-600">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-center"
            >
              <motion.button
                onClick={closeOffer}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <span className="text-2xl mr-3">🚀</span>
                  Claim My 15% Discount!
                  <span className="text-2xl ml-3">💎</span>
                </div>
              </motion.button>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="text-sm text-gray-500 mt-4"
              >
                🎯 Automatically applied to all services • 💫 Valid for 24 hours • ⚡ Limited time only
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

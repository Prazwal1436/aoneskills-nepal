"use client";
import { useState, useEffect } from 'react';

export interface DiscountState {
  discount: number;
  isActive: boolean;
  expiryTime: number | null;
}

export function useDiscount() {
  const [discountState, setDiscountState] = useState<DiscountState>({
    discount: 0,
    isActive: false,
    expiryTime: null
  });

  useEffect(() => {
    // Check for existing discount on mount
    checkExistingDiscount();

    // Listen for discount applied events
    const handleDiscountApplied = (event: CustomEvent) => {
      const { discount } = event.detail;
      setDiscountState({
        discount,
        isActive: true,
        expiryTime: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      });
    };

    window.addEventListener('discountApplied', handleDiscountApplied as EventListener);

    // Check expiry periodically
    const interval = setInterval(checkExistingDiscount, 60000); // Check every minute

    return () => {
      window.removeEventListener('discountApplied', handleDiscountApplied as EventListener);
      clearInterval(interval);
    };
  }, []);

  const checkExistingDiscount = () => {
    try {
      const storedDiscount = localStorage.getItem('siteDiscount');
      const storedExpiry = localStorage.getItem('discountExpiry');

      if (storedDiscount && storedExpiry) {
        const discount = parseInt(storedDiscount);
        const expiryTime = parseInt(storedExpiry);

        if (Date.now() < expiryTime) {
          // Discount is still valid
          setDiscountState({
            discount,
            isActive: true,
            expiryTime
          });
        } else {
          // Discount has expired
          localStorage.removeItem('siteDiscount');
          localStorage.removeItem('discountExpiry');
          setDiscountState({
            discount: 0,
            isActive: false,
            expiryTime: null
          });
        }
      }
    } catch (error) {
      console.error('Error checking discount:', error);
    }
  };

  const applyDiscountToPrice = (originalPrice: number): { 
    originalPrice: number;
    discountedPrice: number;
    savings: number;
    discountPercentage: number;
  } => {
    if (!discountState.isActive) {
      return {
        originalPrice,
        discountedPrice: originalPrice,
        savings: 0,
        discountPercentage: 0
      };
    }

    const discountAmount = (originalPrice * discountState.discount) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return {
      originalPrice,
      discountedPrice,
      savings: discountAmount,
      discountPercentage: discountState.discount
    };
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ne-NP', {
      style: 'currency',
      currency: 'NPR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getRemainingTime = (): { hours: number; minutes: number } | null => {
    if (!discountState.expiryTime) return null;

    const remaining = discountState.expiryTime - Date.now();
    if (remaining <= 0) return null;

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

    return { hours, minutes };
  };

  return {
    discountState,
    applyDiscountToPrice,
    formatPrice,
    getRemainingTime,
    isDiscountActive: discountState.isActive
  };
}
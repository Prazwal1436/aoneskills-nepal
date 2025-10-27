"use client";
import { useDiscount } from "../hooks/useDiscount";

interface PriceDisplayProps {
  originalPrice: number;
  className?: string;
  showSavings?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function PriceDisplay({ 
  originalPrice, 
  className = "", 
  showSavings = true,
  size = 'md' 
}: PriceDisplayProps) {
  const { applyDiscountToPrice, formatPrice, discountState } = useDiscount();
  const priceData = applyDiscountToPrice(originalPrice);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  if (!discountState.isActive) {
    return (
      <div className={`${sizeClasses[size]} font-bold ${className}`}>
        NPR {originalPrice.toLocaleString()}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Original Price (crossed out) */}
        <div className={`${sizeClasses[size]} text-gray-400 line-through`}>
          NPR {priceData.originalPrice.toLocaleString()}
        </div>
        
        {/* Discounted Price */}
        <div className={`${sizeClasses[size]} font-bold text-green-600`}>
          NPR {priceData.discountedPrice.toLocaleString()}
        </div>
        
        {/* Discount Badge */}
        <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
          -{priceData.discountPercentage}%
        </span>
      </div>
      
      {/* Savings Display */}
      {showSavings && (
        <div className="text-sm text-green-600 font-medium mt-1">
          You save NPR {priceData.savings.toLocaleString()}!
        </div>
      )}
    </div>
  );
}

// Range Price Display Component
interface PriceRangeDisplayProps {
  minPrice: number;
  maxPrice: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function PriceRangeDisplay({ 
  minPrice, 
  maxPrice, 
  className = "",
  size = 'md' 
}: PriceRangeDisplayProps) {
  const { applyDiscountToPrice, discountState } = useDiscount();
  
  const minPriceData = applyDiscountToPrice(minPrice);
  const maxPriceData = applyDiscountToPrice(maxPrice);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  if (!discountState.isActive) {
    return (
      <div className={`${sizeClasses[size]} font-bold ${className}`}>
        NPR {minPrice.toLocaleString()} - {maxPrice.toLocaleString()}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Original Price Range (crossed out) */}
        <div className={`${sizeClasses[size]} text-gray-400 line-through`}>
          NPR {minPrice.toLocaleString()} - {maxPrice.toLocaleString()}
        </div>
        
        {/* Discount Badge */}
        <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
          -{discountState.discount}%
        </span>
      </div>
      
      {/* Discounted Price Range */}
      <div className={`${sizeClasses[size]} font-bold text-green-600 mt-1`}>
        NPR {minPriceData.discountedPrice.toLocaleString()} - {maxPriceData.discountedPrice.toLocaleString()}
      </div>
    </div>
  );
}
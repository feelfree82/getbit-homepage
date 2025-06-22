import { useEffect, useRef, useState } from 'react';

// Using CoinGecko's public API with error handling and retry logic
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr&precision=2';
const POLLING_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds

interface PriceData {
  bitcoin?: {
    inr: number;
  };
}

const fetchBTCPrice = async (): Promise<number | null> => {
  try {
    const response = await fetch(COINGECKO_API, {
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data: PriceData = await response.json();
    return data.bitcoin?.inr || null;
  } catch (error) {
    console.error('Error fetching BTC price:', error);
    return null;
  }
};

const LiveBTCPrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [prevPrice, setPrevPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updatePrice = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newPrice = await fetchBTCPrice();
      
      if (newPrice !== null) {
        setPrevPrice(price);
        setPrice(newPrice);
      } else if (price === null) {
        // Only set error if we don't have any price yet
        setError('Unable to fetch price');
      }
    } catch (err) {
      console.error('Error in updatePrice:', err);
      if (price === null) {
        setError('Error fetching price');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch and setup polling
  useEffect(() => {
    let isMounted = true;

    const setupPolling = () => {
      updatePrice();
      
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Set up new interval
      intervalRef.current = setInterval(() => {
        if (document.visibilityState === 'visible') {
          updatePrice();
        }
      }, POLLING_INTERVAL);
    };

    // Setup polling when component mounts
    setupPolling();

    // Cleanup on unmount
    return () => {
      isMounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    };
  }, []);

  // Handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updatePrice();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Format price with Indian Rupee symbol and proper formatting
  const formatPrice = (value: number | null) => {
    if (value === null) return '';
    return `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Animation class for price change
  const priceChangeClass = prevPrice !== null && price !== null && prevPrice !== price
    ? 'price-update-animate'
    : '';

  return (
    <div 
      className={`font-dm-mono text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 font-bold btc-orange-text btc-orange-bg ${
        isLoading ? 'opacity-80' : ''
      }`} 
      style={{ minWidth: '200px', fontVariantNumeric: 'tabular-nums' }} 
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className="flex items-center justify-center space-x-1">
        <span>BTC/INR:</span>
        {isLoading ? (
          <span className="inline-flex items-center">
            <span className="inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin mr-1"></span>
            <span>Loading...</span>
          </span>
        ) : error ? (
          <span className="text-red-100">{error}</span>
        ) : price !== null ? (
          <span className={`${priceChangeClass} transition-all duration-300`}>
            {formatPrice(price)}
          </span>
        ) : (
          <span>Unavailable</span>
        )}
      </div>
    </div>
  );
};

export default LiveBTCPrice;

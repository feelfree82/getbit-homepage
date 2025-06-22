import { useEffect, useRef, useState } from 'react';

// For DEV: Use AllOrigins CORS proxy with CoinGecko BTC/INR endpoint
// For production: Use your own backend or serverless function to avoid CORS and rate limits.
const COINGECKO_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr';
const ALLOWED_ORIGINS_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(COINGECKO_URL)}`;

const fetchBTCINR = async () => {
  try {
    const res = await fetch(ALLOWED_ORIGINS_URL);
    const data = await res.json();
    const parsed = JSON.parse(data.contents);
    return parsed.bitcoin.inr;
  } catch {
    return null;
  }
};

const LiveBTCPrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [prevPrice, setPrevPrice] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let mounted = true;
    const getPrice = async () => {
      const newPrice = await fetchBTCINR();
      if (mounted && newPrice && newPrice !== price) {
        setPrevPrice(price);
        setPrice(newPrice);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }
    };
    getPrice();
    intervalRef.current = setInterval(getPrice, 5000);
    return () => {
      mounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [price]);

  const prevChars = prevPrice ? `₹${prevPrice.toLocaleString('en-IN')}`.split('') : [];
  const chars = price ? `₹${price.toLocaleString('en-IN')}`.split('') : [];

  return (
    <div className="font-dm-mono text-base md:text-lg px-4 py-2 rounded-lg transition-all duration-500 font-bold btc-orange-text btc-orange-bg" style={{ minWidth: 220, fontVariantNumeric: 'tabular-nums' }} aria-live="polite">
      Today’s price: {price === null ? (
        <span className="btc-loading-anim">Fetching BTC price<span className="btc-ellipsis"><span>.</span><span>.</span><span>.</span></span></span>
      ) : (
        chars.map((char, idx) => (
          <span
            key={idx}
            className={`split-flap-digit${prevChars[idx] !== char && prevChars.length === chars.length ? ' split-flap-animate' : ''}`}
          >
            {char}
          </span>
        ))
      )}
    </div>
  );
};

export default LiveBTCPrice;

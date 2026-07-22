import React, { useMemo } from 'react';

export default function SolarSystemBackground() {
  // Generate random twinkling stars
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: `star-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.8 + 0.6}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 3}s`
    }));
  }, []);

  // Generate slow drifting numerology numbers (1-9) in the background
  const floatingNumbers = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const num = Math.floor(Math.random() * 9) + 1; // Numbers 1 to 9
      const fontStyles = [
        'font-cinzel font-black',
        'font-serif font-bold italic',
        'font-poppins font-semibold',
        'font-garamond font-bold italic'
      ];
      const randomFont = fontStyles[Math.floor(Math.random() * fontStyles.length)];
      
      return {
        id: `num-${i}`,
        value: num,
        left: `${Math.random() * 90 + 5}%`, // Keep inside 5% to 95% width boundaries
        fontSize: `${Math.random() * 22 + 14}px`, // Sizes between 14px and 36px
        delay: `${Math.random() * 20}s`, // Stagger starting points
        duration: `${Math.random() * 18 + 12}s`, // Float speed
        opacity: Math.random() * 0.25 + 0.15, // Faded background look (15% to 40% opacity)
        fontClass: randomFont,
        colorClass: i % 2 === 0 ? 'text-[#C59B27]' : 'text-purple-300'
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-cosmic-gradient z-0">
      {/* Star Field Backdrop */}
      <div className="absolute inset-0 opacity-50">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white celestial-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>

      {/* Rotating Sacred Geometry Astrology Grid Watermark (Centered background) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none scale-75 sm:scale-100">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin" style={{ animationDuration: '180s' }}>
          <circle cx="300" cy="300" r="280" stroke="#C59B27" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="300" cy="300" r="210" stroke="#C59B27" strokeWidth="1" />
          <circle cx="300" cy="300" r="140" stroke="#C59B27" strokeWidth="1" strokeDasharray="12 4" />
          
          {/* Hexagram Star Grid Lines */}
          <polygon points="300,50 495,362 105,362" stroke="#C59B27" strokeWidth="1.2" />
          <polygon points="300,570 105,258 495,258" stroke="#C59B27" strokeWidth="1.2" />
          
          {/* Inner Sacred Matrix lines */}
          {Array.from({ length: 12 }).map((_, idx) => {
            const angle = (idx * 30 * Math.PI) / 180;
            const x2 = 300 + 280 * Math.cos(angle);
            const y2 = 300 + 280 * Math.sin(angle);
            return (
              <line
                key={idx}
                x1="300"
                y1="300"
                x2={x2}
                y2={y2}
                stroke="#C59B27"
                strokeWidth="1.2"
              />
            );
          })}
        </svg>
      </div>

      {/* Floating Numerology Particles (Faded, drifting numbers 1-9) */}
      <div className="absolute inset-0">
        {floatingNumbers.map(num => (
          <div
            key={num.id}
            className={`float-number-ani ${num.fontClass} ${num.colorClass} select-none`}
            style={{
              left: num.left,
              fontSize: num.fontSize,
              animationDelay: `-${num.delay}`,
              animationDuration: num.duration,
              opacity: num.opacity
            }}
          >
            {num.value}
          </div>
        ))}
      </div>
    </div>
  );
}


import React from "react";

const LogoTicker: React.FC = () => {
  // Placeholder client logos (replace with actual client logos later)
  const logoUrls = [
    "https://placehold.co/200x100/f8f9fa/6c757d?text=Client+1",
    "https://placehold.co/200x100/f8f9fa/6c757d?text=Client+2",
    "https://placehold.co/200x100/f8f9fa/6c757d?text=Client+3",
    "https://placehold.co/200x100/f8f9fa/6c757d?text=Client+4",
    "https://placehold.co/200x100/f8f9fa/6c757d?text=Client+5",
    "https://placehold.co/200x100/f8f9fa/6c757d?text=Client+6",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-8">
      <div className="flex w-full">
        {/* First set of logos */}
        <div className="logo-slider flex animate-marquee whitespace-nowrap">
          {logoUrls.map((logo, index) => (
            <div key={`first-${index}`} className="mx-8 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className="h-8 w-auto transition-all duration-300 grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set of logos for seamless looping */}
        <div className="logo-slider flex animate-marquee whitespace-nowrap">
          {logoUrls.map((logo, index) => (
            <div key={`second-${index}`} className="mx-8 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className="h-8 w-auto transition-all duration-300 grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;

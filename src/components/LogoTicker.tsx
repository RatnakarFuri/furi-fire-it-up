
import React from "react";

const LogoTicker: React.FC = () => {
  // Use the provided client logo images
  const logoUrls = [
    "/lovable-uploads/2510517b-a738-43ba-8299-f2025c55a02a.png", // Fortune
    "/lovable-uploads/7b6ca7c2-f1f8-4c86-94d3-5512fba146d6.png", // Bublee
    "/lovable-uploads/bdbb9218-319d-4b1b-b732-46d5aa585217.png", // The Park Hotels
    "/lovable-uploads/9b493b82-3a15-4f2c-93a5-5e3aa94f0074.png", // Galyx Naturals
    "/lovable-uploads/e04a1ace-442a-47a5-b211-10529be93487.png", // Naturals Salon
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-8">
      <div className="flex w-full">
        {/* First set of logos */}
        <div className="logo-slider flex animate-marquee-fast whitespace-nowrap">
          {logoUrls.map((logo, index) => (
            <div key={`first-${index}`} className="mx-8 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className="h-12 w-auto transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set of logos for seamless looping */}
        <div className="logo-slider flex animate-marquee-fast whitespace-nowrap">
          {logoUrls.map((logo, index) => (
            <div key={`second-${index}`} className="mx-8 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className="h-12 w-auto transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;

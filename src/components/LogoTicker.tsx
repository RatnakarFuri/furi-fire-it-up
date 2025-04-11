
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
    <div className="logo-ticker bg-gray-50 py-8">
      <div className="logo-track">
        {logoUrls.concat(logoUrls).map((logo, index) => (
          <img 
            key={index} 
            src={logo} 
            alt={`Client ${index % logoUrls.length + 1}`} 
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;


import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on mount
    const elements = [headlineRef.current, subheadlineRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add("opacity-100");
          el.classList.remove("translate-y-10");
        }, 300 * (index + 1));
      }
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 md:py-24 overflow-hidden">
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700"
          >
            Feed UR Idea.<br />
            <span className="text-furi-red">We'll Fire It Into the Future.</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-gray-700 mb-10 opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            FURI is your AI-powered digital marketing partner — creating data-intelligent, emotionally resonant campaigns.
          </p>
          
          <div 
            ref={ctaRef}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-500"
          >
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center space-x-2 text-lg group"
            >
              <span>Let's Fire It Up</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Background stylistic elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-furi-red/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-furi-red/5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;

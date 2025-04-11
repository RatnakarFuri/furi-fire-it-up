
import React, { useEffect } from "react";
import { Mail } from "lucide-react";

const Contact: React.FC = () => {
  // This useEffect will load the Jotform script when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/251001055179447';
    script.async = true;
    
    // Append the script to the jotform-container div
    const container = document.getElementById('jotform-container');
    if (container) {
      container.appendChild(script);
    }
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Let's discuss how we can help you achieve your marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-furi-red/10 text-furi-red mr-4">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-bold">admin@furiglobal.in</h2>
            </div>
          </div>
          
          {/* Jotform Container */}
          <div className="max-w-3xl mx-auto card-neumorphic p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
            <div id="jotform-container" className="jotform-container">
              {/* Jotform will be loaded here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import React from "react";

const Industries: React.FC = () => {
  const industries = [
    {
      name: "Hospitality",
      description: "Drive occupancy rates and enhance guest experiences through targeted digital strategies tailored for hotels, restaurants, and leisure facilities.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Hospitality"
    },
    {
      name: "Education",
      description: "Boost enrollment, engage students, and build institutional reputation through strategic content and communication campaigns.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Education"
    },
    {
      name: "Health & Wellness",
      description: "Connect with health-conscious consumers and promote wellness offerings through authentic, value-driven marketing strategies.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Health+%26+Wellness"
    },
    {
      name: "SaaS",
      description: "Generate qualified leads and reduce churn through targeted acquisition campaigns and engaging user onboarding experiences.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=SaaS"
    },
    {
      name: "E-commerce",
      description: "Optimize the customer journey from discovery to purchase with data-driven strategies that boost conversions and foster loyalty.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=E-commerce"
    },
    {
      name: "Real Estate",
      description: "Showcase properties and build developer brands through immersive visual content and targeted advertising strategies.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Real+Estate"
    },
    {
      name: "Fashion & Beauty",
      description: "Create aspirational brand experiences that connect with trend-conscious consumers through visual storytelling and influencer partnerships.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Fashion+%26+Beauty"
    },
    {
      name: "Nonprofits",
      description: "Amplify your mission and drive donor engagement through compelling storytelling and impactful campaign strategies.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Nonprofits"
    },
    {
      name: "Logistics",
      description: "Build brand trust and visibility in the competitive logistics and supply chain sector through strategic B2B marketing approaches.",
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Logistics"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Industries</h1>
            <p className="text-xl">
              Specialized marketing strategies for diverse sectors, informed by deep industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="card-neumorphic overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{industry.name}</h2>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-specific expertise for your unique challenges</h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss how our tailored strategies can address your industry-specific marketing needs.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;


import React from "react";
import { Palette, MessageSquare, BarChart3, Video, Cpu, SparkleIcon } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: "Brand Strategy & Design",
      description: "Positioning, Personality, Identity, Packaging, Guidelines",
      details: "Craft a compelling brand story and visual identity that resonates with your audience and sets you apart from competitors."
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Brand Communication",
      description: "Content Creation, Social Media, Influencer Marketing, ORM, WhatsApp",
      details: "Develop consistent, engaging communication across all channels to build meaningful connections with your audience."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Growth Marketing",
      description: "Paid Campaigns, SEO, E-commerce, Analytics",
      details: "Data-driven strategies to drive measurable business growth through targeted acquisition and retention campaigns."
    },
    {
      icon: <Video size={40} />,
      title: "Video Production",
      description: "Brand Films, Shorts (IG Reels, YT Shorts), Podcasts",
      details: "High-quality video content that engages audiences and tells your brand story across multiple platforms."
    },
    {
      icon: <Cpu size={40} />,
      title: "Creative Technology",
      description: "WhatsApp Bots, Conversational AI, Generative AI, Web/App Dev",
      details: "Innovative technological solutions that enhance customer experiences and streamline business processes."
    },
    {
      icon: <SparkleIcon size={40} />,
      title: "SmartCampaigns™ by FURI",
      description: "AI Targeting, Predictive Optimization, Cross-Platform Strategy",
      details: "Our proprietary AI-powered marketing solution that leverages predictive analytics to deliver exceptional results."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Services</h1>
            <p className="text-xl">
              Comprehensive digital marketing solutions powered by AI and human creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-neumorphic p-8 flex flex-col">
                <div className="text-furi-red mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 font-medium mb-4">{service.description}</p>
                <p className="text-gray-600">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital presence?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Get in touch with us to discuss how we can help you achieve your marketing goals.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

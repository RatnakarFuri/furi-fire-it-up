
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BarChart, Users } from "lucide-react";
import Hero from "../components/Hero";
import LogoTicker from "../components/LogoTicker";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Logo Ticker */}
      <LogoTicker />

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine AI-powered insights with human creativity to deliver impactful marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card-neumorphic p-8 flex flex-col min-h-[320px]">
              <div className="mb-4 text-furi-red">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Strategy & Design</h3>
              <p className="text-gray-600 mb-6">
                Create a distinctive brand identity that resonates with your audience through strategic positioning and compelling design.
              </p>
              <Link to="/services" className="mt-auto inline-flex items-center text-furi-red hover:underline">
                <span>Learn more</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="card-neumorphic p-8 flex flex-col min-h-[320px]">
              <div className="mb-4 text-furi-red">
                <BarChart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Marketing</h3>
              <p className="text-gray-600 mb-6">
                Data-driven strategies to accelerate your business growth through targeted campaigns, SEO, and analytics.
              </p>
              <Link to="/services" className="mt-auto inline-flex items-center text-furi-red hover:underline">
                <span>Learn more</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="card-neumorphic p-8 flex flex-col min-h-[320px]">
              <div className="mb-4 text-furi-red">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creative Technology</h3>
              <p className="text-gray-600 mb-6">
                Innovative tech solutions including conversational AI, generative content, and responsive web applications.
              </p>
              <Link to="/services" className="mt-auto inline-flex items-center text-furi-red hover:underline">
                <span>Learn more</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center">
              <span>View All Services</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Snapshot */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored strategies for diverse sectors, informed by deep industry knowledge.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Hospitality",
              "Education",
              "Health & Wellness",
              "SaaS",
              "E-commerce",
              "Real Estate",
              "Fashion & Beauty",
              "Nonprofits",
            ].map((industry, index) => (
              <Link
                key={index}
                to="/industries"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center hover:text-furi-red"
              >
                {industry}
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries" className="btn-primary inline-flex items-center">
              <span>Explore Industries</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SmartCampaigns™ Banner */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">SmartCampaigns™ by FURI</h2>
            <p className="text-xl mb-10">
              Our proprietary AI-powered marketing solution that leverages predictive analytics and cross-platform strategy to deliver exceptional results.
            </p>
            <Link to="/services" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center">
              <span>Learn About SmartCampaigns™</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results for real businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-neumorphic p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">CEO, TechStart</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "FURI transformed our digital presence, delivering a 200% increase in qualified leads within just three months. Their AI-powered approach gave us insights we never had before."
              </blockquote>
            </div>

            <div className="card-neumorphic p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Marketing Director, Wellness Co</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "The team at FURI understood our vision from day one. Their brand redesign and growth strategy completely revitalized our market position. We couldn't be happier with the results."
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/impact" className="btn-primary inline-flex items-center">
              <span>View Success Stories</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-furi-red to-red-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Fire Up Your Marketing?</h2>
            <p className="text-xl mb-10">
              Let's collaborate to create data-intelligent, emotionally resonant campaigns that drive real business growth.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-furi-red hover:bg-gray-100 inline-flex items-center">
              <span>Get Started</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

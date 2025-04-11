
import React from "react";
import { ArrowUp, BarChart } from "lucide-react";

const Impact: React.FC = () => {
  const caseStudies = [
    {
      client: "TechStart SaaS Platform",
      challenge: "Low conversion rate and high customer acquisition costs",
      solution: "Implemented AI-powered content strategy and optimized customer journey",
      results: [
        "200% increase in qualified leads",
        "45% reduction in customer acquisition cost",
        "32% improvement in trial-to-paid conversion"
      ],
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=TechStart+Case+Study"
    },
    {
      client: "Wellness Co Rebrand",
      challenge: "Outdated brand perception limiting market expansion",
      solution: "Complete brand redesign and digital presence overhaul",
      results: [
        "156% increase in social media engagement",
        "87% improvement in brand perception metrics",
        "42% growth in new customer acquisition"
      ],
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Wellness+Co+Case+Study"
    },
    {
      client: "Luxury Hotel Chain",
      challenge: "Declining direct bookings and over-reliance on OTAs",
      solution: "Implemented SmartCampaigns™ for targeted acquisition",
      results: [
        "78% increase in direct bookings",
        "52% reduction in OTA commission fees",
        "124% ROI on marketing spend"
      ],
      image: "https://placehold.co/600x400/f8f9fa/6c757d?text=Luxury+Hotel+Case+Study"
    }
  ];

  const testimonials = [
    {
      quote: "FURI transformed our digital presence with strategies that not only looked good but delivered measurable results. Their team truly understands how to balance creativity with data-driven decisions.",
      author: "Sarah Johnson",
      title: "CEO, TechStart",
      image: "https://placehold.co/100x100/f8f9fa/6c757d?text=SJ"
    },
    {
      quote: "Working with FURI has been a game-changer for our brand. Their deep understanding of our industry challenges and creative approach to solving them has directly impacted our bottom line.",
      author: "Michael Chen",
      title: "Marketing Director, Wellness Co",
      image: "https://placehold.co/100x100/f8f9fa/6c757d?text=MC"
    },
    {
      quote: "The team at FURI brought a level of insight and execution that exceeded our expectations. Their SmartCampaigns™ approach delivered ROI beyond what we thought possible.",
      author: "Amanda Roberts",
      title: "VP Marketing, Luxury Hotels",
      image: "https://placehold.co/100x100/f8f9fa/6c757d?text=AR"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl">
              Real results for real businesses. See how we've helped our clients transform their digital presence and achieve meaningful business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies</h2>
          
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={study.image} 
                    alt={study.client} 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{study.client}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowUp className="text-furi-red mt-1 mr-2" size={16} />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Data-Driven Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-neumorphic p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-furi-red/10 text-furi-red mb-4">
                <ArrowUp size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">78%</h3>
              <p className="text-gray-600">Average increase in conversion rates</p>
            </div>
            
            <div className="card-neumorphic p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-furi-red/10 text-furi-red mb-4">
                <BarChart size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">4.2x</h3>
              <p className="text-gray-600">Average ROI on marketing spend</p>
            </div>
            
            <div className="card-neumorphic p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-furi-red/10 text-furi-red mb-4">
                <ArrowUp size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">52%</h3>
              <p className="text-gray-600">Reduction in customer acquisition costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-neumorphic p-8">
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-furi-red text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to achieve similar results?</h2>
            <p className="text-xl mb-10">
              Let us show you how our data-intelligent, emotionally resonant approach can transform your business.
            </p>
            <a href="/contact" className="btn-primary bg-white text-furi-red hover:bg-gray-100">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

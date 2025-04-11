
import React from "react";
import { ShieldCheck, Heart, Lightbulb, Rocket } from "lucide-react";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex brings 15+ years of experience in digital marketing and AI innovation to lead FURI's vision of data-intelligent, emotionally resonant marketing.",
      image: "https://placehold.co/300x300/f8f9fa/6c757d?text=AJ"
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      bio: "With a background in both traditional and digital design, Priya leads our creative team in crafting visually stunning, strategically sound brand experiences.",
      image: "https://placehold.co/300x300/f8f9fa/6c757d?text=PP"
    },
    {
      name: "David Kim",
      role: "Head of AI Strategy",
      bio: "David combines deep expertise in machine learning with marketing acumen to develop our proprietary SmartCampaigns™ technology.",
      image: "https://placehold.co/300x300/f8f9fa/6c757d?text=DK"
    },
    {
      name: "Sophia Chen",
      role: "Client Success Director",
      bio: "Sophia ensures our clients receive exceptional service and strategic guidance throughout their partnership with FURI.",
      image: "https://placehold.co/300x300/f8f9fa/6c757d?text=SC"
    }
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Integrity",
      description: "We believe in transparent practices, honest communication, and ethical AI implementation in all our work."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Empathy",
      description: "We center human emotions and experiences in our AI-powered strategies, creating marketing that resonates on a deeper level."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation",
      description: "We continuously explore new technologies and creative approaches to solve complex marketing challenges."
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Results",
      description: "We're driven by measurable outcomes, focusing on strategies that deliver tangible business impact."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About FURI</h1>
            <p className="text-xl">
              We are an AI-powered digital marketing agency that combines data intelligence with emotional resonance to create impactful marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To transform the marketing landscape by harmonizing artificial intelligence with human creativity, creating campaigns that drive business growth while forging authentic emotional connections.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where data-intelligent, emotionally resonant marketing becomes the new standard for brands that want to thrive in a digital-first world.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide businesses with marketing strategies and execution that leverage the precision of AI and the power of human creativity to achieve exceptional results.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to delivering measurable outcomes while maintaining the emotional intelligence that connects brands with their audiences on a deeper level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FURI */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose FURI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-neumorphic p-8">
              <h3 className="text-xl font-bold mb-4">AI-Native Approach</h3>
              <p className="text-gray-600">
                Our proprietary AI systems analyze market data, consumer behavior, and campaign performance to continuously optimize your marketing efforts. This isn't just AI integration—it's AI at the core of our strategic thinking.
              </p>
            </div>
            
            <div className="card-neumorphic p-8">
              <h3 className="text-xl font-bold mb-4">Human-Centered Design</h3>
              <p className="text-gray-600">
                While we leverage advanced technology, we never lose sight of the human element. Our creative teams ensure every touchpoint resonates emotionally and reinforces your brand's unique story.
              </p>
            </div>
            
            <div className="card-neumorphic p-8">
              <h3 className="text-xl font-bold mb-4">Cross-Disciplinary Expertise</h3>
              <p className="text-gray-600">
                Our team brings together specialists from marketing, design, data science, and technology, creating an integrated approach that addresses every aspect of your digital presence.
              </p>
            </div>
            
            <div className="card-neumorphic p-8">
              <h3 className="text-xl font-bold mb-4">Measurable Impact</h3>
              <p className="text-gray-600">
                We're obsessed with results. Every strategy we implement comes with clear KPIs and transparent reporting, so you always know exactly how your marketing investment is performing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-neumorphic overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-furi-red mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-neumorphic p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-furi-red/10 text-furi-red mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="card-neumorphic p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">AI-powered, human-led</h3>
              <p className="text-lg text-gray-600 mb-6">
                At FURI, we believe in harnessing the power of artificial intelligence to enhance—not replace—human creativity and strategic thinking. Our approach combines advanced data analytics and AI-driven insights with the emotional intelligence and creative vision that only humans can provide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This balanced methodology allows us to deliver marketing that is simultaneously data-intelligent and emotionally resonant, achieving the perfect blend of science and art that today's most successful brands require.
              </p>
              <p className="text-lg text-gray-600">
                Whether we're developing a brand strategy, designing a website, or launching a multi-channel campaign, this AI-powered, human-led approach ensures every decision is both strategically sound and creatively compelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-furi-red text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-xl mb-10">
              Let's collaborate to create marketing that drives real business growth and meaningful connections.
            </p>
            <a href="/contact" className="btn-primary bg-white text-furi-red hover:bg-gray-100">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="flex space-x-6 mb-6 md:mb-0">
            <Link to="/about" className="text-sm text-gray-600 hover:text-furi-red transition-colors">
              About FURI
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-furi-red transition-colors">
              Privacy Policy
            </Link>
          </nav>

          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-furi-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-furi-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-furi-red transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          <div className="text-sm text-gray-600">
            &copy; {currentYear} FURI. Feed UR Idea.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

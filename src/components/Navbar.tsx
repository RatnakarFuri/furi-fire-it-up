
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-nav bg-white/80 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/cc2828b1-8026-4a9a-97ea-517d8deac8c2.png" 
            alt="FURI Logo" 
            className="h-10" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "text-furi-red" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${
              location.pathname === "/services" ? "text-furi-red" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/industries"
            className={`nav-link ${
              location.pathname === "/industries" ? "text-furi-red" : ""
            }`}
          >
            Industries
          </Link>
          <Link
            to="/impact"
            className={`nav-link ${
              location.pathname === "/impact" ? "text-furi-red" : ""
            }`}
          >
            Impact
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "text-furi-red" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "text-furi-red" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/tools"
            className={`nav-link ${
              location.pathname === "/tools" ? "text-furi-red" : ""
            }`}
          >
            Tools
          </Link>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40">
            <nav className="flex flex-col p-5 space-y-6">
              <Link
                to="/"
                className={`nav-link text-lg ${
                  location.pathname === "/" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`nav-link text-lg ${
                  location.pathname === "/services" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/industries"
                className={`nav-link text-lg ${
                  location.pathname === "/industries" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                Industries
              </Link>
              <Link
                to="/impact"
                className={`nav-link text-lg ${
                  location.pathname === "/impact" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                Impact
              </Link>
              <Link
                to="/about"
                className={`nav-link text-lg ${
                  location.pathname === "/about" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`nav-link text-lg ${
                  location.pathname === "/contact" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/tools"
                className={`nav-link text-lg ${
                  location.pathname === "/tools" ? "text-furi-red" : ""
                }`}
                onClick={closeMenu}
              >
                Tools
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

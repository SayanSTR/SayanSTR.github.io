
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, YOUR_NAME } from '../constants.js'; // Added .js
// import { NavLink } from '../types'; // NAV_LINKS has its own type from constants
import { Link as ScrollLink, animateScroll } from 'react-scroll';

interface NavLinkItem { // Renamed from NavLink to avoid conflict if NavLink type from types.ts is different
  href: string; // This will be the 'to' prop for ScrollLink
  label: string;
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
    handleLinkClick(); // Close mobile menu if open
  };


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                  ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <button onClick={scrollToTop} className="text-2xl font-bold text-emerald-600 hover:text-purple-500 transition-colors cursor-pointer">
            {YOUR_NAME.split(' ')[0]}<span className="text-purple-500">.</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <ScrollLink 
                key={link.label} 
                to={link.href} 
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset for fixed header
                duration={500}
                className="text-slate-700 hover:text-purple-500 transition-colors px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                activeClass="text-purple-600 font-semibold" // Active link styling
                onClick={handleLinkClick}
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-slate-700 hover:text-purple-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <ScrollLink 
                key={link.label} 
                to={link.href} 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
                className="block text-slate-700 hover:bg-slate-100 hover:text-purple-500 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                activeClass="text-purple-600 bg-slate-100 font-semibold"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
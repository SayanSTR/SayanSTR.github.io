import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.js'; // Added .js
import { About } from './components/About.js'; // Added .js
import { Skills } from './components/Skills.js'; // Added .js
import { Projects } from './components/Projects.js'; // Added .js
import { Experience } from './components/Experience.js'; // Added .js
import { Education } from './components/Education.js'; // Added .js
import { Contact } from './components/Contact.js'; // Added .js
import { Footer } from './components/Footer.js'; // Added .js
import { Header } from './components/Header.js'; // Added .js
import { ArrowUpIcon } from './constants.js'; // Added .js
import { Certificates } from './components/Certificates.js'; // Added .js

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define background classes for sections
  const sectionBackgrounds = [
    'bg-white', // Hero
    'bg-sky-50',  // About
    'bg-emerald-50', // Skills (using emerald to match its accent)
    'bg-white', // Projects
    'bg-sky-50',  // Experience
    'bg-white', // Education
    'bg-white', // Certificates
    'bg-sky-50'   // Contact
  ];


  return (
    <div className="flex flex-col min-h-screen text-slate-800 font-sans leading-relaxed"> {/* Removed bg-slate-50, handled by body and sections */}
      <Header />
      <main className="flex-grow">
        <Hero className={sectionBackgrounds[0]} />
        <About className={sectionBackgrounds[1]} />
        <Skills className={sectionBackgrounds[2]} />
        <Projects className={sectionBackgrounds[3]} />
        <Experience className={sectionBackgrounds[4]} />
        <Education className={sectionBackgrounds[5]} />
        <Certificates className={sectionBackgrounds[6]} />
        <Contact className={sectionBackgrounds[7]} />
      </main>
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;
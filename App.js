import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
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
const App = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollTop && window.pageYOffset > 400) {
                setShowScrollTop(true);
            }
            else if (showScrollTop && window.pageYOffset <= 400) {
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
        'bg-sky-50', // About
        'bg-emerald-50', // Skills (using emerald to match its accent)
        'bg-white', // Projects
        'bg-sky-50', // Experience
        'bg-white', // Education
        'bg-sky-50' // Contact
    ];
    return (_jsxs("div", { className: "flex flex-col min-h-screen text-slate-800 font-sans leading-relaxed", children: [" ", _jsx(Header, {}), _jsxs("main", { className: "flex-grow", children: [_jsx(Hero, { className: sectionBackgrounds[0] }), _jsx(About, { className: sectionBackgrounds[1] }), _jsx(Skills, { className: sectionBackgrounds[2] }), _jsx(Projects, { className: sectionBackgrounds[3] }), _jsx(Experience, { className: sectionBackgrounds[4] }), _jsx(Education, { className: sectionBackgrounds[5] }), _jsx(Contact, { className: sectionBackgrounds[6] })] }), _jsx(Footer, {}), showScrollTop && (_jsx("button", { onClick: scrollTop, className: "fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 z-50 animate-bounce", "aria-label": "Scroll to top", children: _jsx(ArrowUpIcon, { className: "w-6 h-6" }) }))] }));
};
export default App;

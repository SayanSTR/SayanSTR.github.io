import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { SOCIAL_LINKS, YOUR_NAME, YOUR_TITLE, YOUR_BIO_SHORT } from '../constants.js'; // Added .js
import { Link as ScrollLink } from 'react-scroll';
export const Hero = ({ className: bgClassNameFromApp }) => {
    const heroSectionStyle = {
        // Adding a subtle texture for the hero section, different from the main body pattern
        backgroundImage: `radial-gradient(circle, rgba(200,200,220,0.03) 1px, transparent 1px),
                        radial-gradient(circle, rgba(200,200,220,0.03) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px',
    };
    return (_jsx(SectionWrapper, { id: "hero", className: bgClassNameFromApp, style: heroSectionStyle, noInternalPadding: true, children: _jsxs("div", { className: "text-center p-6 bg-slate-50/70 backdrop-blur-lg rounded-xl shadow-2xl max-w-3xl mx-auto", children: [_jsx("img", { src: "https://picsum.photos/seed/sayanprofile/200/200" // More specific seed for Sayan
                    , alt: YOUR_NAME, className: "w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-xl object-cover" }), _jsx("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-4", children: _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-600", children: YOUR_NAME }) }), _jsx("p", { className: "text-xl md:text-2xl text-sky-700 mb-6", children: YOUR_TITLE }), _jsx("p", { className: "text-lg text-slate-700 max-w-2xl mx-auto mb-8", children: YOUR_BIO_SHORT }), _jsx("div", { className: "flex justify-center space-x-6 mb-10", children: SOCIAL_LINKS.map((link) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-slate-600 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110", "aria-label": link.name, children: React.cloneElement(link.icon, { className: "w-8 h-8" }) }, link.name))) }), _jsx(ScrollLink, { to: "projects" // ID of the Projects section
                    , spy: true, smooth: true, offset: -70, duration: 500, className: "inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 text-lg transform hover:scale-105 cursor-pointer", children: "View My Work" })] }) }));
};

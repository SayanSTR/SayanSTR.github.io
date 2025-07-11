import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { Card } from './Card.js'; // Added .js
import { SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_MESSAGE, EmailIcon } from '../constants.js'; // Added .js
export const Contact = ({ className }) => {
    return (_jsx(SectionWrapper, { id: "contact", title: "Get In Touch", titleIcon: _jsx(EmailIcon, { className: "w-8 h-8" }), className: className, children: _jsxs(Card, { className: "max-w-2xl mx-auto text-center", children: [_jsx("p", { className: "text-lg text-slate-700 mb-6", children: CONTACT_MESSAGE }), _jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "inline-block bg-purple-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 text-xl transform hover:scale-105", children: "Send an Email" }), _jsx("p", { className: "mt-8 text-slate-600", children: "Or connect with me on social media:" }), _jsx("div", { className: "flex justify-center space-x-6 mt-4", children: SOCIAL_LINKS.filter(link => link.name !== "Email").map((link) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-slate-600 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110", "aria-label": link.name, children: React.cloneElement(link.icon, { className: "w-8 h-8" }) }, link.name))) })] }) }));
};

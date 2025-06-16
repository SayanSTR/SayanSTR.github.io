import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js'; // Added .js
export const SectionWrapper = ({ id, title, children, className: passedClassName = '', titleIcon, style, noInternalPadding = false // Default to having internal padding
 }) => {
    const sectionRef = useRef(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: id === 'hero' ? 0.05 : 0.1, triggerOnce: true });
    return (_jsx("section", { ref: sectionRef, id: id, className: `min-h-screen snap-start flex items-center justify-center ${passedClassName} section-animate ${isVisible ? 'visible' : ''}`, style: style, "aria-labelledby": title ? `${id}-title` : undefined, children: _jsx("div", { className: `container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl w-full ${noInternalPadding ? '' : 'py-16 md:py-24'}`, children: _jsxs("div", { children: [" ", title && (_jsxs("div", { className: "mb-12 text-center", children: [_jsxs("h2", { id: `${id}-title`, className: "text-3xl md:text-4xl font-bold text-emerald-600 flex items-center justify-center space-x-3", children: [titleIcon && _jsx("span", { className: "text-purple-500", "aria-hidden": "true", children: titleIcon }), _jsx("span", { children: title })] }), _jsx("div", { className: "mt-4 h-1 w-24 bg-purple-500 mx-auto rounded-full" })] })), children] }) }) }));
};

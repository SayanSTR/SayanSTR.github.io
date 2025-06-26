import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { Card } from './Card.js'; // Added .js
import { EXPERIENCE_DATA, BriefcaseIcon } from '../constants.js'; // Added .js
export const Experience = ({ className }) => {
    // Determine ring color based on the background. If bg-white, use slate-50. If sky-50, use white.
    // This is a simplification; for more complex logic, pass the specific bg color.
    const ringColorClass = className?.includes('bg-white') ? 'ring-slate-50' : 'ring-white';
    return (_jsxs(SectionWrapper, { id: "experience", title: "Professional Experience", titleIcon: _jsx(BriefcaseIcon, { className: "w-8 h-8" }), className: className, children: [_jsxs("div", { className: "space-y-12 relative", children: [_jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block transform -translate-x-1/2" }), EXPERIENCE_DATA.map((item, index) => (_jsxs("div", { className: `md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8 md:mb-0 relative`, children: [_jsx("div", { className: "hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20", children: _jsx("div", { className: `w-4 h-4 bg-purple-500 rounded-full ring-4 ${ringColorClass}` }) }), _jsx("div", { className: `w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-left order-1 md:pr-8' : 'md:text-right order-2 md:pl-8'}` }), _jsxs(Card, { className: `w-full md:max-w-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`, children: [_jsxs("div", { className: "flex items-start space-x-4 mb-3", children: [item.logoUrl && (_jsx("img", { src: item.logoUrl, alt: `${item.company} logo`, className: "w-10 h-10 rounded-full object-contain bg-white p-1 shadow-sm", onError: (e) => {
                                                    const target = e.currentTarget;
                                                    const fallback = `assets/${item.id}_logo.png`;
                                                    if (!target.src.endsWith(fallback)) {
                                                        target.src = fallback;
                                                    }
                                                } })), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-sky-700", children: item.role }), _jsx("p", { className: "text-md text-purple-500", children: item.company }), _jsx("p", { className: "text-sm text-slate-500", children: item.period })] })] }), _jsx("ul", { className: "list-disc list-outside space-y-2 text-slate-700 text-sm pl-5", children: item.responsibilities.map((desc, i) => (_jsx("li", { children: desc }, i))) })] })] }, item.id)))] }), _jsxs("p", { className: "text-center mt-12 text-slate-600", children: ["Note: Experience details are placeholders. Please update them with your actual work in ", _jsx("code", { children: "constants.tsx" }), "."] })] }));
};

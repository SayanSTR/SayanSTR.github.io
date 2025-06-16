import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { YOUR_NAME } from '../constants.js'; // Added .js
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsxs("footer", { className: "bg-slate-200 text-center py-8 border-t border-slate-300", children: [" ", _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("p", { className: "text-sm text-slate-600", children: [" ", "\u00A9 ", currentYear, " ", YOUR_NAME, ". All rights reserved."] }), _jsxs("p", { className: "text-xs text-slate-500 mt-2", children: [" ", "Built with ", _jsx("a", { href: "https://react.dev/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-purple-500 transition-colors", children: "React" }), " & ", _jsx("a", { href: "https://tailwindcss.com/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-purple-500 transition-colors", children: "Tailwind CSS" }), ". Hosted on GitHub Pages. "] })] })] }));
};

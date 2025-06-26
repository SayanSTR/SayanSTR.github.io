import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { Card } from './Card.js'; // Added .js
import { EDUCATION_DATA, AcademicCapIcon } from '../constants.js'; // Added .js
export const Education = ({ className }) => {
    return (_jsxs(SectionWrapper, { id: "education", title: "Education", titleIcon: _jsx(AcademicCapIcon, { className: "w-8 h-8" }), className: className, children: [_jsx("div", { className: "grid md:grid-cols-2 gap-8", children: EDUCATION_DATA.map((item) => (_jsxs(Card, { children: [_jsxs("div", { className: "flex items-center mb-3", children: [_jsx(AcademicCapIcon, { className: "w-8 h-8 text-purple-500 mr-3 shrink-0" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-sky-700", children: item.degree }), _jsx("p", { className: "text-md text-slate-600", children: item.institution })] })] }), _jsx("p", { className: "text-sm text-slate-500 mb-2", children: item.period }), item.description && _jsx("p", { className: "text-slate-700 text-sm leading-relaxed", children: item.description })] }, item.id))) }), _jsxs("p", { className: "text-center mt-12 text-slate-600", children: ["Note: Education details are placeholders. Please update them with your actual credentials in ", _jsx("code", { children: "constants.tsx" }), "."] })] }));
};

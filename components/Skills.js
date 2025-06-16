import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { Card } from './Card.js'; // Added .js
import { SKILLS_DATA, CodeBracketIcon } from '../constants.js'; // Added .js
export const Skills = ({ className }) => {
    const categories = Array.from(new Set(SKILLS_DATA.map(skill => skill.category)));
    return (_jsx(SectionWrapper, { id: "skills", title: "My Skills & Expertise", titleIcon: _jsx(CodeBracketIcon, { className: "w-8 h-8" }), className: className, children: _jsx("div", { className: "space-y-12", children: categories.map(category => (_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold text-sky-600 mb-6 text-center md:text-left", children: category }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: SKILLS_DATA.filter(skill => skill.category === category).map((skill) => (_jsxs(Card, { className: "flex flex-col items-center justify-center p-4 text-center !rounded-lg !shadow-lg hover:!shadow-emerald-500/30 hover:!ring-emerald-500", children: [skill.icon && React.isValidElement(skill.icon) ? React.cloneElement(skill.icon, { className: "w-5 h-5 mr-0 mb-2 text-sky-600" }) : skill.icon, _jsx("p", { className: "text-sm font-medium text-emerald-700", children: skill.name })] }, skill.name))) })] }, category))) }) }));
};

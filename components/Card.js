import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className = '' }) => {
    return (_jsx("div", { className: `bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-purple-500/30 hover:ring-1 hover:ring-purple-500 ${className}`, children: children }));
};

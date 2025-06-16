import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { YOUR_ABOUT_ME, YOUR_NAME } from '../constants.js'; // Added .js
export const About = ({ className }) => {
    return (_jsx(SectionWrapper, { id: "about", title: "About Me", className: className, children: _jsxs("div", { className: "max-w-3xl mx-auto text-center md:text-left", children: [_jsx("div", { className: "space-y-6 text-slate-700 text-lg leading-relaxed", children: YOUR_ABOUT_ME.map((paragraph, index) => (
                    // The replacement of "[Your Name]" should ideally be done in constants.tsx if it's static
                    // or handled if the name needs to be dynamic. For now, assuming constants.tsx is updated.
                    _jsx("p", { children: paragraph.replace("[Your Name]", YOUR_NAME.split(' ')[0]) }, index))) }), _jsx("div", { className: "mt-10 text-center", children: _jsx("a", { href: "https://github.com/SayanSTR/resume/raw/main/Sayan_Ghosh_Resume.pdf" // Example: Link to a resume PDF in a GitHub repo
                        , target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition-colors duration-300 text-lg transform hover:scale-105", children: "Download Resume (PDF)" }) })] }) }));
};


import React from 'react';
import { SectionWrapper } from './SectionWrapper.js'; // Added .js
import { Card } from './Card.js'; // Added .js
import { SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_MESSAGE, EmailIcon } from '../constants.js'; // Added .js
import { SocialLink } from '../types.js'; // Added .js

interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <SectionWrapper id="contact" title="Get In Touch" titleIcon={<EmailIcon className="w-8 h-8" />} className={className}>
      <Card className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-slate-700 mb-6">{CONTACT_MESSAGE}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block bg-purple-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 text-xl transform hover:scale-105"
        >
          Send an Email
        </a>
        <p className="mt-8 text-slate-600">Or connect with me on social media:</p>
        <div className="flex justify-center space-x-6 mt-4">
          {SOCIAL_LINKS.filter(link => link.name !== "Email").map((link: SocialLink) => ( 
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110"
              aria-label={link.name}
            >
              {React.cloneElement(link.icon, { className: "w-8 h-8" })}
            </a>
          ))}
        </div>
        {/* <p className="text-center mt-8 text-sm text-rose-500">
          Reminder:
        </p> */}
      </Card>
    </SectionWrapper>
  );
};
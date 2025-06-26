import React from 'react';
import { SectionWrapper } from './SectionWrapper.js';
import { Card } from './Card.js';
import { CERTIFICATES_DATA, AcademicCapIcon } from '../constants.js';

interface CertificateItem {
  id: string;
  title: string;
  provider: string;
  period: string;
  description?: string;
}

interface CertificatesProps {
  className?: string;
}

export const Certificates: React.FC<CertificatesProps> = ({ className }) => {
  return (
    <SectionWrapper id="certificates" title="Certificates & Courses" titleIcon={<AcademicCapIcon className="w-8 h-8" />} className={className}>
      <div className="grid md:grid-cols-2 gap-8">
        {CERTIFICATES_DATA.map((item: CertificateItem) => (
          <Card key={item.id}>
            <div className="flex items-center mb-3">
              <AcademicCapIcon className="w-8 h-8 text-purple-500 mr-3 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-sky-700">{item.title}</h3>
                <p className="text-md text-slate-600">{item.provider}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-2">{item.period}</p>
            {item.description && <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>}
          </Card>
        ))}
      </div>
      <p className="text-center mt-12 text-slate-600">
        Note: Certificates and courses are placeholders. Please update them with your actual credentials in <code>constants.tsx</code>.
      </p>
    </SectionWrapper>
  );
};

import React, { ReactNode } from 'react';
import './content-section.css';

interface Props {
  title?: string;
  subtitle?: string;
  invert?: boolean;
  children: ReactNode;
}

const ContentSection: React.SFC<Props> = ({
  title = 'TITLE HERE',
  subtitle = null,
  invert,
  children,
}) => {
  const subtitleEl = subtitle ? <span className="uppercase block mb-4">{subtitle}</span> : null;
  const titleEl = title ? <h2 className="text-5xl font-semibold leading-normal pb-4">{title}</h2> : null;
  const invertedClassname = invert ? 'invert' : '';

  return (
    <div className="flex justify-center py-32">
      <div className="w-3/5 cs-content">
        {subtitleEl}
        {titleEl}
        {children}
      </div>
    </div>
  );
};

export default ContentSection;

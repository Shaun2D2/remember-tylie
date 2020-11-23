import React from 'react';

import './Section.scss';

const Section = ({ title, children }) => (
  <div className="section">
    <div className="container">
      {title && (
        <div className="section__title">
          <h1>{title}</h1>
          -
        </div>
      )}
      {children}
    </div>
  </div>

);

export default Section;

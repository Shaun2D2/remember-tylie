import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ title, children, id, className }) => (
  <div className={classNames('section', className)}>
    <div className="container" id={id}>
      {title && (
        <div className="section__title">
          <h1>{title}</h1>
        </div>
      )}
      {children}
    </div>
  </div>

);

export default Section;

import React from 'react';
import classNames from 'classnames';

import './DividerSection.scss';

const DividerSection = ({ className, quote }) => (
  <div className={classNames('divider-section', className)}>
    <div className="container">
      <p className="divider-section__quote">{quote}</p>
    </div>
  </div>
);

DividerSection.defaultProps = {
  className: 'divider-section--blossom-1',
};

export default DividerSection;

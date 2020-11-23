import React from 'react';

import './Section.scss';

const Section = ({ title, children }) => (
    <div className="section">
        <div className="container">
            {title && (<h1>{title}</h1>)}
            {children}
        </div>
    </div>

);

export default Section;
import React from 'react';
import './Wings.css';

const Wings = ({ text }) => {
  return (
    <div className="wings-container">
      <div className="butterfly">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
        <div className="body"></div>
      </div>
      <div className="butterfly-text">
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Wings;

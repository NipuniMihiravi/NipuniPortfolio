import React from 'react';
import './Page.css';

const Footer = ({ scrollToContact }) => {
  return (
    <div className="first-image">
      {/* Left Side */}
      <div className="left-content">
        <div className="intro-heading">
          <h2 className="role">Software Engineer</h2>
          <h2 className="name">
            I am <br />
            <span className="highlight">Nipuni Mihiravi</span>
          </h2>
        </div>
        <div className="button-group">
          {/* ✅ Download CV */}
          <a
            href="/Nipuni_CV.pdf"
            download="Nipuni_CV.pdf"
          >
            <button>Download CV</button>
          </a>


        </div>
      </div>

      {/* Right Side */}
      <div className="right-content">
        <img
          src="/Images/nipuniremove.png"

          className="content-image"
        />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Page.css"; // Ensure you have this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Column - Contact Details */}
      <div className="footer-column2">
              <h3 className="footer-heading">CONTACT DETAILS</h3>
              <div className="footer-bar">© 2025 Nipuni Portfolio. All rights reserved.</div>
            </div>
      <div className="footer-column">

        <ul className="contact-info2">
        <li>
                    <span className="label">Full Name:</span>
                    <span className="content"> Nipuni Mihiravi Lokuwithana</span>
                  </li>
                  <li>
                              <span className="label">Date of Birth:</span>
                              <span className="content"> 24 June 1991</span>
                            </li>
          <li>
            <span className="label">Email:</span>
            <span className="content"> nipunimihi91@gmail.com</span>
          </li>
          <li>
            <span className="label">Contact No:</span>
            <span className="content"> +94-710654246</span>
          </li>
          <li>
            <span className="label">Address:</span>
            <span className="content"> 202/54, Isurupura Mawatha, Kesbawe</span>
          </li>

          <li className="social-links">
            <span className="label">Follow Me:</span>
            <div className="social-icons">
              <a
                href="http://www.linkedin.com/in/nipuni91"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`${process.env.PUBLIC_URL}/Images/linked.jpg`} alt="Linkden" />
              </a>

            </div>
          </li>
        </ul>
      </div>

      {/* Right Column - Logo & Copyright */}

    </footer>
  );
};

export default Footer;

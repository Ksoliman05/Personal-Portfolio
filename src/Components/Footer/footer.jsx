import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div id = "footer" className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Left: Logo and Text */}
        <div className="footer-top-left">
          <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
          <p>Let’s build something great together. Reach out!</p>
        </div>

        {/* Right: Email Input and Subscribe */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="foot-bottom-left">
          <p>© 2025 Kerlous Soliman. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

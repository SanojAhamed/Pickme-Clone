import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linkContainerStyle}>
          <a href="/terms" style={linkStyle}>T & C</a>
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
          <a href="/careers" style={linkStyle}>Careers</a>
          <a href="/contact" style={linkStyle}>Contact Us</a>
        </div>

        <div style={iconContainerStyle}>
          {socialMediaIcon("https://www.facebook.com", faFacebook)}
          {socialMediaIcon("https://www.twitter.com", faTwitter)}
          {socialMediaIcon("https://www.instagram.com", faInstagram)}
          {socialMediaIcon("https://www.linkedin.com", faLinkedin)}
          {socialMediaIcon("https://www.youtube.com", faYoutube)}
        </div>
      </div>

      <div style={horizontalLineStyle}></div>
      <div style={copyrightStyle}>
        &copy; 2025 - Digital Mobility Solutions Lanka Limited. All rights reserved.
      </div>
    </footer>
  );
}


const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
  flexWrap: 'wrap',
  padding: '0 20px',
};

const linkContainerStyle = {
  display: 'flex',
  gap: '15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const iconContainerStyle = {
  display: 'flex',
  gap: '10px',
};

const horizontalLineStyle = {
  borderTop: '1px solid #fff',
  margin: '10px 0',
  width: '100%',
};

const copyrightStyle = {
  textAlign: 'center',
  fontSize: '12px',
  color: 'gray',
};

const iconStyle = {
  backgroundColor: '#808080',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
};

function socialMediaIcon(link, icon) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <FontAwesomeIcon icon={icon} color="#000" />
    </a>
  );
}

export default Footer;
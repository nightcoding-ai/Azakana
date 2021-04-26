import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
            <Link to='/' className='logo'>
              Azakana
            </Link>
    </div>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
            <div id="contentFooter">
              <div id="legalMentions">
                <Link to='/mentions'>
                 mentions légales
               </Link>
              </div>
              <div id="contact">
                <Link to='/contact'>
                 nous contacter
                </Link>
              </div>
              <div id="discord">
                <a href="https://discord.gg/2fraMTyujp" target="_blank">Discord des développeurs</a>
              </div>
              <div id="grpd">
                <a href="https://github.com/nightcoding-ai/Azakana/wiki/GDPR" target="_blank">protection des données</a>
              </div>
            <Link to='/' className='social-logo'>
              Azakana
            </Link>
            

            </div>
    </div>
  );
}

export default Footer;

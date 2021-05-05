import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../tempfiles/icon.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <img alt="" src={logo} className="logo"/>
           <Link to='/' className='navbar-title' onClick={closeMobileMenu}>
            Azakana
           </Link>
           <div className='menu-icon' onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link
                to='/statistiques'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Statistiques
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Equipe
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/patch-notes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Notes de patch
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/champions'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Champions
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/e-sport'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                E-sport
              </Link>
            </li>
            <li>
              <Link
                to='/sign-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Connexion
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--connect'>Connexion</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

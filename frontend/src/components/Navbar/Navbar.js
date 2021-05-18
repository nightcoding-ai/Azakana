import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { ButtonD } from '../Button/ButtonD';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../tempfiles/icon.png';
import Cookies from 'js-cookie';

class Navbar extends React.Component{
  state = {
    token: Cookies.get('Token'),
    pseudo: Cookies.get('Pseudo'),
    click: false,
    button: true,
    element: "",
    str:"",
  }
  handleClick = () => this.setState({click: !this.state.click});
  closeMobileMenu = () => this.setState({click: false});
  
  showButton = () => {
    if (window.innerWidth <= 960) {
      this.setState({button: false})
    } else {
      this.setState({button: true})
    }
  };
  
  useEffect = (() => {
    this.showButton();
  }, []);

  deleteToken = () =>{
    Cookies.remove('Token');
    document.location.href="/";
  }

  render_token = () => {
    if (typeof(this.state.token) != 'undefined') {
      this.setState({str:<ButtonD onClick={this.deleteToken} buttonStyle='btn--connect'>Déconnexion</ButtonD>})
    }else{
      this.setState({str:<Button buttonStyle='btn--connect'>Connexion</Button>})
      this.setState({pseudo: ""});
    }
  };
  
  render(){
    window.addEventListener('resize', this.showButton);
    return (
    <>
      <nav className='navbar' onLoad={this.render_token}>
        <div className='navbar-container'>
        <img alt="" src={logo} className="logo" />
           <Link to='/' className='navbar-title' onClick={this.closeMobileMenu}>
            Azakana
           </Link>
           <div className='menu-icon' onClick={this.handleClick}>
           <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
          <ul className={this.state.click  ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link
                to='/statistiques'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Statistiques
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Equipe
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/patch-notes'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Notes de patch
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/champions'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Champions
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/e-sport'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                E-sport
              </Link>
            </li>
          </ul>
          <p id="pseudo">
          {this.state.pseudo}
          </p>
          {this.state.str}
          
          
        </div>
      </nav>
    </>
  );
}
}

export default Navbar;
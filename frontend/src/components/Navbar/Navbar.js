import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import { ButtonD } from '../Button/ButtonD';
import './Navbar.css';

import Cookies from 'js-cookie';

class Navbar extends React.Component{
  state = {
    token: Cookies.get('Token'),
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
    Cookies.remove('Pseudo');
    document.location.href="/";
  }

  render_token = () => {
    if (typeof(this.state.token) != 'undefined') {
      this.setState({str:<ButtonD onClick={this.deleteToken} buttonStyle='btn--connect'>Déconnexion</ButtonD>})
    }else{
      this.setState({str:<Button buttonStyle='btn--connect'>Connexion</Button>})
    }
  };
  
  render(){
    window.addEventListener('resize', this.showButton);
    return (
    <>
      <nav className='navbar' onLoad={this.render_token}>
        <div className='navbar-container'>
        <img alt="" src="https://nsm09.casimages.com/img/2021/08/19//mini_21081904150226065417533217.png" className="logo" />
           <NavLink to='/' className='navbar-title' style={{ borderBottom: 'none'}} onClick={this.closeMobileMenu}>
            Azakana
           </NavLink>
           <div className='menu-icon' onClick={this.handleClick}>
           <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
          <ul className={this.state.click  ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <NavLink
                to='/statistiques'
                activeClassName="active"
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Statistiques
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/team'
                activeClassName="active"
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Equipe
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName="active"
                to='/patch-notes'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Notes de patch
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName="active"
                to='/champions'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Champions
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName="active"
                to='/e-sport'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                E-sport
              </NavLink>
            </li>
          </ul>
          
          {this.state.str}
        </div>
      </nav>
    </>
  );
}
}

export default Navbar;
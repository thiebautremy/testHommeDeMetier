import React from 'react';
import { Icon } from 'semantic-ui-react';
import './header.scss';

import logo from '../../assets/logo.png';
const Header = () => (
  <header className="header">
      <div className="header__logoAndTitle">
        <img src={logo} alt="logo homme de métier" className="header__logoAndTitle__logo"/>
        <h1 className="header__logoAndtitle__title">HOMMEDEMETIER<span>.</span>BE</h1>
      </div> 
      <div className="header__contact">
        <h1 className="header__contact__item">CONTACTEZ-NOUS</h1>
        <h1 className="header__contact__item"><span><Icon name='mail' size='large' color="orange"/></span>info@hommedemetier.be</h1>
        <h1 className="header__contact__item"><Icon name="phone" size="large" color="orange"/>+32 460 227 963</h1>
        <a href="https://www.facebook.com/HommeDeMetier.Be/" className="header__contact__item"><Icon name="facebook official" size="huge" color="blue"/></a>
      </div>

  </header>
);

export default Header;

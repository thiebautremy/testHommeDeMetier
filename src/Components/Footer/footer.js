import React from 'react';
import { Icon } from 'semantic-ui-react';

import './footer.scss';


const Footer = () => (
  <footer className="footer">
        <section className="footer__info">
          <h1 className="footer__title">Informations</h1>
            <p className="footer__item"><span><Icon name='mail' size='small' color="orange"/></span>info@hommedemetier.be</p>
            <p className="footer__item"><Icon name="phone" size="small" color="orange"/>+32 460 227 963</p>
            <a href="https://www.facebook.com/HommeDeMetier.Be/" className="footer__item"><Icon name="facebook official" size="big" color="blue"/> Notre page facebook</a>
        </section>
        <section className="footer__time">
          <h1 className="footer__title">Horaires</h1>
            <p>Lundi - Vendredi :8:00 - 21:00</p>
            <p>Samedi & Dimanche :10:00 - 21:00</p>
            <p>Nous répondons aussi pendant les vacances et jours fériés!</p>
        </section>
        <section className="footer__newsletter">
        <h1 className="footer__title">Newsletter</h1>
        <p>Inscrivez-vous pour découvrir nos nouvelles offres à travers nos newsletters.</p>
        <div className="footer__newsletter__inputs">
          <input type="email" name="email" id="email" placeholder="Votre adresse mail"/>
          <button type="submit">S'inscrire</button>
        </div>
        <div className="footer__newsletter__checkbox"><input type="checkbox" name="checkbox" id="checkbox"/> J'accepte que les informations saisies soient exploitées dans le cadre de l'inscription à la newsletter.</div>
        </section>
  </footer>
);

export default Footer;

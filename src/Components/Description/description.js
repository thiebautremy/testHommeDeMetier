import React from 'react';
import './description.scss';

const Description = () => (
  <div className="description">
      <div className="background"></div>
    <article className="description__article">
      <div>
        <h1 className="description__article__title">Vous cherchez un spécialiste ?</h1>
          <p className="description__article__paragraphe">
           Un électricien compétent ? <br></br>Un plombier expérimenté ? <br></br>Un déboucheur en urgence ? <br></br>Quelque soit l'ouvrier qualifié que vous recherchez, nous le trouverons pour vous.
          </p>
          <p className="description__article__paragraphe">
            En tant qu'experts, nous mettons nos professionnels à votre disposition sur simple demande et sans engagement alors appelez-nous !
          </p>
      </div>
        <button type="button" className="description__btn">DEVIS GRATUIT <br></br> au <br></br>+32 460 227 963</button>
    </article>
  </div>
);

export default Description;

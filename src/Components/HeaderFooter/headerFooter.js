import React from 'react';
import './headerFooter.scss';

const HeaderFooter = () => (
  <div className="headerFooter">
      <h1 className="headerFooter__title">Des hommes de métier partout en Belgique et au Luxembourg</h1>
        <p className="headerFooter__paragraphe">
        Nos professionnels interviennent partout en <strong>Belgique</strong> et au <strong>Luxembourg</strong> :
        </p>
        <p className="headerFooter__paragraphe">
        Bruxelles, Charleroi, Mons, Namur, Liège, le Hainaut, le Brabant Wallon, les Flandres, les Ardennes et le Grand Duché du Luxembourg.
        </p>
  </div>
);

export default HeaderFooter;

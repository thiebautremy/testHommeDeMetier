import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react'
import './searchBar.scss';

import tous from '../../assets/tous.png';
import electricite from '../../assets/electricite.png';
import exterieur from '../../assets/exterieur.png';
import interieur from '../../assets/interieur.png';
import renovation from '../../assets/renovation.png';
import specialiste from '../../assets/specialiste.png';

const categories = [
  {
    key: 'Tous',
    text: 'Tous',
    value: 'Tous',
    image: { avatar: true, src: `${tous}` },
  },
  {
    key: 'Electricité',
    text: 'Electricité',
    value: 'Electricité',
    image: { avatar: true, src: `${electricite}` },
  },
  {
    key: 'Rénovation',
    text: 'Rénovation',
    value: 'Rénovation',
    image: { avatar: true, src: `${renovation}` },
  },
  {
    key: 'Spécialiste',
    text: 'Spécialiste',
    value: 'Spécialiste',
    image: { avatar: true, src: `${specialiste}` },
  },
  {
    key: 'Intérieur',
    text: 'Intérieur',
    value: 'Intérieur',
    image: { avatar: true, src: `${interieur}` },
  },
  {
    key: 'Extérieur',
    text: 'Extérieur',
    value: 'Extérieur',
    image: { avatar: true, src: `${exterieur}` },
  },
]
const SearchBar = () => (
  <div className="searchBar">
    <h1 className="searchBar__title">Nos services</h1>
    <p className="searchBar__paragraphe">
      Nous travaillons avec tous les corps de métiers pour réaliser tous types de travaux, de la construction à la rénovation.
    </p>
    <div className="searchBar__inputs">
      <div className="searchBar__inputs__input">
        <Input 
          action={{ icon: 'search' }} 
          placeholder='Rechercher' 
          // size='large'
        />
      </div>
      <div className="searchBar__inputs__dropdown">
        <Dropdown
        placeholder='Catégories'
        selection
        options={categories}
        clearable
        />
      </div>
    </div>
  </div>
);

export default SearchBar;

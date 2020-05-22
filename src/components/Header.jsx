import React from 'react';
import '../assets/styles/Header.styl';
import perfil from '../assets/statics/imagen_perfil.png';

const Header = () => (
  <div className="header">
    <div className="header__name">Gian Vallejos</div>
    <div className="header__menu">
      <img src={perfil} alt="Perfil" />
      <div className="header__menu__name">Gian Vallejos</div>
    </div>
  </div>
);

export default Header;

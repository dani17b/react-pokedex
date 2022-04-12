import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.scss';

function Header() {
  const history = useHistory();

  return (
    <div
      className="header"
      onClick={() => {
        history.push('/');
      }}
    >
      <span className="header__icon"></span>
      <span className="header__name">Pokedex</span>
    </div>
  );
}

export default Header;

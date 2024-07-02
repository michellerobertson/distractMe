import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 

function Header() {
  return (
    <header>
      <h1 className="header">
        <Link to="/" className="header-link">distractMe</Link>
      </h1>
    </header>
  );
}

export default Header;
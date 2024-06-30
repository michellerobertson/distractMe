import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.scss'; 

function Footer() {
  const location = useLocation();

  const renderLinks = () => {
    if (location.pathname === '/') {
      return (
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      );
    } else if (location.pathname === '/facts') {
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      );
    } else if (location.pathname === '/about') {
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      );
    }
    return null; 
  };

  return (
    <footer>
      <nav>
        {renderLinks()}
      </nav>
    </footer>
  );
}

export default Footer;
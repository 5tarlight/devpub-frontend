import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <NavLink to="/" className="item">
        Home
      </NavLink>
      <NavLink to="/login" className="item">
        Login
      </NavLink>
      <NavLink to="/register" className="item">
        Register
      </NavLink>
    </div>
  );
}

export default Header;

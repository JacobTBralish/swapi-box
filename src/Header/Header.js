import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../images/star-wars-logo.png';

const Header = () => {
  return (
    <header>
      <NavLink to='/' className='logo'>
        <img src={Logo} alt="star-wars-logo"/>
        <h1 className='home-header'>
          THE API STRIKES BACK
        </h1>
      </NavLink>
      <nav>
        <ul>
          <li className='nav-item'>
            <NavLink to='/people' >People</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/planets'>Planets</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/vehicles'>Vehicles</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
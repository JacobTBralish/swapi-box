import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  return(
    <header>
      <h1><NavLink to='/'>SWAPI-BOX</NavLink></h1>
      <nav>
        <ul>
          <li onClick={props.handleClick}>
            <NavLink to='/people'>People</NavLink>
          </li>
          <li onClick={props.handleClick}>
            <NavLink to='/planets'>Planets</NavLink>
          </li>
          <li onClick={props.handleClick}>
            <NavLink to='/vehicles'>Vehicles</NavLink>
          </li>
          <li onClick={props.handleClick}>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
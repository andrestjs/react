import React from 'react';
import './NavBar.css';
export const NavBar = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="nav__content">
                <div className="nav__brand">
                    LOGO
                </div>
                <ul className="nav__menu">
                    <li className="nav__menu-item"><a href="#" className="nav__menu-link">Celulares</a></li>
                    <li className="nav__menu-item"><a href="#" className="nav__menu-link">Tablets</a></li>
                    <li className="nav__menu-item"><a href="#" className="nav__menu-link">Notebooks</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

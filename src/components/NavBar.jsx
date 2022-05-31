import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import './NavBar.css';
export const NavBar = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="nav__content">
                <div className="nav__brand">
                    <Link to='/'>LOGO</Link>
                </div>
                <div className="nav__navigation">
                    <ul className="nav__menu">
                        <li className="nav__menu-item"><Link to="/category/celulares" className="nav__menu-link">Celulares</Link></li>
                        <li className="nav__menu-item"><Link to='/category/tablets' className="nav__menu-link">Tablets</Link></li>
                        <li className="nav__menu-item"><Link to='/category/notebooks' className="nav__menu-link">Notebooks</Link></li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </div>
    </nav>
  )
}

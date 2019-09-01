import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';

const Header = () => {
    return (
        <header className="App-header">
            <Link className="flex" to="/">
                <img src="/media/logo.png" className="App-logo" alt="logo" />
            </Link>
            <ul className="site-menu">
                <li className="menu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item"><a>Shop</a></li>
                <li className="menu-item"><a>Journal</a></li>
                <li className="menu-item"><a>More</a></li>
            </ul>
            <MiniCart />
        </header>
    )
}

export default Header;
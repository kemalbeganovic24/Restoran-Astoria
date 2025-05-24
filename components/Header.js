import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/styles/header.css'
import logo from '../assets/images/logobg.png';

function Header() {
    return(
        <header>
            <nav>
                <img src={logo} alt={"Logo"} className="logo"/>
                <ul>
                    <li><NavLink to="/" classname={({isActive}) => isActive ? 'active' : ''}>Početna</NavLink></li>
                    <li><NavLink to="/about" classname={({isActive}) => isActive ? 'active' : ''}>O nama</NavLink></li>
                    <li><NavLink to="/meni" classname={({isActive}) => isActive ? 'active' : ''}>Meni</NavLink></li>
                    <li><NavLink to="/contact" classname={({isActive}) => isActive ? 'active' : ''}>Kontakt</NavLink></li>
                    <li><NavLink to="order" classname={({isActive}) => isActive ? 'active' : ''}>Naruči</NavLink></li>
                    <li><NavLink to="login" classname={({isActive}) => isActive ? 'active' : ''}>Prijava</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
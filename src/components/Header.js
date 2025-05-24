import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/styles/header.css'
import logo from '../assets/images/logobg.png';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <ul className="nav-list">
                    <img src={logo} alt={"Logo"} className="logo"/>
                    <li><NavLink to="" className={({isActive}) => isActive ? 'active' : ''}>Početna</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>O nama</NavLink></li>
                    <li><NavLink to="/meni" className={({isActive}) => isActive ? 'active' : ''}>Meni</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Kontakt</NavLink>
                    </li>
                    <li><NavLink to="order" className={({isActive}) => isActive ? 'active' : ''}>Naruči</NavLink></li>
                    <li><NavLink to="login" className={({isActive}) => isActive ? 'active' : ''}>Prijava</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;

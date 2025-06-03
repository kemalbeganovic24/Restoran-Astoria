import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/logobg.png';

function Header({ korisnik, onLogout }) {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('ulogovaniKorisnik');
        localStorage.removeItem('role');
        onLogout(); 
        navigate('/');
    };

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <p className="pisani-tekst">Gdje se svaki zalogaj pamti !</p>
                <ul className="nav-list">
                    <li><NavLink to="/">Početna</NavLink></li>
                    <li><NavLink to="/about">O nama</NavLink></li>
                    <li><NavLink to="/meni">Meni</NavLink></li>
                    <li><NavLink to="/contact">Kontakt</NavLink></li>

                    {korisnik && korisnik.role === "gost" && (
                        <li><NavLink to="/order">Naruči</NavLink></li>
                    )}
                    {korisnik && korisnik.role === "admin" && (
                        <li><NavLink to="/admin">Admin panel</NavLink></li>
                    )}

                    {!korisnik && (
                        <li><NavLink to="/login">Prijava</NavLink></li>
                    )}
                    {korisnik && (
                        <li>
                            <button onClick={handleLogout} className="logout-btn">
                                Odjava
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

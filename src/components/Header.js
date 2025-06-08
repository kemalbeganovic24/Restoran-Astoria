import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/logobg.png';

function Header({ korisnik, onLogout }) {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        setMenuOpen(false);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <p className="pisani-tekst-header">"Astoria – srce doma u svakom zalogaju."</p>

                <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>

                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" onClick={closeMenu}>Početna</NavLink></li>
                    <li><NavLink to="/about" onClick={closeMenu}>O nama</NavLink></li>
                    <li><NavLink to="/meni" onClick={closeMenu}>Meni</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu}>Kontakt</NavLink></li>

                    {korisnik?.role === "gost" && (
                        <li><NavLink to="/order" onClick={closeMenu}>Naruči</NavLink></li>
                    )}
                    {korisnik?.role === "admin" && (
                        <li><NavLink to="/admin" onClick={closeMenu}>Admin panel</NavLink></li>
                    )}

                    {!korisnik && (
                        <li><NavLink to="/login" onClick={closeMenu}>Prijava</NavLink></li>
                    )}
                    {korisnik && (
                        <li>
                            <button onClick={handleLogout}>Odjava</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

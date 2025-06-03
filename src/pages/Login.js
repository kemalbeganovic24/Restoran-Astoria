import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import LoginForma from "../components/LoginForma";
import RegisterForm from "../components/RegisterForma";
import '../assets/styles/login.css'

function Login({onLogin}) {
    const [prikaziRegistraciju, setPrikaziRegistaciju] = useState(0);
    const [ulogovaniKorisnik, setUlogovaniKorisnik] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
        if (spremljeniKorisnik) {
            setUlogovaniKorisnik(JSON.parse(spremljeniKorisnik));
        }
    }, []);

    const handleLogin = (korisnik) => {
        localStorage.setItem("ulogovaniKorisnik", JSON.stringify(korisnik));
        localStorage.setItem("role", korisnik.role);
        onLogin(korisnik);
        if (korisnik.role === "admin") navigate("/welcome");
        else navigate("/welcome");
    };
    const handleRegister = (korisnik) => {
        console.log('Pokusaj registracije:',korisnik);
    }
    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2 className="login-title">{prikaziRegistraciju ? "Registracija" : "Prijava"}</h2>
                <div className="login-tabs">
                    <button
                        className={!prikaziRegistraciju ? "active-tab" : ""}
                        onClick={() => setPrikaziRegistaciju(false)}>Prijava</button>
                    <button
                        className={prikaziRegistraciju ? "active-tab" : ""}
                        onClick={() => setPrikaziRegistaciju(true)}>Registracija</button>
                </div>

                {prikaziRegistraciju ? (
                    <RegisterForm onRegister={handleRegister} />
                ) : (
                    <LoginForma onLogin={handleLogin} />
                )}
            </div>
        </div>
    );
}

export default Login;
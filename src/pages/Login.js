import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import LoginForma from "../components/LoginForma";
import RegisterForm from "../components/RegisterForma";
import '../assets/styles/stilovi.css'

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
        <>
            <div style={{ marginTop: '50px' }}>
                <button onClick={() => setPrikaziRegistaciju(false)} className={"button-login"}>Prijava</button>
                <button onClick={() => setPrikaziRegistaciju(true)} className={"button-login1"}>Registracija</button>
            </div>
            {prikaziRegistraciju ? (
                <RegisterForm onRegister={handleRegister} />
            ) : (
                <LoginForma onLogin={handleLogin} />
            )}
        </>
    );
}

export default Login;
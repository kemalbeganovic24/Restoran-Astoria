import React, { useState } from 'react';
import '../assets/styles/home.css';
import { Link } from 'react-router-dom';


function Home() {
    const [formData, setFormData] = useState({
        ime: '',
        email: '',
        telefon: '',
        datum: '',
        vrijeme: '',
        brojOsoba: '2'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Podaci za rezervaciju:', formData);
    };

    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 className="pisani-tekst">Dobro došli u naš restoran !</h1>
                    <p >Mjesto gdje se stvaraju nezaboravni trenuci!</p>
                    <Link to="/rezervacija" className="reservation-btn">
                        Rezerviši sto
                    </Link>
                </div>
            </div>
            
        </>
    );
}

export default Home;

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
                    <h1>Dobro došli u naš restoran</h1>
                    <p>Mjesto gdje se stvaraju nezaboravni trenuci</p>
                    <Link to="/rezervacija" className="reservation-btn">
                        Rezerviši sto
                    </Link>
                </div>
            </div>
            <div className="content">
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <h2>Rezervacija stola</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            name="ime"
                            value={formData.ime}
                            onChange={handleChange}
                            placeholder="Vaše ime i prezime"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email adresa"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="telefon"
                            value={formData.telefon}
                            onChange={handleChange}
                            placeholder="Broj telefona"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            name="datum"
                            value={formData.datum}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="time"
                            name="vrijeme"
                            value={formData.vrijeme}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="brojOsoba"
                            value={formData.brojOsoba}
                            onChange={handleChange}
                            required
                        >
                            <option value="1">1 osoba</option>
                            <option value="2">2 osobe</option>
                            <option value="3">3 osobe</option>
                            <option value="4">4 osobe</option>
                            <option value="5">5 osoba</option>
                            <option value="6">6 osoba</option>
                            <option value="7+">7+ osoba</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-btn">
                        Potvrdi rezervaciju
                    </button>
                </form>
            </div>
        </>
    );
}

export default Home;
import React, { useEffect, useState } from 'react';
import '../assets/styles/contact.css'

export default function KontaktPoruke() {
    const [poruke, setPoruke] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5002/kontaktPoruke')
            .then(res => res.json())
            .then(data => setPoruke(data));
    }, []);

    return(
        <div className="admin-container">
            <div className="card">
                <h2>Kontakt Poruke</h2>
                {poruke.length === 0 ? (
                    <p className="poruka">Nema poruka.</p>
                ) : (
                    <ul className="order-list">
                        {poruke.map(poruka => (
                            <li key={poruka.id} className="order-item">
                                <div className="form-info">
                                    <p><strong>Ime:</strong> {poruka.name}</p>
                                    <p><strong>Prezime:</strong> {poruka.lastName}</p>
                                    <p><strong>Email:</strong> {poruka.email}</p>
                                    <p><strong>Broj telefona:</strong> {poruka.phone}</p>
                                    <p><strong>Poruka:</strong> {poruka.message}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    )
}
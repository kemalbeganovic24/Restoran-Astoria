import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/order.css';
import pizzaImg from '../assets/images/pizza.png'
import piletinaImg from '../assets/images/piletina.png'
import maslanicaImg from '../assets/images/maslanica.png'
import palacinkaImg from '../assets/images/palacinka.png'
import filetoImg from '../assets/images/filleto.png'
import rizotoImg from '../assets/images/rizoto.png'
import ustipciImg from '../assets/images/ustipci.png'
import sendvicImg from '../assets/images/sendivc.png'

function Order() {
    const navigate = useNavigate();
    const korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    const [selectedItems, setSelectedItems] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 4000); // 4 sekunde

            return () => clearTimeout(timer);
        }
    }, [message]);

    const meni = [
        {
            id: 1,
            naziv: 'Margarita Pizza',
            cijena: 12.50,
            slika: pizzaImg,
        },
        {
            id: 2,
            naziv: 'Pohovana Piletina',
            cijena: 13.00,
            slika: piletinaImg,
        },
        {
            id: 3,
            naziv: 'Chicken Sendvič',
            cijena: 9.50,
            slika: sendvicImg,
        },
        {
            id: 4,
            naziv: 'Maslanica',
            cijena: 13.00,
            slika: maslanicaImg,
        },
        {
            id: 5,
            naziv: 'Filertto di pollo',
            cijena: 9.60,
            slika: filetoImg,
        },
        {
            id: 6,
            naziv: 'Rižoto Vegetariana',
            cijena: 4.50,
            slika: rizotoImg,
        },
        {
            id: 7,
            naziv: 'Uštipci sa sirom',
            cijena: 4.00,
            slika: ustipciImg,
        },
        {
            id: 8,
            naziv: 'Palacinči',
            cijena: 7.00,
            slika: palacinkaImg,
        }
    ];

    const handleSelect = (item) => {
        const exists = selectedItems.find(i => i.id === item.id);
        if (exists) {
            setSelectedItems(selectedItems.filter(i => i.id !== item.id));
        } else {
            setSelectedItems([...selectedItems, { id: item.id, naziv: item.naziv }]);
        }
    };

    const handleOrder = async () => {
        if (!korisnik) {
            navigate('/login');
            return;
        }

        if (selectedItems.length === 0) {
            setMessage('Molimo odaberite barem jednu stavku.');
            return;
        }

        const novaNarudzba = {
            items: selectedItems,
            approved: false,
            korisnik: korisnik.ime
        };

        try {
            const res = await fetch('http://localhost:5002/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novaNarudzba)
            });

            if (res.ok) {
                setMessage('Narudžba uspješno poslana!');
                setSelectedItems([]);
            } else {
                setMessage('Greška pri slanju narudžbe.');
            }
        } catch (error) {
            console.error('Fetch greška:', error);
            setMessage('Greška pri slanju narudžbe.');
        }
    };

    return (
        <div className="order-page">
            <h2>Izaberite proizvode</h2>
            <div className="card-grid">
                {meni.map(item => {
                    const isSelected = selectedItems.some(i => i.id === item.id);
                    return (
                        <div key={item.id} className="card">
                            <img src={item.slika} alt={item.naziv} />
                            <div className="card-body">

                                <h3>{item.naziv}</h3>
                                <p className="price">{item.cijena.toFixed(2)}KM</p>
                                <button
                                    className={`select-btn ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handleSelect(item)}
                                >
                                    {isSelected ? 'Odabrano' : 'Select'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="submit-btn" onClick={handleOrder}>
                {korisnik ? 'Pošalji narudžbu' : 'Prijavi se za narudžbu'}
            </button>
            {message && <p className="success-message">{message}</p>}
        </div>
    );
}

export default Order;

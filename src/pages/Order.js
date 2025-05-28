import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/order.css'

function Order() {
    const navigate = useNavigate();
    const korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    const [selectedItem, setSelectedItem] = useState('');
    const [message, setMessage] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [orders, setOrders] = useState([]);


    const meni = [
        { id: 1, naziv: 'Pizza Margherita' },
        { id: 2, naziv: 'Ćevapi' },
        { id: 3, naziv: 'Piletina s rižom' },
        { id: 4, naziv: 'Pasta Carbonara' },
        { id: 5, naziv: 'Salata sa tunjevinom' }
    ];

    const handleCheckboxChange = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
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
    };

    return (
        <div className="order-page">
            <h2>Meni</h2>
            <form className="order-form" onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {meni.map(item => (
                        <li key={item.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="meni"
                                    value={item.naziv}
                                    checked={selectedItems.includes(item.naziv)}
                                    onChange={() => handleCheckboxChange(item.naziv)}
                                />
                                {' '}{item.naziv}
                            </label>
                        </li>
                    ))}
                </ul>
                <button type="submit">
                    {korisnik ? 'Pošalji narudžbu' : 'Prijavi se za narudžbu'}
                </button>
                {message && <p className="success-message">{message}</p>}
            </form>
        </div>
    );
}

export default Order;

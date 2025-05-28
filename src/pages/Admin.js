import React, { useEffect, useState } from 'react';
import '../assets/styles/admin-panel.css';

export default function AdminPanel() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5002/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleApprove = async (id) => {
        await fetch(`http://localhost:5002/orders/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ approved: true }),
        });
        setOrders(orders.map(order => order.id === id ? { ...order, approved: true } : order));
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>
            <div className="card">
                <h2>Narudžbe</h2>
                {orders.length === 0 ? (
                    <p>Nema narudžbi.</p>
                ) : (
                    <ul className="order-list">
                        {orders.map(order => (
                            <li key={order.id} className="order-item">
                                <div className="order-info">
                                    <p><strong>Narudžba #{order.id}</strong></p>
                                    <p><strong>Stavke:</strong></p>
                                    <ul>
                                        {order.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="order-status">
                                    {order.approved ? (
                                        <span className="approved">✅ Odobreno</span>
                                    ) : (
                                        <button onClick={() => handleApprove(order.id)} className="approve-btn">✅ Odobri</button>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

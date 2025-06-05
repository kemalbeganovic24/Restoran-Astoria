import React from 'react';
import '../assets/styles/meni.css'; // promijenjen import na vaš postojeći CSS

function MenuCard({ title, imageUrl }) {
    return (
        <div className="menu-card">
            <div className="menu-card-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="menu-card-content">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default MenuCard;
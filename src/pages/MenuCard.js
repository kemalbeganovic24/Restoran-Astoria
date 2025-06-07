import React from 'react';
import '../assets/styles/meni.css';

function MenuCard({ title, imageUrl, onClick, showAddButton, price }) {
    return (
        <div className={`menu-card ${onClick ? 'clickable' : ''}`} onClick={onClick}>
            <div className="menu-card-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="menu-card-content">
                <h3>{title}</h3>
                {price && <div className="price">{price} KM</div>}
                {showAddButton && (
                    <button 
                        className="add-button"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        Dodaj
                    </button>
                )}
            </div>
        </div>
    );
}

export default MenuCard;

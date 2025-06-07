import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from './MenuCard';
import piletinaImage from '../assets/images/piletina.png';
import tjesteninaImage from '../assets/images/tjestenina.png';
import pizzaImage from '../assets/images/pizza.png';
import palacinkeImage from '../assets/images/palacinka.png';
import sokoviImage from '../assets/images/sokovi.png';
import '../assets/styles/meni.css';

function Meni() {
    const navigate = useNavigate();

    const menuItems = [
        {
            title: "Piletina",
            imageUrl: piletinaImage,
            path: "/piletina"
        },
        {
            title: "Tjestenina",
            imageUrl: tjesteninaImage,
            path: "/tjestenina"
        },
        {
            title: "Pizza",
            imageUrl: pizzaImage,
            path: "/pizza"
        },
        {
            title: "Palačinke",
            imageUrl: palacinkeImage,
            path: "/palacinke"
        },
        {
            title: "Pića",
            imageUrl: sokoviImage,
            path: "/pica"
        }
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="meni-container">
            <h2 className="section-title">Glavni Meni</h2>
            <div className="menu-cards-container">
                {menuItems.map((item, index) => (
                    <MenuCard
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        onClick={() => handleCardClick(item.path)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Meni;
import React from 'react';
import MenuCard from './MenuCard';
import piletinaImage from '../assets/images/piletina.png';
import palacinkeImage from '../assets/images/palacinka.png';
import pizzaImage from '../assets/images/pizza.png';
import tjesteninaImage from '../assets/images/sendivc.png';
import picaImage from '../assets/images/rizoto.png';

function Meni() {
    const menuItems = [
        {
            title: "Piletina",
            imageUrl: piletinaImage
        },
        {
            title: "Palačinke",
            imageUrl: palacinkeImage
        },
        {
            title: "Pizza",
            imageUrl:pizzaImage
        },
        {
            title: "Tjestenina",
            imageUrl: tjesteninaImage
        },
        {
            title: "Pića",
            imageUrl: picaImage
        }
    ];

    return (
        <div className="content">
            <div className="menu-cards-container">
                {menuItems.map((item, index) => (
                    <MenuCard 
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Meni;
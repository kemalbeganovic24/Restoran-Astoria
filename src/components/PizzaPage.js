import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../pages/MenuCard';
import margheritaImage from '../assets/images/margherita.png';
import CapriciosaImage from '../assets/images/Capricciosa.png';
import PeperoniImage from '../assets/images/Pepperoni.png';
import VegetarianaImage from '../assets/images/Vegetariana.png';
import HawaiianaImage from '../assets/images/Hawaiiana.png';
import MexicanaImage from '../assets/images/Mexicana.png';


function PizzaPage() {
    const navigate = useNavigate();
    const pizzaJela = [
        { title: "Margherita", imageUrl: margheritaImage, price: "10.00" },
        { title: "Capricciosa", imageUrl: CapriciosaImage, price: "12.00" },
        { title: "Pepperoni", imageUrl: PeperoniImage, price: "11.00" },
        { title: "Vegetariana", imageUrl: VegetarianaImage, price: "11.00" },
        { title: "Hawaiiana", imageUrl: HawaiianaImage, price: "12.50" },
        { title: "Mexicana", imageUrl:MexicanaImage, price: "13.50" }
    ];

    return (
        <div className="meni-container">
            <h2 className="section-title">Pizza</h2>
            <button className="back-button" onClick={() => navigate('/meni')}>
                Nazad na Meni
            </button>
            
            <div className="menu-cards-container">
                {pizzaJela.map((jelo, index) => (
                    <MenuCard
                        key={index}
                        title={jelo.title}
                        imageUrl={jelo.imageUrl}
                        price={jelo.price}
                        showAddButton={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default PizzaPage;
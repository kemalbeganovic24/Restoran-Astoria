import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../pages/MenuCard';
import BananaImage from '../assets/images/Banana.png';
import NutellaImage from '../assets/images/Nutella.png';
import JaffaImage from '../assets/images/Jaffa.png';
import CherryImage from '../assets/images/Cherry.png';
import OreoImage from '../assets/images/Oreo.png';
import PlazmaImage from '../assets/images/Plazma.png';


function PalacinkePage() {
    const navigate = useNavigate();
    const palacinkeJela = [
        { title: "Nutella palačinka", imageUrl: NutellaImage, price: "5.00" },
        { title: "Jaffa palačinka", imageUrl: JaffaImage, price: "5.00" },
        { title: "Cherry palačinka", imageUrl: CherryImage, price: "6.00" },
        { title: "Oreo palačinka", imageUrl: OreoImage, price: "6.50" },
        { title: "Banana palačinka", imageUrl: BananaImage, price: "6.50" },
        { title: "Plazma palačinka", imageUrl: PlazmaImage, price: "6.00" }
    ];

    return (
        <div className="meni-container"> 
            <h2 className="section-title">Palačinke</h2>
            <button className="back-button" onClick={() => navigate('/meni')}>
                Nazad na Meni
            </button>
            <div className="menu-cards-container">
                {palacinkeJela.map((jelo, index) => (
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

export default PalacinkePage;
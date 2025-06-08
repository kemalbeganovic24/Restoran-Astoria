import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../pages/MenuCard';
import spagetibolonjezeImage from '../assets/images/spagetibolonjeze.png';
import penneImage from '../assets/images/penne.png';
import pastaalfredoImage from '../assets/images/pastaalfredo.png';
import carbonaraImage from '../assets/images/carbonara.png';
import maccheeseImage from '../assets/images/maccheese.png';

function TjesteninaPage() {
    const navigate = useNavigate();
    const tjesteninaJela = [
        { title: "Špageti Bolonjeze", imageUrl:spagetibolonjezeImage, price: "10.00" },
        { title: "Penne Arrabiata", imageUrl: penneImage, price: "11.00" },
        { title: "Pasta Alfredo", imageUrl: pastaalfredoImage, price: "13.00" },
        { title: "Carbonara", imageUrl: carbonaraImage, price: "12.00" },
        { title: "Mac & Cheese", imageUrl: maccheeseImage, price: "9.00" }
    ];

    return (
        <div className="meni-container">
            <h2 className="section-title">Tjestenina</h2>
            <button className="back-button" onClick={() => navigate('/meni')}>
                Nazad na Meni
            </button>
            
            <div className="menu-cards-container">
                {tjesteninaJela.map((jelo, index) => (
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

export default TjesteninaPage;
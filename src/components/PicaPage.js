import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../pages/MenuCard';
import OranginaImage from '../assets/images/Orangina.png' ;
import CappyImage from '../assets/images/Cappy.png' ;
import SchweppesImage from '../assets/images/schweppes.png' ;
import CedevitaImage from '../assets/images/Cedevita.png' ;
import LimunadaImage from '../assets/images/Limunada.png' ;


function PicaPage() {
    const navigate = useNavigate();
    const picaJela = [
        { title: "Orangina", imageUrl: OranginaImage, price: "3.00" },
        { title: "Cappy", imageUrl: CappyImage, price: "3.00" },
        { title: "Schweppes", imageUrl: SchweppesImage, price: "4.00" },
        { title: "Cedevita", imageUrl: CedevitaImage, price: "2.50" },
        { title: "Limunada", imageUrl: LimunadaImage, price: "3.50" },
    ];

    return (
        <div className="meni-container">
        <h2 className="section-title">Pića</h2>
            <button className="back-button" onClick={() => navigate('/meni')}>
                Nazad na Meni
            </button>
            <div className="menu-cards-container">
                {picaJela.map((jelo, index) => (
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

export default PicaPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../pages/MenuCard';
import piletinaImage from '../assets/images/piletina.png';
import pilecifileImage from '../assets/images/pilecifile.png';
import currypiletinaImage from '../assets/images/currypiletina.png';
import pileciraznjiciImage from '../assets/images/pileciraznjici.png';
import pilecimedaljoniImage from '../assets/images/pilecimedaljoni.png';





function PiletinaPage() {
    const navigate = useNavigate();
    const piletinaJela = [
        { title: "Pohovana Piletina", imageUrl: piletinaImage, price: "12.00" },
        { title: "Pileći File", imageUrl: pilecifileImage, price: "14.00" },
        { title: "Piletina Curry", imageUrl: currypiletinaImage, price: "10.00" },
        { title: "Pileći Ražnjići", imageUrl: pileciraznjiciImage, price: "13.00" },
        { title: "Pileći Medaljoni", imageUrl: pilecimedaljoniImage, price: "15.00" }
    ];

    return (
        <div className="meni-container">
            <h2 className="section-title">Pileća Jela</h2>
            <button className="back-button" onClick={() => navigate('/meni')}>
                Nazad na Meni
            </button>
            
            <div className="menu-cards-container">
                {piletinaJela.map((jelo, index) => (
                    <MenuCard
                        key={index}
                        title={jelo.title}
                        imageUrl={jelo.imageUrl}
                        price={jelo.price}
                        showAddButton={false}
                    />
                ))}
            </div>
        </div>
    );
}

export default PiletinaPage;
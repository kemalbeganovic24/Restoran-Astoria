import React, { useEffect, useState } from 'react';
import profile1 from '../assets/images/profile1.jpg';

const ReviewSlider = () => {
    const reviews = [
        {
            id: 1,
            ime: "Amina Hodžić",
            tekst: "Najbolja pohovana piletina u gradu! Osoblje je izuzetno ljubazno, a ambijent predivan.",
            ocjena: 5,
            slika: profile1
        },
        {
            id: 2,
            ime: "Emir Kovačević",
            tekst: "Carbonara je fantastična, pravi italijanski ukus. Definitivno ću se vratiti ponovo!",
            ocjena: 5,
            slika: profile1
        },
        {
            id: 3,
            ime: "Sara Mehić",
            tekst: "Plazma palačinke su nevjerovatne! Restoran ima odličnu atmosferu i brzu uslugu.",
            ocjena: 4,
            slika: profile1
        },
        {
            id: 4,
            ime: "Amar Dizdarević",
            tekst: "Svaki put kada dođem, hrana je savršena. Posebno preporučujem deserte!",
            ocjena: 5,
            slika: profile1
        },
        {
            id: 5,
            ime: "Lejla Bašić",
            tekst: "Kvalitet hrane je izvanredan, a cijene su pristupačne. Najbolji restoran u Sarajevu!",
            ocjena: 5,
            slika: profile1
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div className="review-slider">
            <h2>Šta kažu naši gosti</h2>
            <div className="slider-container">
                <div 
                    className="slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {[...reviews, ...reviews].map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="profile-image">
                                <img src={review.slika} alt={review.ime} />
                            </div>
                            <div className="stars">
                                {[...Array(review.ocjena)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="review-text">"{review.tekst}"</p>
                            <p className="reviewer-name">- {review.ime}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
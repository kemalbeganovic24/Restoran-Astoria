import React from 'react';
import '../assets/styles/about.css';
// Import slika - prilagodite nazive prema vašim stvarnim slikama
import restoran1Image from '../assets/images/restoran1.jpg';
import restoran2Image from '../assets/images/restoran2.jpeg';
import restoran3Image from '../assets/images/restoran3.jpeg';
import restoran4Image from '../assets/images/restoran4.jpg';

const About = () => {
    const galleryImages = [
        { imageUrl:restoran1Image, },
        { imageUrl: restoran2Image,  },
        { imageUrl: restoran3Image,  },
        { imageUrl:restoran4Image, }
    ];

    return (
        <div className="about-container">
            <section className="about-section">
                <h1>O Nama</h1>
                <div className="about-content">
                    <p>
                        Dobro došli u restoran Astorija, mjesto gdje se tradicija susreće sa modernim.
                        Restoran Astorija osnovan je 2012. godine iz ljubavi prema dobroj hrani i gostoprimstvu.
                        Od samog početka težimo da spojimo toplinu domaće kuhinje sa savremenim kulinarskim pristupom.
                        Smješten u srcu grada, Astorija je mjesto gdje se ukusi, tradicija i atmosfera stapaju u
                        nezaboravno gastronomsko iskustvo. Naš cilj je jednostavan – da svaki gost osjeti pažnju,
                        kvalitet i autentičnost u svakom zalogaju.
                    </p>
                </div>
            </section>

            <section className="gallery-section">
                <h2>Naš Ambijent</h2>
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.imageUrl} alt={image.alt} />
                            <div className="overlay">
                                <p>{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="location-section">
                <h2>Gdje nas možete pronaći</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.8926670945217!2d17.912972633767435!3d44.20333810592933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee39bbcc2715f%3A0x7b9acd2396aaf6b7!2sAstoria%20Pancakes%20and%20Pizza!5e1!3m2!1sen!2sba!4v1748972451379!5m2!1sen!2sba"
                        width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    );
};

export default About;
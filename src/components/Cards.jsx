import React from 'react';
import cardData from '../cardData.json';
import image1 from '../images/Skills.jpg';
import image2 from '../images/Experience.jpeg';
import image3 from '../images//Education.jpeg';

function Cards() {
    const images = [image1, image2, image3];
    return (
        <div className="card-area">
            <h1 className='trim-title-mobile'>Ekrem Teke</h1>
            <h5 className='trim-title'>Ekrem Teke</h5>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <img className="card-image" src={images[index]}
                            alt="card-images" />
                        <div className="card-content">
                            <h2 className="card-title">{card.name}</h2>
                            <p className="card-price">{card.price}</p>
                            <ul className="card-bullets">
                                {card.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Cards;
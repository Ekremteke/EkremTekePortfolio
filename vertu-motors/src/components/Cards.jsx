import React from 'react';
import cardData from '../cardData.json';

function Cards() {
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <img className="card-image" src={card.image}
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
    );
}

export default Cards;
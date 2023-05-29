import React from 'react';
import cardData from '../cardData.json';

function CardComponent() {
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-price">{card.price}</p>
                    <ul className="card-bullets">
                        {card.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default CardComponent;

import React from 'react'
import image from "../images/Logo Ekrem Teke Calligraphi.png"

function Interior() {
    return (
        <div>
            <div className="interior-container">
                <div className="interior-content-container">
                    <h3 className="interior-title">Calligraphy</h3>
                    <p className="interior-text">
                        Practices calligraphy as a hobby. Through this art, He has met many good people and
                        volunteered for various charity events, writing calligraphy for visitors. Calligraphy is like meditation for him.
                    </p>
                    <button className="btn-request-video">Order Button Coming Soon</button>
                </div>
                <div className="interior-image-container">
                    <img className="interior-image" src={image} alt="Ekrem's calligraphic name" />
                </div>
            </div>
            <div className="interior-container-grid">
                <div className="interior-content-container-grid">
                    <h1 className="interior-title-grid">Calligraphy</h1>
                    <p className="interior-text-grid">
                        Practices calligraphy as a hobby. Through this art, He has met many good people and
                        volunteered for various charity events, writing calligraphy for visitors. Calligraphy is like meditation for him.
                    </p>
                    
                </div>
                <button className="btn-test-drive-mobile2">Order Button Coming Soon</button>
                <div className="interior-image-container-grid">
                    <img className="interior-image" src={image} alt="Ekrem's calligraphic name" />
                </div>
            </div>

        </div>
    )
}

export default Interior

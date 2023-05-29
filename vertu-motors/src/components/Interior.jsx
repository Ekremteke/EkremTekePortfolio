import React from 'react'
import image from "../images/interior.png"

function Interior() {
  return (
      <div className="interior-container">
          <div className="interior-content-container">
              <h3 className="interior-title">Explore the new BMW i4 range interior</h3>
              <p className="interior-text">
                        From the cool Trend and SUV-inspired Active to the sporty ST-Line,
                        the eighth generation Fiesta impresses across the range.
                     </p>
              <button className="btn-request-video">Request a Personalised Video</button>
          </div>
          <div className="interior-image-container">
              <img className="interior-image"src={image} alt="interior-image"/>
          </div>
      </div>
  )
}

export default Interior

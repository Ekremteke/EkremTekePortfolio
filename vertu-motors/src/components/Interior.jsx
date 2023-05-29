import React from 'react'
import image from "../images/interior.png"

function Interior() {
  return (
      <div className="pink-box">
          <div className="image-container">
              <img src={image} alt="Example" />
          </div>
          <div className="content-container">
              <h4>Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Button</button>
          </div>
      </div>
  )
}

export default Interior
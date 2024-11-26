import React from "react";

function Hero() {
  return (
    <div>
      <main className="hero">
        <div className="hero-txt">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-button">
            <button className="primary">Shop Now</button>&nbsp;
            <button className="secondary">Category</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Hero;

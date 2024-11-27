import React from "react";

function Hero() {
  return (
    <div>
      <main className="hero">
        <div className="grid grid-cols-12 lg:min-h-[88vh]">
          <div
            className="hero-txt col-start-2 col-span-12 lg:col-start-2
            lg:col-span-6 flex justify-center  mt-12"
          >
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="hero-button flex gap-2 sm:mt-5 ">
              <button className="primary">Shop Now</button>&nbsp;
              <button className="secondary">Category</button>
            </div>
          </div>
          <div className=" col-start-3 col-span-8 lg:col-start-8 lg:col-span-4 mt-12 flex items-center">
            <div className="hero-image">
              <img src="/images/shoe_image.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;

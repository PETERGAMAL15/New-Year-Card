import React from "react";
import "./HeroSlide.css";
import HeroCard from "../HeroCard/HeroCard";
function HeroSlide({ slide }) {
  return (
    <>
      <img className="bgImg" src={slide.bgImg} alt="" />
      <div className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="content">
                
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <HeroCard slide={slide} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlide;

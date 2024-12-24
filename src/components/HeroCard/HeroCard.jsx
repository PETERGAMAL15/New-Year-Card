import React from 'react'
import './HeroCard.css'

const HeroCard = ({slide}) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={slide.bgImg} alt="" />
        <h1>0{slide._id}</h1>
      </div>
      <div className="message">
        <h2>christmas Card </h2>
        <p>{slide.description}</p>
      </div>
    </div>
  )
}

export default HeroCard;
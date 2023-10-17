import React from 'react';
import { hero } from '../../data/navLinks';
import './heroStyles.css';
import { Link } from 'react-router-dom';

const HeroSection = ({ page ,cName}) => {
  const heroIn = hero.find((item) => item.page === page);
  return (
    <div className={cName}>
      <img alt='HeroImg' src={heroIn.imgUrl} />
      
      <div className='hero-text'>
        <h1>{heroIn.header}</h1>
        <p>{heroIn.text}</p>
        <Link to='/'><button className={heroIn.btn ? "show" : ""}>{heroIn.btn}</button></Link>
      </div>
      <div className="bottom-arrow"></div>
    </div>
  )
}

export default HeroSection;
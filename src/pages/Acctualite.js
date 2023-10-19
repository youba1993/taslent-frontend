import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ImageGallery from "react-image-gallery";
import { galimages, socialMediaLinks } from "../data/navLinks"


const Acctualite = () => {
  return (
    <>
    <HeroSection page="Acctualite" cName="hero-mid"/>
    <div className='acctualite'>
    <h2>Pour découvrir nos dernières actualités, consultez les liens situés en bas de cette page. Ils vous redirigeront vers nos comptes sur les réseaux sociaux.</h2>
    
    <ImageGallery items={galimages} loading thumbnailLoading/>

    <ul className="social-links-list">
      {socialMediaLinks.map((link, index) => (
        <li key={index} className="social-link-item">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
          <i class={link.icon}>{link.name}</i>
          </a>
        </li>
      ))}
    </ul>

    </div>
    
    </>
  )
}

export default Acctualite




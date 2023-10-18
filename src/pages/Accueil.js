import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Description from '../components/Description.js/Description'
import Visiter from '../components/Visiter/Visiter'


const Accueil = () => {
  return (
    <>
      <HeroSection page="Accueil" cName="hero" />
      <Description />
      <Visiter />
      <div>
        <iframe
          title="taslentmap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4670.259294372123!2d4.478240188833334!3d36.47302372289086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cfc28db288f5b%3A0x4d0c585a1c71c175!2sTaslent%2C%20Ighram%2C%20Algeria!5e0!3m2!1sen!2sus!4v1697606168078!5m2!1sen!2sus"
          width="90%"
          height="450"
          style={{ border: 0, marginBottom: "3rem", boxShadow: "2rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}

export default Accueil
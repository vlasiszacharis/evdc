import React from "react"
import "./Hero.css"
import Input from "../../components/Search/Search"
import Button from "../../components/Button/Button"
import hero_logo from "../../assets/Hero desktop.png"

function Hero() {
  return (
    <>
      <div className='hero__section'>
        <div className='hero__section_left'>
          <h2 className='hero__section_h2'>#EV Charging Made Easy</h2>
          <h1 className='hero__section_h1'>EVDC is your one-stop EV charging solution</h1>
          <h3 className='hero__section_h3'>
            Search for EV charging points, plan journeys and pay for charging with EVDC Network – wherever you go.
          </h3>
          <div className='hero__section_email_button'>
            <div className='hero__section_email'>
              <Input text={"Email address"} />
            </div>
            <div className='hero__section_button'>
              <Button text={"Get Started"} />
            </div>
          </div>
        </div>

        <div className='hero__section_right'>
          <img src={hero_logo} alt='app_evdc' />
        </div>
      </div>
    </>
  )
}

export default Hero

import React from "react"
import "./Reviews.css"
import Ratings from "../../containers/Ratings/Ratings"
// import { FaChargingStation } from "react-icons/fa"

// import { FaStar } from "react-icons/fa"
// import { FaUser } from "react-icons/fa"
import logo_user from "../../assets/user.png"
import logo_star from "../../assets/star.png"
import logo_download from "../../assets/document-download.svg"
import logo_ios from "../../assets/ios.svg"
import logo_android from "../../assets/android.svg"
function Reviews() {
  return (
    <>
      <div className='main__reviews'>
        <div className='main__reviews-section'>
          <Ratings logo={logo_download} title='300.000 Chargers' text='Europe & Usa' />
        </div>
        <div className='main__reviews-section'>
          <Ratings logo={logo_star} title='4.7 star' text='App store rating' />
        </div>
        <div className='main__reviews-section'>
          <Ratings logo={logo_user} title='20.000 Holders' text='Evdc' />
        </div>
      </div>
      <div className='main__reviews-download'>
        <div className='main__reviews-android'>
          <img src={logo_android} alt='android' />
        </div>
        <div className='main__reviews-ios'>
          <img src={logo_ios} alt='ios' />
        </div>
      </div>
    </>
  )
}

export default Reviews

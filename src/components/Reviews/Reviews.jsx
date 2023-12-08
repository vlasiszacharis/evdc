import React from "react"
import "../../components/Reviews/Reviews.css"
import Ratings from "../Ratings/Ratings"
import { FaChargingStation } from "react-icons/fa"

import { FaStar } from "react-icons/fa"
import { FaUser } from "react-icons/fa"

function Reviews() {
  return (
    <>
      <div className='main__reviews'>
        <div className='main__reviews-section'>
          <Ratings logo={<FaChargingStation />} title='300.000 chargers' text='europe & usa' />
        </div>
        <div className='main__reviews-section'>
          <Ratings logo={<FaStar />} title='4.7 star' text='app store rating' />
        </div>
        <div className='main__reviews-section'>
          <Ratings logo={<FaUser />} title='20.000 holders' text='evdc' />
        </div>
      </div>
    </>
  )
}

export default Reviews

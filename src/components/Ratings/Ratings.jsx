/* eslint-disable react/prop-types */
import React from "react"
import "../../components/Ratings/Ratings.css"

function Ratings({ logo, title, text }) {
  return (
    <div className='main__ratings'>
      <div className='main__rating-logo'>{logo}</div>
      <div className='main__rating-title'>{title}</div>
      <div className='main__rating-text'>{text}</div>
    </div>
  )
}

export default Ratings

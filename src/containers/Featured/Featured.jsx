import React from "react"
import "./Featured.css"
import logo1 from "../../assets/Partner Logo 01.png"
import logo2 from "../../assets/Partner Logo 02.png"
import logo3 from "../../assets/Partner Logo 03.png"
import logo4 from "../../assets/Partner Logo 04.png"
function Featured() {
  return (
    <>
      <div className='main__featured'>
        <div className='main__featured_text'>
          <h2>As featured in</h2>
        </div>
        <div className='main__featured_press'>
          <img src={logo4} alt='bloomberg' />
          <img src={logo3} alt='yahoo finance' />
          <img src={logo2} alt='ap news' />
          <img src={logo1} alt='digital journal' />
        </div>
      </div>
    </>
  )
}

export default Featured

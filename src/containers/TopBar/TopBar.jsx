import React from "react"
import { Link } from "react-router-dom"
import "./TopBar.css"

// eslint-disable-next-line react/prop-types
function TopBar({ logo }) {
  return (
    <>
      <div className='main__topbar'>
        <div className='main__topbar-container'>
          <div className='main__topbar-links'>
            <Link to='partner'>Partner</Link>
            <Link to='socials'>Socials</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar

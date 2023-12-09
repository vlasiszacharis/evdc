import React from "react"
import { Link } from "react-router-dom"
import "./TopBar.css"

function TopBar() {
  return (
    <>
      <div className='Main__Topbar'>
        <div className='main__topbar-links'>
          <Link to='partner'>Partner</Link>
          <Link to='socials'>Socials</Link>
        </div>
      </div>
    </>
  )
}

export default TopBar

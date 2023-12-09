/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

import logo from "../../assets/logo-modified.png"
import { useState } from "react"
import Popup from "../../components/Popup/Popup"
function NavBar() {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className='main__navbar_links'>
        <div className='main__navbar-links_logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='main__navbar-links_container'>
          <Link to='/map'>Map</Link>
          <Link to='/tools'>Tools</Link>
          <Link to='/buy'>Buy EVDC</Link>
          <Link to='about'>About</Link>
          <Link to='help'>Help</Link>
        </div>
        <div className='main_navbar-links_download'>
          <button onClick={handleClick}>Download App</button>
          {toggle === true ? <Popup /> : null}
        </div>
      </div>
    </>
  )
}

export default NavBar

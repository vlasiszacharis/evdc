/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

import logo from "../../assets/logo-modified.png"
import { useState } from "react"
import Popup from "../../components/Popup/Popup"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"

function NavBar() {
  //  useState --> popum menu
  const [toggle, setToggle] = useState(false)
  //  useState --> responsive menu
  const [toggleMenu, setToggleMenu] = useState(true)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleClickMenu = () => {
    setToggleMenu(!toggleMenu)
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
          {/* click download app -->popum menu */}
          <button onClick={handleClick}>Download App</button>
          {toggle === true ? <Popup /> : null}
        </div>
        <div className='main__navbar-links_menu'>
          {toggleMenu === true ? <IoMenu onClick={handleClickMenu} /> : <IoClose onClick={handleClickMenu} />}
        </div>
      </div>
    </>
  )
}

export default NavBar

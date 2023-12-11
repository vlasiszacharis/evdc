/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

import logo from "../../assets/logo-modified.png"
import { useState } from "react"
import Popup from "../../components/Popup/Popup"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import MapPopup from "../../components/MapPopup/MapPopup"

function NavBar() {
  //  useState --> popum menu
  const [toggle, setToggle] = useState(false)
  //  useState --> responsive menu
  const [toggleMenu, setToggleMenu] = useState(true)
  //  useState --> popup menu --map
  const [togglePopupMenu, setTogglePopupMenu] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleClickMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  const handleMouseOver = () => {
    setTogglePopupMenu(true)
  }
  const handleMouseLeave = () => {
    setTogglePopupMenu(false)
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
          <div className='main__navbar-links-map' onMouseLeave={handleMouseLeave}>
            <Link onMouseOver={handleMouseOver}>Map</Link>
            <section>{togglePopupMenu && <MapPopup />}</section>
          </div>

          <div className='main__navbar-links-tools'>
            <Link to='/tools'>Tools</Link>
          </div>
          <div className='main__navbar-links-buy'>
            <Link to='/buy'>Buy EVDC</Link>
          </div>
          <div className='main__navbar-links-about'>
            <Link to='about'>About</Link>
          </div>
          <div className='main__navbar-links-help'>
            <Link to='help'>Help</Link>
          </div>
        </div>
        <div className='main_navbar-links_download'>
          {/* click download app -->popum menu */}
          <button onClick={handleClick}>Download App</button>
          {toggle === true ? <Popup /> : null}
        </div>
        <div className='main__navbar-links_menu'>
          {toggleMenu === true ? <IoMenu size={34} onClick={handleClickMenu} /> : <IoClose size={34} onClick={handleClickMenu} />}
        </div>
      </div>
    </>
  )
}

export default NavBar

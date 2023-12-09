/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Button from "../../components/Button/Button"
import logo from "../../assets/logo-modified.png"
function NavBar() {
  let Download = "Download App"
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
          <Button text={Download} />
        </div>
      </div>
    </>
  )
}

export default NavBar
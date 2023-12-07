/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
import "../NavBar/NavBar.css"
import Button from "../Button/Button"
import logo from "../../assets/Screenshot_1.jpg"
function NavBar() {
  let Download = "Download App"
  return (
    <>
      <div className='main__navbar_links'>
        {/* <div className='main__navbar-links_logo'>
          <Link to='/'>
            <h1>Evdc</h1>
          </Link>
        </div> */}
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

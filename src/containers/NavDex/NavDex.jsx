import React from "react"
import "../../containers/NavDex/NavDex.css"
import logo from "../../assets/logo-modified.png"
import { Link } from "react-router-dom"
function NavDex() {
  return (
    <>
      <div className='dex__navbar'>
        <div className='dex__navbar-container'>
          <div className='dex__navbar-logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='dex__navbar-links'>
            <div>bnb</div>
            <div>
              <button>connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavDex

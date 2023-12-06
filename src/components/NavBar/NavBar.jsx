import React from "react"
import { Link } from "react-router-dom"
import "../NavBar/NavBar.css"
import Button from "../Button/Button"
import logo from "../../assets/LogoPNG.png"
function NavBar() {
  let Download = "Download App"
  return (
    <>
      <div className='Main__NavBar'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <Link to='/map'>Map</Link>
        <Link to='/tools'>Tools</Link>
        <Link to='/buy'>Buy EVDC</Link>
        <Button text={Download} />
      </div>
    </>
  )
}

export default NavBar

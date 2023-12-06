import React from "react"
import { Link } from "react-router-dom"
import "../TopBar/TopBar.css"

function TopBar() {
  return (
    <>
      <div className='Main__Topbar'>
        <Link to='partner'>Become a partner</Link>
        <Link to='about '>About</Link>
      </div>
    </>
  )
}

export default TopBar

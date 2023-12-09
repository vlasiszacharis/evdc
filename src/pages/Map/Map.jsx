import React from "react"
import NavBar from "../../containers/NavBar/NavBar"
import "../Home/Home.css"
import TopBar from "../../containers/TopBar/TopBar"

function Map() {
  return (
    <>
      <div className='Main__Home'>
        <div className='Main__Home-navbar'>
          <TopBar />
          <NavBar />
        </div>
      </div>
    </>
  )
}

export default Map

import React from "react"
// import NavBar from "../../containers/NavBar/NavBar"
import "../Home/Home.css"
// import TopBar from "../../containers/TopBar/TopBar"
import Dex from "../../containers/Dex/Dex"
import NavDex from "../../containers/NavDex/NavDex"

function Buy() {
  return (
    <>
      <div className='main__buy'>
        <div className='main__buy-navbar'>
          <NavDex />
        </div>
        <Dex />
      </div>
    </>
  )
}

export default Buy

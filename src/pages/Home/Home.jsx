import React from "react"
import NavBar from "../../containers/NavBar/NavBar"
import "../Home/Home.css"
import TopBar from "../../containers/TopBar/TopBar"
import Hero from "../../containers/Hero/Hero"
import Reviews from "../../containers/Reviews/Reviews"
// import Featured from "../../containers/Featured/Featured"
import MapPopup from "../../components/MapPopup/MapPopup"
function Home() {
  return (
    <>
      <div className='Main__Home'>
        <div className='Main__Home-navbar'>
          <TopBar />
          <NavBar />
        </div>
        <MapPopup />
        <Hero />
        <Reviews />
        {/* <Featured /> */}
      </div>
    </>
  )
}

export default Home

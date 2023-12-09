import React from "react"
import NavBar from "../../containers/NavBar/NavBar"
import "../Home/Home.css"
import TopBar from "../../containers/TopBar/TopBar"
import Hero from "../../containers/Hero/Hero"
import Reviews from "../../containers/Reviews/Reviews"
import Featured from "../../containers/Featured/Featured"
import Popup from "../../components/Popup/Popup"
function Home() {
  return (
    <>
      <div className='Main__Home'>
        <TopBar />
        <NavBar />
        <Hero />
        <Reviews />
        <Featured />
        <Popup />
      </div>
    </>
  )
}

export default Home

import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import "../Home/Home.css"
import TopBar from "../../components/TopBar/TopBar"
import Hero from "../../components/Hero/Hero"
// import Reviews from "../../components/Reviews/Reviews"
import Featured from "../../components/Featured/Featured"
function Home() {
  return (
    <>
      <div className='Main__Home'>
        <TopBar />
        <NavBar />
        <Hero />
        <Featured />
      </div>
    </>
  )
}

export default Home

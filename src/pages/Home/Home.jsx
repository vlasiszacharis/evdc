import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import "../Home/Home.css"
import TopBar from "../../components/TopBar/TopBar"
function Home() {
  return (
    <>
      <div className='Main__Home'>
        <TopBar />
        <NavBar />
      </div>
    </>
  )
}

export default Home

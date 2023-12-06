import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Map from "./pages/Map/Map"
import Tools from "./pages/Tools/Tools"
import Partner from "./pages/Partner/Partner"
import About from "./pages/About/About"
import Buy from "./pages/Buy/Buy"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='map' element={<Map />} />
        <Route path='tools' element={<Tools />} />
        <Route path='partner' element={<Partner />} />
        <Route path='about' element={<About />} />
        <Route path='buy' element={<Buy />} />
      </Routes>
    </>
  )
}

export default App

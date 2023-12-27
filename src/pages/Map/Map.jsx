import React from "react";
import NavBar from "../../containers/NavBar/NavBar";
import "../Home/Home.css";
import TopBar from "../../containers/TopBar/TopBar";
import Wmap from "../../containers/WebMap/Wmap";

function Map() {
  return (
    <>
      <div className='Main__Home'>
        <div className='Main__Home-navbar'>
          <TopBar />
          <NavBar />
          <Wmap />
        </div>
      </div>
    </>
  );
}

export default Map;

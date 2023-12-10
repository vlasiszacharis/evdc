import React from "react"
import "../Popup/Popup.css"

function Popup() {
  return (
    <>
      <div className='popup__window'>
        <div className='popup__window-up'>
          <h2>Download the App</h2>
          <h3>Charger your EV</h3>
          <div className='popup__window-up_app'>
            <div className='popup__window-up_android'> android </div>
            <div className='popup__window-up_ios'> ios </div>
          </div>
        </div>
        <div className='popup__window-down'>right</div>
      </div>
    </>
  )
}

export default Popup

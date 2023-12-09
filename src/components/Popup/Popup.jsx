import React from "react"
import "../Popup/Popup.css"

function Popup() {
  return (
    <>
      <div className='popup__window'>
        <div className='popup__window-left'>
          <h2>Download the App</h2>
          <h3>Charger your EV</h3>
          <div className='popup__window-left_app'>
            <div className='popup__window-left_android'> android </div>
            <div className='popup__window-left_ios'> ios </div>
          </div>
        </div>
        <div className='popup__window-right'>right</div>
      </div>
    </>
  )
}

export default Popup

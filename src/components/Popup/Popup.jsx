import React from "react"
import "../Popup/Popup.css"
import logo_ios from "../../assets/ios.svg"
import logo_android from "../../assets/android.svg"
function Popup() {
  return (
    <>
      <div className='popup__window'>
        <div className='popup__window-up'>
          <span className='popup__window-up_title'>
            <h2>Download the EVDC App!</h2>
          </span>
          <span className='popup__window-up_text'>
            <h3>Charge your EV</h3>
          </span>

          <div className='popup__window-up_app'>
            <div className='popup__window-up_android'>
              {" "}
              <img src={logo_android} alt='android' />{" "}
            </div>
            <div className='popup__window-up_ios'>
              {" "}
              <img src={logo_ios} alt='ios' />{" "}
            </div>
          </div>
        </div>
        <div className='popup__window-down'>
          <span>barcode</span>
          <span>text</span>
        </div>
      </div>
    </>
  )
}

export default Popup

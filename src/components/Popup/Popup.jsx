import React from "react"
import "../Popup/Popup.css"
import logo_ios from "../../assets/ios.svg"
import logo_android from "../../assets/android.svg"
import QRCode from "react-qr-code"
import { IoMdClose } from "react-icons/io"

// eslint-disable-next-line react/prop-types
function Popup({ onClick }) {
  return (
    <>
      <div className='popup__window'>
        <div className='popup__window-close'>
          <span onClick={onClick}>
            <IoMdClose size={38} />
          </span>
        </div>
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
          <span className='popup__window-qrcode'>
            <QRCode value='https://apps.apple.com/ca/app/evdc-charging-map/id1570309872' size={170} />
          </span>
          <div className='popup__window-description'>
            <h4 className='popup__window-title'>Scan the QR code</h4>
            <p className='popup__window-text'>using your camera</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup

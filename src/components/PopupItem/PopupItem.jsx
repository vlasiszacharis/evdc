import React from "react"
import "../../components/PopupItem/PopupItem.css"
// eslint-disable-next-line react/prop-types
function PopupItem({ popup_img, title, text, link_name }) {
  return (
    <>
      <div className='popup__item'>
        <div className='popup__item-img'>{popup_img}</div>
        <div className='popup__item-content'>
          <h4>{title}</h4>
          <p>{text}</p>
          <a>{link_name}</a>
        </div>
      </div>
    </>
  )
}

export default PopupItem

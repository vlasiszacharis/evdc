import React from "react";
import "../../components/PopupItem/PopupItem.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function PopupItem({ popup_img, title, text, link_name }) {
  return (
    <>
      <div className='popup__item'>
        <div className='popup__item-img'>{popup_img}</div>
        <div className='popup__item-content'>
          <h4>{title}</h4>
          <p>{text}</p>
          {link_name === "Explore the map" && <Link to='/map'>{link_name}</Link>}
          {link_name === "Download the App" && <Link to='/'>{link_name}</Link>}
        </div>
      </div>
    </>
  );
}

export default PopupItem;

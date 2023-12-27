import React from "react";
import "../../components/MapPopup/MapPopup.css";
import PopupItem from "../PopupItem/PopupItem";
import { FaMobileScreen } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";

function MapPopup() {
  return (
    <>
      <div className='map__popup'>
        <div className='map__popup-app'>
          <PopupItem
            popup_img={<FaMobileScreen size={36} />}
            title={"Mobile App"}
            text={"300.000 charging points"}
            link_name={"Download the App"}
          />
        </div>
        <div className='map__popup-web'>
          <PopupItem
            popup_img={<FaDesktop size={36} />}
            title={"Web Map"}
            text={"Our wide map of EV charging points "}
            link_name={"Explore the map"}
          />
        </div>
      </div>
    </>
  );
}

export default MapPopup;

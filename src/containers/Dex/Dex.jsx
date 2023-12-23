/* eslint-disable react/jsx-key */
import React from "react";
import "../../containers/Dex/Dex.css";
import NavDex from "../NavDex/NavDex";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import coins from "../../coins.json";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import Slippage from "../../components/Slippage/Slippage";
function Dex() {
  const [settings, setSettings] = useState("dex__main-swap_settings");
  const [arrowSettings, setArrowSettings] = useState("dex__main-swap_change");
  const [slippage, setSlippage] = useState(false);
  const handleMouse = () => {
    setSettings("dex__main-swap_settings-active");
  };
  const handleMouseOut = () => {
    setSettings("dex__main-swap_settings");
  };
  const handleMouseArrow = () => {
    setArrowSettings("dex__main-swap_change-active");
  };
  const handleMouseOutArrow = () => {
    setArrowSettings("dex__main-swap_change");
  };

  const handleClick = () => {
    setSlippage(true);
  };

  return (
    <>
      <div className='dex__main'>
        <NavDex />
        {slippage && <Slippage />}
        {!slippage && (
          <div className='dex__main-swap_rectangle'>
            <div className='dex__main-swap_options'>
              <div className='dex__main-swap_nav'>
                <div className='dex__main-swap_title'>Swap</div>
                <div className={settings}>
                  <button onMouseOver={handleMouse} onMouseLeave={handleMouseOut} onClick={handleClick}>
                    <IoSettingsSharp size={26} />
                  </button>
                </div>
              </div>
              <div className='dex__main-swap_buy-token'>
                <select>
                  {coins.map((event) => (
                    <option>{event.coin}</option>
                  ))}
                </select>
              </div>
              <div className='dex__main-swap_buy'>
                <input placeholder='0' />
              </div>
              <div className={arrowSettings}>
                <button onMouseOver={handleMouseArrow} onMouseLeave={handleMouseOutArrow}>
                  <HiMiniArrowsUpDown size={26} />
                </button>
              </div>
              <div className='dex__main-swap_sell-token'>
                <select>
                  <option>Bitcoin</option>
                  <option>Ethereum</option>
                </select>
              </div>
              <div className='dex__main-swap_sell'>
                <input placeholder='0' />
              </div>
              <div className='dex__main-swap-button'></div>

              <button>Connect Wallet</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dex;

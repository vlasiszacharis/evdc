/* eslint-disable react/jsx-key */
import React from "react";
import "../../containers/Dex/Dex.css";
import NavDex from "../NavDex/NavDex";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import coins from "../../coins.json";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import Slippage from "../../components/Slippage/Slippage";
import Wallet from "../../components/Wallet/Wallet";
function Dex() {
  const [settings, setSettings] = useState("dex__main-swap_settings");
  const [arrowSettings, setArrowSettings] = useState("dex__main-swap_change");
  const [slippage, setSlippage] = useState(false);
  const [wallet, setWallet] = useState(false);
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

  const handleslippage = () => {
    setSlippage(false);
  };
  const handleWallet = () => {
    setWallet(!wallet);
  };

  const handleClose = () => {
    setWallet(false);
  };
  return (
    <>
      <div className='dex__main'>
        <NavDex handleWallet={handleWallet} />
        {wallet && <Wallet handleClose={handleClose} />}
        {slippage && <Slippage handleslippage={handleslippage} />}
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
              {/* switch token - arrows */}
              <div className={arrowSettings}>
                <button onMouseOver={handleMouseArrow} onMouseLeave={handleMouseOutArrow}>
                  <HiMiniArrowsUpDown size={26} />
                </button>
              </div>
              <div className='dex__main-swap_sell-token'>
                <select>
                  {coins.map((event) => (
                    <option>{event.coin}</option>
                  ))}
                </select>
              </div>
              <div className='dex__main-swap_sell'>
                <input placeholder='0' />
              </div>
              <div className='dex__main-swap-button'></div>

              <button onClick={handleWallet}>Connect Wallet</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dex;

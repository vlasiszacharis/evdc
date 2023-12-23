import React from "react";
import "../../components/Slippage/Slippage.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Slippage({ handleslippage }) {
  const [colorArrow, setColorArrow] = useState("dex__main-swap_settings-slippage_arrow");
  const [colorX, setColorX] = useState("dex__main-swap_settings-slippage_x");
  const handleMouseArrow = () => {
    setColorArrow("dex__main-swap_settings-slippage_arrow-active");
  };
  const handleMouseArrowLeave = () => {
    setColorArrow("dex__main-swap_settings-slippage_arrow");
  };
  const handleMouseX = () => {
    setColorX("dex__main-swap_settings-slippage_x-active");
  };
  const handleMouseXLeave = () => {
    setColorX("dex__main-swap_settings-slippage_x");
  };
  return (
    <div className='dex__main-swap_settings-slippage'>
      <div className='dex__main-swap_settings-slippage_back'>
        <div className={colorArrow}>
          <button onClick={handleslippage} onMouseOver={handleMouseArrow} onMouseLeave={handleMouseArrowLeave}>
            <FaLongArrowAltLeft size={24} />
          </button>
        </div>
        <h3>Back</h3>
        <div className={colorX}>
          <button onClick={handleslippage} onMouseOver={handleMouseX} onMouseLeave={handleMouseXLeave}>
            <IoClose size={24} />
          </button>
        </div>
      </div>

      <div className='dex__main-swap_settings-slippage_tolerance'>Options</div>
    </div>
  );
}

export default Slippage;

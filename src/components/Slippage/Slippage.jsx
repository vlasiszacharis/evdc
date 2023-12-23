import React from "react";
import "../../components/Slippage/Slippage.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Slippage() {
  return (
    <div className='dex__main-swap_settings-slippage'>
      <div className='dex__main-swap_settings-slippage_back'>
        <div className='dex__main-swap_settings-slippage_arrow'>
          <button>
            <FaLongArrowAltLeft size={24} />
          </button>
        </div>
        <div className='dex__main-swap_settings-slippage_x'>
          <button>
            <IoClose size={24} />
          </button>
        </div>
      </div>

      <div className='dex__main-swap_settings-slippage_tolerance'>Options</div>
    </div>
  );
}

export default Slippage;

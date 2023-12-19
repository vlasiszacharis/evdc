import React from "react"
import "../../containers/Dex/Dex.css"
import NavDex from "../NavDex/NavDex"
function Dex() {
  return (
    <>
      <div className='dex__main'>
        <NavDex />
        <div className='dex__main-swap_rectangle'>
          <div className='dex__main-swap_options'>
            <div className='dex__main-swap_nav'>
              <div className='dex__main-swap_title'>Swap</div>
              <div className='dex__main-swap_settings'>Settings</div>
            </div>
            <div className='dex__main-swap_buy-token'>
              <select>
                <option>Bitcoin</option>
                <option>Ethereum</option>
              </select>
            </div>
            <div className='dex__main-swap_buy'>
              <input placeholder='0' />
            </div>
            <div className='dex__main-swap_change'>arrows</div>
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

            <button>Swap</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dex

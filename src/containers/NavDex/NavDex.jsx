import React from "react";
import "../../containers/NavDex/NavDex.css";
import logo from "../../assets/logo-modified.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function NavDex({ handleWallet }) {
  return (
    <>
      <div className='dex__navbar'>
        <div className='dex__navbar-container'>
          <div className='dex__navbar-logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='dex__navbar-links'>
            <div className='dex__navbar-links_connect'>
              <button onClick={handleWallet}>Connect to a wallet </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavDex;

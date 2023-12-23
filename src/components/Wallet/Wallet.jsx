import React from "react";
import "../../components/Wallet/Wallet.css";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function Wallet({ handleClose }) {
  return (
    <>
      <div className='connect__wallet'>
        <div className='connect__wallet-close'>
          <button onClick={handleClose}>
            <IoClose size={26} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Wallet;

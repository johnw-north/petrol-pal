import React, { useState } from 'react';
import QuickCheck from "./QuickCheck";
import FullCheck from "./FullCheck";

function Checks() {

  const [checkType, setCheckType] = useState(<QuickCheck />)
  
  function quickCheck() {
      setCheckType(<QuickCheck />)
  }

  function fullCheck() {
      setCheckType(<FullCheck />)
  }

  return (
    <div className="checks">
      <div className="checks__btns">
        <button className="btn__quick" onClick={quickCheck}>Quick Check</button>
        <button className="btn__full" onClick={fullCheck}>Full Check</button>
      </div>
      {checkType}
    </div>
  );
}

export default Checks;

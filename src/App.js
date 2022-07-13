import React, { useState } from 'react';
import CarInfo from "./components/CarInfo";
import QuickCheck from "./components/QuickCheck"
import FullCheck from "./components/FullCheck"

function App() {

  const [formData, setFormData] = useState(
    {
      mpg: 0,
      fuelCap: 0,
      fuelType: 0,
      price: 0
    }
    )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const [checkType, setCheckType] = useState(<QuickCheck total={formData.mpg} />)
  
  function quickCheck() {
      setCheckType(<QuickCheck total={formData.mpg} />)
  }

  function fullCheck() {
      setCheckType(<FullCheck />)
  }

  return (
    <div className="App">
      <header>
        <div className="header__title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <CarInfo mpgHandle={handleChange} />
        <div className="checks__btns">
          <button className="btn__quick" onClick={quickCheck}>Quick Check</button>
          <button className="btn__full" onClick={fullCheck}>Full Check</button>
        </div>
        {checkType}
      </main>
    </div>
  );
}

export default App;

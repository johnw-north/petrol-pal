import React, { useState } from 'react';

import CarInfo from "./components/CarInfo";
import QuickCheck from "./components/QuickCheck"
import FullCheck from "./components/FullCheck"

function App() {

  const [carData, setCarData] = useState(
    {
      fuelType: "petrol",
      carSize: "medium",
      mpg: 36,
      fuelCap: 50,
      price: 190,
    }
  )

  function handleChange(event) {
    setCarData(prevCarData => {
      return {
        ...prevCarData,
        [event.target.name]: event.target.value
      }
    })
  }

  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <header>
        <div className="header__title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <CarInfo handleChange={handleChange} />
        <div className="checks__btns">
          <button className="btn__quick" onClick={() => setToggle(false)}>Quick Check</button>
          <button className="btn__full" onClick={() => setToggle(true)}>Full Check</button>
        </div>
        {!toggle && <QuickCheck data={carData} />}
        {toggle && <FullCheck data={carData} />}
      </main>
    </div>
  );
}

export default App;

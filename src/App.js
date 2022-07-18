import React, { useState } from 'react';

import CarInfo from "./components/CarInfo";
import QuickCheck from "./components/QuickCheck"

function App() {

  
  const [carData, setCarData] = useState(
    {
      mpg: 36,
      fuelCap: 50,
      price: 190,
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setCarData(prevCarData => {
      return {
        ...prevCarData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSize(event) {
    setCarData(prevCarData => {
      if (event.target.id === "small") {
        return {
          ...prevCarData,
          mpg: 42,
          fuelCap: 40,
        }
      } else if (event.target.id === "medium") {
          return {
            ...prevCarData,
            mpg: 36,
            fuelCap: 50,
          }
      } else {
          return {
            ...prevCarData,
            mpg: 30,
            fuelCap: 60,
          } 
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
        <CarInfo handleChange={handleChange} handleSize={handleSize} />
        {!toggle && <QuickCheck carData={carData} handleChange={handleChange} />}
      </main>
    </div>
  );
}

export default App;

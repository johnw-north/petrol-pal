import React, { useState } from 'react';

import AutoInfo from "./components/AutoInfo";
import ManualInfo from './components/ManualInfo';
import FuelInfo from './components/FuelInfo';
import TravelInfo from "./components/TravelInfo"

function App() {

  const [toggle, setToggle] = useState(true)
  
  function handleToggle() {
    setToggle(!toggle)
  }

  console.log(toggle)

  const [carData, setCarData] = useState(
    {
      mpg: 0,
      fuelCap: 0,
      price: 0,
      size: "",
    }
  )

  function handleChange(event) {
    const {name, value, type, checked, id} = event.target
    setCarData(prevCarData => {
      if (id === "small") {
        return {
          ...prevCarData,
          mpg: 42,
          fuelCap: 40,
        }
      } else if (id === "medium") {
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
    setCarData(prevCarData => {
      return {
        ...prevCarData,
        [name]: type === "checkbox" ? checked : value,        
      }
    })
  }


  return (
    <div className="App">
      <header>
        <div className="header__title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <div className="container">
          {toggle ? 
          <ManualInfo handleToggle={handleToggle} carData={carData} handleChange={handleChange} /> 
          :
          <AutoInfo handleToggle={handleToggle} carData={carData} handleChange={handleChange} />
          }
          <FuelInfo carData={carData} handleChange={handleChange} />
        </div>
        <TravelInfo carData={carData} handleChange={handleChange} />
      </main>
    </div>
  );
}

export default App;

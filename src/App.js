import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

import AutoInfo from "./components/AutoInfo";
import ManualInfo from './components/ManualInfo';
import FuelInfo from './components/FuelInfo';
import TravelInfo from "./components/TravelInfo"

function App() {

  const [toggle, setToggle] = useState(true)
  
  function handleToggle() {
    setToggle(!toggle)
  }

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
      } else if (id === "large") {
          return {
            ...prevCarData,
            mpg: 30,
            fuelCap: 60,
          } 
      } else {
          return {
            ...prevCarData,
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

  const priceLast = 145
  
  const fullTank = ((carData.price / 100) * carData.fuelCap).toFixed(2)
  const fullMiles = ((carData.mpg / 4.54609).toFixed(2) * carData.fuelCap).toFixed(0)
  const lastYear = ((priceLast / 100) * carData.fuelCap).toFixed(2)
  const diff = (((((priceLast / 100) * carData.fuelCap) - ((carData.price / 100) * carData.fuelCap)) / ((priceLast / 100) * carData.fuelCap)) * 100).toFixed(0)

  console.log(typeof diff)

  return (
    <div className="App">
      <header>
        <div className="header--title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <div className="bubble">
          {toggle ? 
          <ManualInfo handleToggle={handleToggle} carData={carData} handleChange={handleChange} /> 
          :
          <AutoInfo handleToggle={handleToggle} carData={carData} handleChange={handleChange} />
          }
          <FuelInfo carData={carData} handleChange={handleChange} />
        </div>
        <div className="bubble">
          <div className="container--c">
            <h1>Full Tank</h1>
            <h2>£ {fullTank}</h2>
            <h2>{fullMiles} Miles</h2>
          </div>
          <div className="container--c">
            <FontAwesomeIcon 
              icon={diff < 0 ? faArrowTrendDown : faArrowTrendUp} 
              style={diff < 0 ? {color: "red", fontSize: "1.5rem"} : {color: "green", fontSize: "1.5rem"}}
            />
            <h3 
              style={diff < 0 ? {color: "red"} : {color: "green"}}>{isNaN(diff) ? 0 : diff}%
            </h3>
          </div>
          <div className="container--c">
            <h1>Last Year</h1>
            <h2>£ {lastYear}</h2>
            <h2>{fullMiles} Miles</h2>
          </div>
        </div>       
        <TravelInfo carData={carData} handleChange={handleChange} />
      </main>
    </div>
  );
}

export default App;

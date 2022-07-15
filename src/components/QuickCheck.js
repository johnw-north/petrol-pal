import React, { useState } from 'react';

import Card from "./Card";


function QuickCheck(props) {

  const [quickData, setQuickData] = useState(
    {
      miles: 5,
      trips: 1,
      oneWay: true,
    }
  )

  function handleChange(event) {
    setQuickData(prevQuickData => {
      return {
        ...prevQuickData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleCheckbox() {
    setQuickData(prevQuickData => {
      return {
        ...prevQuickData,
        oneWay: !prevQuickData.oneWay
      }
    })
  }

  const cost = ((props.data.price / 100) / (props.data.mpg / 4.54609) * (quickData.miles * quickData.trips) * (quickData.oneWay ? 1 : 2)).toFixed(2)

  const miles = (quickData.miles * quickData.trips) * (quickData.oneWay ? 1 : 2)

  const fullTank = ((props.data.price / 100) * props.data.fuelCap).toFixed(2)

  return (
    <div className="quick__check">        
      <div className="cards">
        <Card 
          title="Quick Check"
          titleTrips="Trips:" 
          exTrips="1"
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
          data={quickData}
        />
      </div>
      
      <div className="results">
        <h1 className="results__title">Results</h1>
        <div className="check__container">
          <h1>Cost</h1>
          <h2>£ {cost}</h2>
          <h2>{miles} miles</h2>
        </div>       
        <div className="check__container">
          <h1>Fill Up Cost</h1>
          <h2>£ {fullTank}</h2>
        </div>       
      </div>         
    </div>
  );
}
  
export default QuickCheck;   
  
  
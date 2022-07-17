import React, { useState, useRef } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

import Card from "./Card";

const libraries = ['places'];

function QuickCheck(props) {

  const [quickData, setQuickData] = useState(
    {
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

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const [distance, setDistance] = useState('0')

  const originRef = useRef()
  const destiantionRef = useRef()


  if (!isLoaded) {
    return (<h1>not working</h1>)
  }

  async function calculateMiles() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: 1,
    })
    setDistance(parseFloat(results.routes[0].legs[0].distance.text))
  }

  function clearRoute() {
    setDistance('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  const cost = ((props.data.price / 100) / (props.data.mpg / 4.54609) * (distance * quickData.trips) * (quickData.oneWay ? 1 : 2)).toFixed(2)

  const miles = (distance * quickData.trips) * (quickData.oneWay ? 1 : 2)

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
          originRef={originRef}
          destiantionRef={destiantionRef}
          calcMiles={calculateMiles}
        />
      </div>

      <div className="container">
        <button onClick={calculateMiles} >CHECK</button>
        <button onClick={clearRoute} >RESET</button>
      </div>
      
      <div className="results">
        <h1 className="results__title">Results</h1>
        <div className="check__container">
          <h1>Cost</h1>
          <h2>£ {cost}</h2>
          <h2>{miles} Miles</h2>
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
  
  
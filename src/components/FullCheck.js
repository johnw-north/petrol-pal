import Card from "./Card";

import React, { useState, useRef } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

function FullCheck(props) {

  const [fullData, setFullData] = useState(
    {
      trips: 1,
      oneWay: true,
    }
  )
    
  function handleChange(event) {
    setFullData(prevFullData => {
      return {
        ...prevFullData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleCheckbox() {
    setFullData(prevFullData => {
      return {
        ...prevFullData,
        oneWay: !prevFullData.oneWay
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

  const cost = ((props.data.price / 100) / (props.data.mpg / 4.54609) * (distance * fullData.trips) * (fullData.oneWay ? 1 : 2)).toFixed(2)

  const miles = (distance * fullData.trips) * (fullData.oneWay ? 1 : 2)

  const fullTank = ((props.data.price / 100) * props.data.fuelCap).toFixed(2)

  return (
    <div className="full__check">
      <div className="cards">
        <Card 
          title="Work" 
          exTrips="20" 
          titleTrips="Trips a month:" 
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
          data={fullData}
          originRef={originRef}
          destiantionRef={destiantionRef}
          calcMiles={calculateMiles}
        />
        <Card 
          title="Shopping" 
          exTrips="3" 
          titleTrips="Trips<br>a month:" 
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
          data={fullData}
          originRef={originRef}
          destiantionRef={destiantionRef}
          calcMiles={calculateMiles}
        />
        <Card 
          title="School" 
          exTrips="10" 
          titleTrips="Trips<br>a month:"
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
          data={fullData}
          originRef={originRef}
          destiantionRef={destiantionRef}
          calcMiles={calculateMiles} 
        />
        <Card 
          title="Other" 
          exTrips="1" 
          titleTrips="Trips<br>a month:" 
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
          data={fullData}
          originRef={originRef}
          destiantionRef={destiantionRef}
          calcMiles={calculateMiles}
        />
      </div>
      
      <div className="results">
        <h1 className="results__title">Results</h1>
        <div className="period">
          <div className="check__container">
            <h1>Yearly</h1>
            <h2>£ {cost}</h2>
            <h2>{miles} Miles</h2>
          </div>
          <div className="check__container">
            <h1>Monthly</h1>
            <h2>£ </h2>
            <h2>{props.data.miles} miles</h2>
          </div>
          <div className="check__container">
            <h1>Weekly</h1>
            <h2>£ </h2>
            <h2>{props.data.miles} miles</h2>
          </div>
          <div className="check__container">
            <h1>Daily</h1>
            <h2>£ </h2>
            <h2>{props.data.miles} miles</h2>
          </div>
        </div>
        
        <div className="check__container">
          <h1>Fill Up Cost</h1>
          <h2>£ {fullTank}</h2>
        </div>       
      </div>
    </div>
  );
}

export default FullCheck;
  
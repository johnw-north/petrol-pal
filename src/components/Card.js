import React, { useRef, useState } from 'react';

import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

function Card(props) {
  
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const [distance, setDistance] = useState('0')

  const originRef = useRef()
  const destiantionRef = useRef()

  
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
  
  const [tripData, setTripData] = useState(
    {
      trips: 1,
      oneWay: true,
    }
    )
    
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setTripData(prevTripData => {
      return {
        ...prevTripData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  
  const cost = ((props.carData.price / 100) / (props.carData.mpg / 4.54609) * (distance * tripData.trips) * (tripData.oneWay ? 1 : 2)).toFixed(2)
  
  const miles = (distance * tripData.trips) * (tripData.oneWay ? 1 : 2)

  const fullMiles = (props.carData.mpg / 4.54609).toFixed(2) * props.carData.fuelCap
  
  const fullTank = ((props.carData.price / 100) * props.carData.fuelCap).toFixed(2)
  
  if (!isLoaded) {
    return (<h1>not working</h1>)
  }
    
  return (
    <div className="card"> 
      <div className="check__container">
        <h1>{props.title}</h1>
        <form className="form__full" >
          <div className="location">
            <Autocomplete>
              <div>
                <label htmlFor="from">From:</label>
                <input 
                type="text" 
                id="from" 
                name="from" 
                placeholder="Manchester"
                style={{width: "150px"}}
                ref={originRef}
                />
              </div>
            </Autocomplete>
            <Autocomplete>
              <div>
                <label htmlFor="to">To:</label>
                <input 
                type="text" 
                id="to" 
                name="to" 
                placeholder="London"
                style={{width: "150px"}}
                ref={destiantionRef}
                />
              </div>
            </Autocomplete>
          </div>
          <div className="trip__settings">
            <label htmlFor="nTrips">{props.titleTrips}</label>
            <input 
            type="number" 
            id="trips" 
            name="trips" 
            placeholder={props.exTrips}
            onChange={handleChange}
            style={{width: "50px"}}
            />  
            <label htmlFor="oneWay">One<br/>Way</label>            
            <input 
            type="checkbox" 
            id="oneWay" 
            name="oneWay"
            checked={tripData.oneWay} 
            onChange={handleChange}
            style={{width: "25px"}} 
            />
          </div>
        </form>          
        <div className="btns__set">
          <button onClick={calculateMiles} >SET</button>
          <button onClick={clearRoute} >CLEAR</button>
        </div>   
      </div>
      

      <div className="results">
        <div className="check__container">
          <h1>Travel Cost</h1>
          <h2>£ {cost}</h2>
          <h2>{miles} Miles</h2>
        </div>       
        <div className="check__container">
          <h1>Fill Up Cost</h1>
          <h2>£ {fullTank}</h2>
          <h2>{fullMiles} Miles</h2>
        </div>       
      </div>                  
    </div>
  );
}

export default Card;
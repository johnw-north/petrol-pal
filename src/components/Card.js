import React, { useRef, useState } from 'react';

import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

function Card(props) {
  
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const [distance, setDistance] = useState('0')
  const [edit, setEdit] = useState(true)

  const originRef = useRef()
  const destinationRef = useRef()

  async function calculateMiles() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: 1,
    })
    setDistance(parseFloat(results.routes[0].legs[0].distance.text))
  }

  function saveTrip() {
    if (originRef.current.value && destinationRef.current.value) {
      calculateMiles()
    }
    setEdit(false)
  }
  
  const mpl = props.carData.mpg / 4.54609
  const pence = props.carData.price / 100

  const miles = ((distance * props.cardData.trips) * (props.cardData.oneWay ? 1 : 2)).toFixed(2)
  const cost = ((pence / mpl) * (distance * props.cardData.trips) * (props.cardData.oneWay ? 1 : 2)).toFixed(2)

  
  if (!isLoaded) {
    return (<h1>not working</h1>)
  }
    
  return (
    <div className="card"> 
      <div className="card--bubble">
        {edit ?
        <div className="edit--box">
          <div className="container--input">
            <label htmlFor="type">Type:</label>
            <select 
              name="type"  
              id="type" 
              value={props.cardData.type} 
              onChange={(event) => props.handleChange(event, props.cardId)}
            >
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Shopping">Shopping</option>
              <option value="Holiday">Holiday</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="container--c">
            <Autocomplete>
              <div className="container--input">
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
              <div className="container--input">
                <label htmlFor="to">To:</label>
                <input
                type="text"
                id="to"
                name="to"
                placeholder="London"
                style={{width: "150px"}}
                ref={destinationRef}
                />
              </div>
            </Autocomplete>
          </div>
          <div className="container--trip">
            <div className="container--input">
              <label htmlFor="nTrips">Trips:</label>
              <input
              type="number"
              id="trips"
              name="trips"
              placeholder="1"
              value={props.cardData.trips}
              onChange={(event) => props.handleChange(event, props.cardId)}
              style={{width: "50px"}}
              />
            </div>
            <div className="container--check">
              <input
              type="checkbox"
              id="oneWay"
              name="oneWay"
              checked={props.cardData.oneWay}
              onChange={(event) => props.handleChange(event, props.cardId)}
              style={{width: "25px"}}
              />
              <label htmlFor="oneWay">One Way</label>
            </div>
          </div>
        </div>
        :
        <div className="result--box">
          <h1>{props.cardData.type}</h1>
          <div className="container--c">
            <h1>Travel Cost</h1>
            <h2>?? {isNaN(cost) ? "0.00" : cost}</h2>
            <h2>{miles} Miles</h2>
          </div>
        </div> 
        }
      </div>
      {edit ? 
      <div className="card--btns">
        <button className="btn--save" onClick={saveTrip} >Save</button>
        <button style={{backgroundColor: "#d9534f"}} className="btn--save" 
        onClick={(event) => props.deleteCard(event, props.cardId)} >Delete</button>
      </div>
      :
      <div className="card--btns">
        <button style={{backgroundColor: "#f0ad4e"}} className="btn--save" 
        onClick={() => setEdit(true)} >Edit</button>
      </div>
      }        
    </div>
  );
}

export default Card
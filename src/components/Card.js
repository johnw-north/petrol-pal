import React, { useRef, useState } from 'react';

import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

function Card(props) {
  
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (!isLoaded) {
    return (<h1>not working</h1>)
  }

  return (
    <div className="card"> 
      <div className="check__container">
        <h1>{props.title}</h1>
        <form className="form__full" >
          <Autocomplete>
            <div>
              <label htmlFor="from">From:</label>
              <input 
              type="text" 
              id="from" 
              name="from" 
              placeholder="Manchester"
              style={{width: "150px"}}
              // onChange={props.calcMiles}
              ref={props.originRef}
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
              // onChange={props.calcMiles}
              ref={props.destiantionRef}
              />
            </div>
          </Autocomplete>
          <label htmlFor="nTrips">{props.titleTrips}</label>
          <input 
          type="number" 
          id="trips" 
          name="trips" 
          placeholder={props.exTrips}
          onChange={props.handleChange}
          style={{width: "50px"}}
          />  
          <label htmlFor="oneWay">One<br/>Way</label>            
          <input 
          type="checkbox" 
          id="oneWay" 
          name="oneWay"
          checked={props.data.oneWay} 
          onChange={props.handleCheckbox}
          style={{width: "25px"}} 
          />
        </form>          
      </div>         
    </div>
  );
}

export default Card;
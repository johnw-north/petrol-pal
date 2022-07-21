// import React, { useState, useRef } from 'react';
import Card from "./Card";

function TravelInfo(props) {

  

  return (
    <div className="travel--info">        
      <div className="cards">
        <Card 
          title="Travel Information"
          titleTrips="Trips:" 
          exTrips="1"
          carData={props.carData}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
}
  
export default TravelInfo;   
  
  
// import React, { useState, useRef } from 'react';
import Card from "./Card";

function TravelInfo(props) {

  

  return (
    <div className="travel--info">        
      <Card 
        title="Travel"
        titleTrips="Trips:" 
        exTrips="1"
        carData={props.carData}
        handleChange={props.handleChange}
      />
    </div>
  );
}
  
export default TravelInfo;   
  
  
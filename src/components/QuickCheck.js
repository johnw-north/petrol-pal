// import React, { useState, useRef } from 'react';
import Card from "./Card";

function QuickCheck(props) {

  

  return (
    <div className="quick__check">        
      <div className="cards">
        <Card 
          title="Quick Check"
          titleTrips="Trips:" 
          exTrips="1"
          carData={props.carData}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
}
  
export default QuickCheck;   
  
  
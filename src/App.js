import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendDown, faArrowTrendUp, faPlus } from '@fortawesome/free-solid-svg-icons'

import AutoInfo from "./components/AutoInfo";
import ManualInfo from './components/ManualInfo';
import FuelInfo from './components/FuelInfo';
import Card from "./components/Card";

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

  const small = {mpg: 55, fuelCap: 35}
  const medium = {mpg: 53, fuelCap: 44}
  const large = {mpg: 40, fuelCap: 60}
  const van = {mpg: 43, fuelCap: 90}


  function handleChange(event) {
    const {name, value, type, checked, id} = event.target
    setCarData(prevCarData => {
      if (id === "small") {
        return {...prevCarData, ...small}
      } else if (id === "medium") {
          return {...prevCarData, ...medium}
      } else if (id === "large") {
          return {...prevCarData, ...large} 
      } else if (id === "van") {
          return {...prevCarData, ...van} 
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

  const priceLast = 140
  
  const fullTank = ((carData.price / 100) * carData.fuelCap).toFixed(2)
  const fullMiles = ((carData.mpg / 4.54609).toFixed(2) * carData.fuelCap).toFixed(0)
  const lastYear = ((priceLast / 100) * carData.fuelCap).toFixed(2)
  const diff = (((((priceLast / 100) * carData.fuelCap) - ((carData.price / 100) * carData.fuelCap)) / ((priceLast / 100) * carData.fuelCap)) * 100).toFixed(0)

  const [cards, setCards] = useState(() => [
    {id: nanoid(), trips: 1, oneWay: true, type: "Work"}
  ])

  const cardElements = cards.map(card => (
    <Card 
      key={card.id}
      cardId={card.id}
      carData={carData} 
      handleChange={handleCardChange}
      deleteCard={deleteCard} 
      cardData={card}
    />
  ))

  
  // function handleCardChange(event) {
  //   const {name, value, type, checked} = event.target
  //   setCards(prevTripData => {
  //     return {
  //       ...prevTripData,
  //       [name]: type === "checkbox" ? checked : value
  //     }
  //   })
  // }
  
  function handleCardChange(event, cardId) {
    const {name, value, type, checked} = event.target
    setCards(prevCards => prevCards.map(card => {
      return card.id === cardId 
      ? 
        {
        ...card,
        [name]: type === "checkbox" ? checked : value
        }
      : card     
    }))
  }

  function newCard() {
    setCards(prevCards => [
      ...prevCards,
      {id: nanoid(), trips: 1, oneWay: true, type: "Work"} 
    ])
  }

  function deleteCard(event, cardId) {
    setCards(prevCards => prevCards.filter(card => card.id !== cardId))
  }

  return (
    <div className="App">
      <header>
        <div className="header--title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <div className="bubble">
          <FuelInfo carData={carData} handleChange={handleChange} />
          {toggle ? 
          <ManualInfo handleToggle={handleToggle} carData={carData} handleChange={handleChange} /> 
          :
          <AutoInfo handleToggle={handleToggle} carData={carData} handleChange={handleChange} />
          }
        </div>

        <div className="bubble">
          <div className="container--c">
            <h1>Full Tank</h1>
            <h2>?? {fullTank}</h2>
            <h2>{fullMiles} Miles</h2>
          </div>
          <div className="container--c">
            <FontAwesomeIcon 
              icon={diff > 0 ? faArrowTrendUp : faArrowTrendDown} 
              style={diff > 0 ? {color: "green", fontSize: "1.5rem"} : {color: "red", fontSize: "1.5rem"}}
            />
            <h3 
              style={diff > 0 ? {color: "green"} : {color: "red"}}>{isNaN(diff) ? 0 : diff}%
            </h3>
          </div>
          <div className="container--c">
            <h1>Last Year</h1>
            <h2>?? {lastYear}</h2>
            <h2>??1.40 Per Litre</h2>
          </div>
        </div>

        <div className="cards">
          {cardElements}
        </div>

        <div className="container" >
          <button 
            onClick={newCard}
            style={{backgroundColor: "#5cb85c", width: "90px"}}
          >
            <FontAwesomeIcon 
              icon={faPlus} 
              style={{fontSize: "2rem"}}
            />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;

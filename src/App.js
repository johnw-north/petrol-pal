import React, { useState } from 'react';
import CarInfo from "./components/CarInfo";
import QuickCheck from "./components/QuickCheck"
import FullCheck from "./components/FullCheck"

function App() {

  const [formData, setFormData] = useState(
    {
      fuelType: "petrol",
      carSize: "custom",
      mpg: 0,
      fuelCap: 0,
      price: 0,
    }
    )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const [toggle, setToggle] = useState(false)



  return (
    <div className="App">
      <header>
        <div className="header__title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <CarInfo handleChange={handleChange} />
        <div className="checks__btns">
          <button className="btn__quick" onClick={() => setToggle(false)}>Quick Check</button>
          <button className="btn__full" onClick={() => setToggle(true)}>Full Check</button>
        </div>
        {!toggle && <QuickCheck total={formData.mpg} />}
        {toggle && <FullCheck total={formData.mpg} />}
      </main>
    </div>
  );
}

export default App;

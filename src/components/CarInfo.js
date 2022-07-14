

function CarInfo(props) {

  return (
    <div className="car">
      <div className="container">
        <div className="car__size">
          <h1>Car Size</h1>
          <div className="size__btns">
            <button>small</button>
            <button>medium</button>
            <button>large</button>
          </div>
        </div>

        <div className="car__manual">
          <h1>Manual Input</h1>
          <div className="manual__input">
            <label htmlFor="mpg">MPG:</label>
            <input 
              type="number"
              id="mpg" 
              name="mpg" 
              placeholder="36 mpg" 
              onChange={props.handleChange}
            />
            <label htmlFor="fuelCap">Fuel tank<br/>capacity:</label>
            <input 
              type="number" 
              name="fuelCap"
              id="fuelCap" 
              placeholder="50 L" 
              onChange={props.handleChange} 
            />
            <button>Don't know?</button>
          </div>
        </div>
      </div>

      <div className="fuel">
        <div className="container">
          <div className="fuel__type">
            <h1>Fuel Type</h1>
            <div className="type__btns">
              <button>Petrol</button>
              <button>Diesel</button>
            </div>
          </div>

          <div className="fuel__price">
            <h1>Fuel Price</h1>
            <div className="price__input">
              <label htmlFor="price">Pence<br/>Per Litre:</label>
              <input 
                type="number" 
                name="price"
                id="price" 
                placeholder="190" 
                onChange={props.handleChange} 
              />
            </div>
          </div>        
        </div>       
      </div>
    </div>
  );
}

export default CarInfo;

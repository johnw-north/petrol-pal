

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
            <h2>MPG:</h2>
            <input 
              type="number" 
              name="mpg" 
              placeholder="35mpg" 
              onChange={props.handleChange}
            />
            <h2>Fuel capacity:</h2>
            <input 
              type="number" 
              name="fuelCap" 
              placeholder="50 L" 
              onChange={props.handleChange} 
            />
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
              <h2>Pence per litre:</h2>
              <input 
                type="number" 
                name="price" 
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

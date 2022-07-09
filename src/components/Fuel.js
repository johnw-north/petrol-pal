

function Fuel() {
    return (
      <div className="fuel">
       
        <div className="fuel__type">
          <h1 className="type__title">Fuel Type?</h1>
          <div className="type__btns">
            <button>Petrol</button>
            <button>Diesel</button>
          </div>
        </div>

        <div className="fuel__price">
          <h1 className="price__title">Current fuel price?</h1>
          <div className="price__input">
            <h2>Pence per litre:</h2>
            <input type="number" placeholder="190"/>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Fuel;
  
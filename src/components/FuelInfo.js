

function FuelInfo(props) {

  return (
    <div className="car">  
      <div className="fuel--info">
        <h1>Fuel Price</h1>
        <div className="price--input">
          <label htmlFor="price">Pence<br/>Per Litre:</label>
          <input 
            type="number" 
            name="price"
            id="price" 
            placeholder="190" 
            value={props.carData.price  || ""}
            onChange={props.handleChange} 
          />
        </div>
      </div>        
    </div>
  );
}

export default FuelInfo;

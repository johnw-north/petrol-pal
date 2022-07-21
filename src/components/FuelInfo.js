

function FuelInfo(props) {

  return (
    <div className="container--c">  
      <h1>Fuel Price</h1>
      <div className="container--input">
        <label htmlFor="price">Pence Per Litre:</label>
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
  );
}

export default FuelInfo;

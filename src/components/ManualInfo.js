

function ManualInfo(props) {

  return (
    <div className="car">
      <h1>Manual Input</h1>
      <div className="manual--info">
        <div className="manual--input">
          <label htmlFor="mpg">MPG:</label>
          <input 
            type="number"
            id="mpg" 
            name="mpg" 
            placeholder="36 mpg" 
            value={props.carData.mpg || ""}
            onChange={props.handleChange}
          />
          <label htmlFor="fuelCap">Fuel tank<br/>capacity:</label>
          <input 
            type="number" 
            name="fuelCap"
            id="fuelCap" 
            placeholder="50 L" 
            value={props.carData.fuelCap || ""}
            onChange={props.handleChange} 
          />
        </div>
        <button onClick={props.handleToggle} >Don't know?</button>  
      </div>
    </div>
  );
}

export default ManualInfo;

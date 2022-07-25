

function ManualInfo(props) {

  return (
    <div className="container--c">
      <h1>Manual Input</h1>
      <div className="container--input">
        <label htmlFor="mpg">MPG:</label>
        <input 
          style={{width: "100px"}}
          type="number"
          id="mpg" 
          name="mpg" 
          placeholder="36 mpg" 
          value={props.carData.mpg || ""}
          onChange={props.handleChange}
        />
      </div>
      <div className="container--input">
        <label htmlFor="fuelCap">Fuel Capacity:</label>
        <input 
          style={{width: "100px"}}
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
  );
}

export default ManualInfo;

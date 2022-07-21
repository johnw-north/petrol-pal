

function AutoInfo(props) {

  return (
    <div className="auto--info">      
      <h1>Car Size</h1>
      <form className="size--btns">
        <input 
          type="radio" 
          id="small" 
          name="size" 
          value="small"
          checked={props.carData.size === "small"}
          onChange={props.handleChange} 
        />
        <label htmlFor="small">small</label>
        <input 
          type="radio" 
          id="medium" 
          name="size" 
          value="medium"
          checked={props.carData.size === "medium"}
          onChange={props.handleChange} 
        />
        <label htmlFor="medium">medium</label>
        <input 
          type="radio" 
          id="large" 
          name="size" 
          value="large"
          checked={props.carData.size === "large"}
          onChange={props.handleChange} 
        />
        <label htmlFor="large">large</label>
      </form>
      <button onClick={props.handleToggle} >Back</button>
    </div>
  );
}

export default AutoInfo;

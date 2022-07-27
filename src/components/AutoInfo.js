

function AutoInfo(props) {

  return (
    <div className="container--c">      
      <h1>Car Size</h1>
      <form>
        <div className="container">
          <div className="container--radio">
            <input
              type="radio"
              id="small"
              name="size"
              value="small"
              checked={props.carData.size === "small"}
              onChange={props.handleChange}
            />
            <label htmlFor="small">small</label>
          </div>
          <div className="container--radio">
            <input
              type="radio"
              id="medium"
              name="size"
              value="medium"
              checked={props.carData.size === "medium"}
              onChange={props.handleChange}
              />
            <label htmlFor="medium">medium</label>
          </div>
          <div className="container--radio">
            <input
              type="radio"
              id="large"
              name="size"
              value="large"
              checked={props.carData.size === "large"}
              onChange={props.handleChange}
              />
            <label htmlFor="large">large</label>
          </div>
          <div className="container--radio">
            <input
              type="radio"
              id="van"
              name="size"
              value="van"
              checked={props.carData.size === "van"}
              onChange={props.handleChange}
              />
            <label htmlFor="van">van</label>
          </div>
        </div>
      </form>
      <button onClick={props.handleToggle} >Back</button>
    </div>
  );
}

export default AutoInfo;

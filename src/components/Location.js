

function Location() {
    return (
      <div className="location">
  
        <div className="car__manual">
          <h1 className="manual__title">Where?</h1>
          <div className="manual__input">
            <h2>From:</h2>
            <input type="number" placeholder="Manchester"/>
            <h2>To:</h2>
            <input type="number" placeholder="London" />
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Location;
  
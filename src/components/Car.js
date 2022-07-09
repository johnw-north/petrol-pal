

function Car() {
  return (
    <div className="car">

      <div className="car__size">
        <h1 className="size__title">Your car size?</h1>
        <div className="size__btns">
          <button>small</button>
          <button>medium</button>
          <button>large</button>
        </div>
      </div>

      <div className="car__manual">
        <h1 className="manual__title">Manual input.</h1>
        <div className="manual__input">
          <h2>MPG:</h2>
          <input type="number" placeholder="35mpg"/>
          <h2>Fuel capacity:</h2>
          <input type="number" placeholder="50 L" />
        </div>
      </div>

    </div>
  );
}

export default Car;

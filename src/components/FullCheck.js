import Card from "./Card";

function FullCheck(props) {
    
  const total = ((props.data.price / 100) / (props.data.mpg / 4.54609) * props.data.miles)

  const fullTank = (props.data.price / 100) * props.data.fuelCap

  return (
    <div className="full__check">
      <div className="cards">
        <Card title="Work" exTrips="20" titleTrips="Trips<br>a month:" />
        <Card title="Shopping" exTrips="3" titleTrips="Trips:" />
        <Card title="School" exTrips="10" titleTrips="Trips:" />
        <Card title="Other" exTrips="1" titleTrips="Trips:" />
      </div>
      
      <div className="results">
        <h1 className="results__title">Results</h1>
        <div className="period">
          <div className="check__container">
            <h1>Yearly</h1>
            <h2>£ {(total * 12).toFixed(2)}</h2>
            <h2>{props.data.miles} miles</h2>
          </div>
          <div className="check__container">
            <h1>Monthly</h1>
            <h2>£ {total.toFixed(2)}</h2>
            <h2>{props.data.miles} miles</h2>
          </div>
          <div className="check__container">
            <h1>Weekly</h1>
            <h2>£ {(total / 4).toFixed(2)}</h2>
            <h2>{props.data.miles} miles</h2>
          </div>
          <div className="check__container">
            <h1>Daily</h1>
            <h2>£ {(total / 30).toFixed(2)}</h2>
            <h2>{props.data.miles} miles</h2>
          </div>
        </div>
        
        <div className="check__container">
          <h1>Fill Up Cost</h1>
          <h2>£ {fullTank}</h2>
        </div>       
      </div>
    </div>
  );
}

export default FullCheck;
  
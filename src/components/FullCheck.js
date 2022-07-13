import Card from "./Card";

function FullCheck() {
    return (
      <div className="full__check">
        <div className="cards">
          <Card title="Work" exTrips="20"/>
          <Card title="Shopping" exTrips="3"/>
          <Card title="School" exTrips="10"/>
          <Card title="Other" exTrips="1"/>
        </div>
        
        <div className="results">
          <h1 className="results__title">Results</h1>
          <div className="period">
            <div className="check__container">
              <h1>Monthly</h1>
            </div>
            <div className="check__container">
              <h1>Weekly</h1>
            </div>
            <div className="check__container">
              <h1>Daily</h1>
            </div>
          </div>       
        </div>
      </div>
    );
  }
  
  export default FullCheck;
  
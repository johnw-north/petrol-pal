import Card from "./Card";


function QuickCheck(props) {
    return (
      <div className="quick__check">
        
        <div className="cards">
          <Card title="Quick Check" exTrips="1"/>
        </div>
        
        <div className="results">
          <h1 className="results__title">Results</h1>
          <div className="check__container">
            <h1>Cost</h1>
            <h2>£ {props.total}</h2>
          </div>       
        </div>         
      </div>
    );
  }
  
  export default QuickCheck;   
  
  
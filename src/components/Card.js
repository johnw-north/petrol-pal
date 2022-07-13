

function Card(props) {
    return (
      <div className="card"> 
        <div className="check__container">
          <h1>{props.title}</h1>
          <form className="form__full" >
            <label htmlFor="from">From:</label>
            <input 
            type="text" 
            id="from" 
            name="from" 
            placeholder="Manchester"
            style={{width: "150px"}}
            />
            <label htmlFor="to">To:</label>
            <input 
            type="text" 
            id="to" 
            name="to" 
            placeholder="London"
            style={{width: "150px"}}
            />
            <label htmlFor="nTrips">Trips a<br/>month:</label>
            <input 
            type="number" 
            id="nTrips" 
            name="nTrips" 
            placeholder={props.exTrips}
            style={{width: "50px"}}
            />  
            <label htmlFor="oneWay">One<br/>Way</label>            
            <input 
            type="checkbox" 
            id="oneWay" 
            name="oneWay" 
            value="true"
            style={{width: "25px"}} 
            />
          </form>          
        </div>         
      </div>
    );
  }
  
  export default Card;


function Card(props) {
    return (
      <div className="card">
            <h1 className="check__title">{props.title}</h1>
            <form className="form__full" >
                <label for="from">From:</label>
                <input type="text" id="from" name="from" placeholder="Manchester"/>
                <label for="to">To:</label>
                <input type="text" id="to" name="to" placeholder="London"/>
                <input type="checkbox" id="oneWay" name="oneWay" value="true" />
                <label for="oneWay">One Way</label>            
                <label for="nTrips">Trips in Month:</label>
                <input type="number" id="nTrips" name="nTrips" placeholder="20"/>  
            </form>
      </div>
    );
  }
  
  export default Card;
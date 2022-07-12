

function QuickCheck() {
    return (
      <div className="quick__check">
        <div className="container">
          <h1>Quick Check</h1>
          <form className="form__quick">
            <label for="from">From:</label>
            <input type="text" id="from" name="from" placeholder="Manchester"/>
            <label for="to">To:</label>
            <input type="text" id="to" name="to" placeholder="London"/>
            <label for="oneWay">One<br/>Way</label>            
            <input type="checkbox" id="oneWay" name="oneWay" value="true" />
          </form>  
        </div>
        <div className="container">
          <h1>Results</h1>
        </div>          
      </div>
    );
  }
  
  export default QuickCheck;
        
  
  
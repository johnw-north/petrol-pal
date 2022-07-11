

function QuickCheck() {
    return (
      <div className="quick__check">
        <h1 className="check__title">Quick Check</h1>
        <form className="form__quick" >
          <label for="from">From:</label>
          <input type="text" id="from" name="from" placeholder="Manchester"/>
          <label for="to">To:</label>
          <input type="text" id="to" name="to" placeholder="London"/>
          <input type="checkbox" id="oneWay" name="oneWay" value="true" />
          <label for="oneWay">One Way</label>            
        </form>  
      </div>
    );
  }
  
  export default QuickCheck;
        
  
  
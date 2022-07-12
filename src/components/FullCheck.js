import Card from "./Card";

function FullCheck() {
    return (
      <div className="full__check">
        <Card title="Work" exTrips="20"/>
        <Card title="Shopping" exTrips="3"/>
        <Card title="School" exTrips="10"/>
        <Card title="Other" exTrips="1"/>
      </div>
    );
  }
  
  export default FullCheck;
  
import Car from "./components/Car";
import Fuel from "./components/Fuel";
import Location from "./components/Location";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__title">
          <h1>Petrol pal</h1>
        </div>
      </header>
      <main>
        <Car />
        <Fuel />
        <Switch />
        <Location />
      </main>
    </div>
  );
}

export default App;

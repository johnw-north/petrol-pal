import Car from "./components/Car";
import Fuel from "./components/Fuel";
import Checks from "./components/Checks";

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
        <Checks />
      </main>
    </div>
  );
}

export default App;

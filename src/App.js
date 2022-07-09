import Car from "./components/Car";
import Fuel from "./components/Fuel";

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
      </main>
    </div>
  );
}

export default App;

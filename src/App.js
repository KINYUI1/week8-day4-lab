import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ships, setShips] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://swapi.dev/api/starships/");
        const data = await res.json();
        setShips(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(ships);
  const shipsElements = ships ? (
    ships.map((ship) => (
      <h3 key={ship.name} className="ship">
        {ship.name}
      </h3>
    ))
  ) : (
    <h3>Loading...</h3>
  );
  return (
    <div>
      <h1 className="header">STAR WARS STARSHIPS</h1>
      <div className="App">{shipsElements}</div>
    </div>
  );
}

export default App;

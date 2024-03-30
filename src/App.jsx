import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import pokemonList from "./data/data";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <h1>PokeFinder</h1>
      <h2>Your Gen 1 Pokemon reference</h2>
      <NavBar
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
      />
      <PokemonCard
        pokemon={pokemonList[pokemonIndex]}
        setPokemonIndex={setPokemonIndex}
      />
    </div>
  );
}

export default App;

import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
  ];
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleClickPrevious}>Précédent</button>{" "}
      <button onClick={handleClickNext}>Suivant</button>
    </div>
  );
}

export default App;

import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const PokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
    },
  ];
  return (
    <div>
      <PokemonCard pokemon={PokemonList[0]} />
    </div>
  );
}

export default App;

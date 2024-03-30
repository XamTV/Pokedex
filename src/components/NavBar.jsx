import { PropTypes } from "prop-types";
import { useState } from "react";

function NavBar({ pokemonList, setPokemonIndex }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setInputValue(inputValue);
      pokemonList.map((pokemon, index) => {
        if (pokemon.name === inputValue) {
          alert(`${pokemon.name} GOOO !`);
          setPokemonIndex(index);
        }
      });
    }
  };

  return (
    <>
      <p>Enter a Pokemon name </p>
      <input
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ex : Pikachu"
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={() => {
          setInputValue(inputValue);
          pokemonList.map((pokemon, index) => {
            if (pokemon.name === inputValue) {
              alert(`${pokemon.name} GOOO !`);
              setPokemonIndex(index);
            }
          });
        }}
      >
        Search
      </button>
    </>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  setPokemonIndex: PropTypes.number.isRequiered,
};

export default NavBar;

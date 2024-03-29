import { PropTypes } from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name === "Pikachu") {
              alert("PIIII KAAAAAA CHUUUUUUUUUUU");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequiered,
  pokemonList: PropTypes.array.isRequired,
  setPokemonIndex: PropTypes.number.isRequiered,
};

export default NavBar;

/* {pokemonIndex > 0 ? (
  <button onClick={handleClickPrevious}>Précédent</button>
) : undefined}
{pokemonIndex < pokemonList.length - 1 ? (
  <button onClick={handleClickNext}>Suivant</button>
) : undefined} */

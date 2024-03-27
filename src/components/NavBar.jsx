import { PropTypes } from "prop-types";

function NavBar({
  pokemonIndex,
  pokemonList,
  handleClickNext,
  handleClickPrevious,
}) {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrevious}>Précédent</button>
      ) : undefined}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : undefined}
    </>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequiered,
  pokemonList: PropTypes.array.isRequired,
  handleClickPrevious: PropTypes.func.isRequired,
  handleClickNext: PropTypes.func.isRequired,
};
export default NavBar;

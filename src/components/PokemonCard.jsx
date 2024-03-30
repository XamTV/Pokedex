import "../PokemonCard.css";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <>
      {pokemon.img !== undefined ? (
        <figure className="container">
          <h1>
            #{pokemon.num} : {pokemon.name}
          </h1>
          <img src={pokemon.img} alt={pokemon.name} />
          <figcaption className="details">
            <p>Type: {pokemon.type + ""}</p>
            <p>Height: {pokemon.height}</p>
            Weight : {pokemon.weight}
            <p> Weaknesses : {pokemon.weaknesses + ""} </p>
          </figcaption>
        </figure>
      ) : (
        <figure>
          <p>???</p>
          <figcaption>{pokemon.name} </figcaption>
        </figure>
      )}
    </>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    num: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    weaknesses: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;

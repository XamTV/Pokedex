function PokemonCard({ pokemon }) {
  // Replace 0 BY 1 To get Mew Instead
  return (
    <>
      {pokemon.imgSrc !== undefined ? (
        <figure>
          <img src={pokemon.imgSrc} alt={pokemon.name} />
          <figcaption>{pokemon.name} </figcaption>
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

export default PokemonCard;

const PokemonList = [
  {
    pokemonName: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    pokemonName: "Mew",
  },
];

function PokemonCard() {
  const pokemon = PokemonList[0]; // Replace 0 BY 1 To get Mew Instead

  if (pokemon.pokemonName === "Bulbizarre") {
    return (
      <figure>
        <img src={pokemon.imgSrc} alt={pokemon.pokemonName} />
        <figcaption>{pokemon.pokemonName} </figcaption>
      </figure>
    );
  }
  return (
    <figure>
      <p>???</p>
      <figcaption>{pokemon.pokemonName} </figcaption>
    </figure>
  );
}

export default PokemonCard;

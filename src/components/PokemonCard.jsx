const PokemonCard=()=>{
    // return <figure    className="card">
    
    //   <img
    //  className="card_img"
    //      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    //      alt="Bulbasaur" />
    //  <figcaption className="cardText">BULBASAUR</figcaption>
    //  </figure> 

    const pokemon = pokemonList[0] 
    return (
    <figure className="card_img"> {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}
    <figcaption>{pokemon.name}</figcaption>
    </figure>)
    }

const pokemonList = [
    {
      name: "BULBASAUR",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "MEW",
    },
  ];

export default PokemonCard
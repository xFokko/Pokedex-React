const PokemonCard=({ pokemon })=>{
 
 
    return (
    <figure className="card"> {pokemon.imgSrc ? <img className="card_img" src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}
    <figcaption className="cardText">{pokemon.name}</figcaption>
    </figure>)
    }


export default PokemonCard
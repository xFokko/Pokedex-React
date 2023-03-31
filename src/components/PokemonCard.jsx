import PropTypes from "prop-types";
const PokemonCard=({ pokemon })=>{

    PokemonCard.PropTypes={
        pokemon: PropTypes.shape({
            name: PropTypes.string.isequired,
            imgSrc: PropTypes.string.isRequired
          }),
    }
 
 
    return (
    <figure className="card"> {pokemon.imgSrc ? <img className="card_img" src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}
    <figcaption className="cardText">{pokemon.name}</figcaption>
    </figure>)
    }




export default PokemonCard
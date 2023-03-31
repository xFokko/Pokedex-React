import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'


const App = () => {

  // /--------------------------------data section

  const pokemonList = [
    {
        name: "-bulbasaur-",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "-charmander-",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "-squirtle-",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "-pikachu-",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "-mew-",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleAdd = () => {
    setPokemonIndex(pokemonIndex+ 1)
  };

  const handleLess = () => {
    setPokemonIndex(pokemonIndex -1);
  };

  const pokemon = pokemonList[pokemonIndex];




// /-----------------------------render 
return (
  <div>
    <PokemonCard pokemon={pokemon} />
    {pokemonIndex > 0 &&<button onClick={handleLess}>Previous</button>}
    {pokemonIndex < pokemonList.length - 1 &&<button onClick={handleAdd}>Next</button>}
  </div>
);
};




export default App

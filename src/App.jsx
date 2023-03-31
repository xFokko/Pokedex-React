import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'


const App = () => {
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

  const pokemon = pokemonList[0];

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};




export default App

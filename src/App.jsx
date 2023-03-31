import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Nav from "./components/Nav.jsx"


const App = () => {

  // /--------------------------------data section

  const pokemonList = [
    {
        name: "- bulbasaur -",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "- charmander -",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "- squirtle -",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "- pikachu -",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "- mew -",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);


  
    const pokemon = pokemonList[pokemonIndex];
  
  


// /-----------------------------render 
return (
  <div>
    <PokemonCard pokemon={pokemon} />
    <Nav
    list={pokemonList}
    setter= {setPokemonIndex} 
    getter={pokemonIndex}/>
  </div>
);
};




export default App

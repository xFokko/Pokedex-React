import { useEffect } from "react";
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


    useEffect(
      () => {
       alert("hello pokemon trainer ヾ(＠⌒ー⌒＠)ノ");
      },
      []
    );
  
  


// /-----------------------------render 
return (
  <div className="CardButtonContainer">
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    <div className="buttonContainer">
      
    {pokemonList.map((pokemon,index)=>(
    <Nav
    key={pokemon.name}
    list={pokemonList[index].name}
    pokemonIndex={index}
    setpokemonIndex={setPokemonIndex}
    />))}

    </div>
  </div>
);
};




export default App

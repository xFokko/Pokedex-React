

const Nav=({setpokemonIndex, pokemonIndex,list})=>{

// data------------------------------/




// changement state / fonction -------/


const handleClick = () => {
    setpokemonIndex(pokemonIndex)
    list === "- pikachu -" ? alert('pika pika nigga !'):"";

  };


// render ------------------------------/

return(

    <div>
<button onClick={handleClick}>{list}</button>
   </div>)};


export default Nav
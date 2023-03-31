import React from "react";

const Nav=({setter, getter,list })=>{

// data------------------------------/




// changement state / fonction -------/


const handleAdd = () => {
    setter(getter + 1)
  };

  const handleLess = () => {
    setter(getter -1);
  };


// render ------------------------------/
return(

    <div>
{getter > 0 && <button onClick={handleLess}>Previous</button>}
{getter < list.length - 1 && <button onClick={handleAdd}>Next</button>}
   </div>)}
;

export default Nav
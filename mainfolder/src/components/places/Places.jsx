import { useState } from 'react';
import slided from "../../assets/popular.png"

function Second() {


  return (
    <div className="max-w-full overflow-hidden relative flex justify-center items-center">
      <div className="w-full overflow-hidden flex">
        <img
          className="transition-transform duration-300 ease-in-out block w-90 h-auto"
          src={slided}
          
          alt="Slider"
        />
        <img
          className="transition-transform duration-300 ease-in-out block w-90 h-auto"
          src={slided}
          
          alt="Slider"
        />
      </div>
     
    </div>
  );
}

export default Second;

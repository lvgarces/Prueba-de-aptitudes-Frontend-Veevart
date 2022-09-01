import React from "react";
import pikachu from "./pikachu.gif"
import './Spinner.css'

const Spinner = () => {
    
  

    return(
      <div className="spinner">
        <img src={pikachu} alt="" />
        <img src={pikachu} alt="" />
        <img src={pikachu} alt="" />
      </div>
      
      );
  };

  export default Spinner;
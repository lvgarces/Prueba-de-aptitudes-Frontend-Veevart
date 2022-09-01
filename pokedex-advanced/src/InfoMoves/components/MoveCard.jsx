import React from "react";
import './MoveCard.css'
import ImgType from "../typeImages.json"

const MoveCard = ({ name, accuracy, power, pp, type, effect_entries }) => {
  return (
    <div className="o-card-move">
      <div className="o-name-move">
      <h2>{name}</h2>
      <img src={ImgType[type]} alt={type} />
      </div>
      <p>Accuracy: {accuracy}</p>
      <p>Power: {power}</p>
      <p>PP: {pp}</p>
      {effect_entries.map((effect_entries) => (
        <p>{effect_entries.short_effect}</p>
      ))}
    </div>
  );
};

export default MoveCard;

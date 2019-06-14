import React from "react";
import "./pokeCard.css";
import { addZero } from "./pokeArray";

const PokeCard = ({ id, name, type, base_experience,card }) => {
  return (
 
      <div className={card} >
        <p className="Name">{name}</p>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZero(
            id
          )}.png`}
          className="img"
          alt={name}
        />
        <p className="info">
          Type:{type} <br />
          EXP:{base_experience}
        </p>
      </div>

  );
};


export default PokeCard

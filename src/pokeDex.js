import React from "react";
import "./pokeCard.css";
import PokeCard from "./pokeCard"


const PokeDex = ({ PokeArray }) => {
    return (
      <div className="cards">
        {PokeArray.map(({ id, name, type, base_experience }) => (
          <PokeCard
            key={id}
            id={id}
            name={name}
            type={type}
            base_experience={base_experience}
            card="card"
          />
        ))}
      </div>
    );
  };

  export default PokeDex
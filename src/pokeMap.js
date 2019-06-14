import React from "react";
import PokeCard from "./pokeCard";
import "./Pokemap.css";

const PokeMap = ({ Pokemon, exp, isWinner }) => {
  return (
    <div className="Poke-mon">
      <p className={isWinner ? "result-winner" : "result-Loser"}>
        EXP:{exp} <br /> {isWinner ? "Winner" : "Loser"}
      </p>
      <div className="cards">
        {Pokemon.map(({ id, name, type, base_experience }) => (
          <PokeCard
          key={id}
            id={id}
            name={name}
            type={type}
            base_experience={base_experience}
            card={isWinner ? "cardWinner" : "cardLoser"}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeMap;

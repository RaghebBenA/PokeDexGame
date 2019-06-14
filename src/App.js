import React, { Component } from "react";
import { pokeArray, randomSpliting } from "./pokeArray";
import { ReactComponent as Logo } from "./Asset/pokedexLogo.svg";
import "./App.css";
import PokeMap from "./pokeMap";
import PokeDex from "./pokeDex";

class App extends Component {
  state = {
    startGame: false,
  };
  render() {
    let hand1 = [];
    let hand2 = [...pokeArray];
    randomSpliting(hand1, hand2);
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div className="App">
        <Logo height="200px" width="250px" className="logo" />

        {!this.state.startGame ? (
          <PokeDex PokeArray={pokeArray} />
        ) : (
          <div className="PokeGame">
            <PokeMap Pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            <PokeMap Pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
          </div>
        )}
        {!this.state.startGame ? (
          <span
            className="button"
            onClick={() => {
              this.setState((PrevState) => ({
                startGame: !PrevState.startGame
              }));
            }}
          >
            Play PokeDex Game !
          </span>
        ) : (
          <span
            className="button"
            onClick={() => {
              this.setState((PrevState) => ({
                startGame: !PrevState.startGame
              }));
            }}
          >
            Back Home
          </span>
        )}
      </div>
    );
  }
}

export default App;

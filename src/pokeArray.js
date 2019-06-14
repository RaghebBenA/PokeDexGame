export const pokeArray = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
];

export const addZero = (n) => {
  if (n < 10) {
    return ("00" + n).slice(-4);
  } else if (n >= 10 && n < 100) {
    return ("0" + n).slice(-4);
  } else {
    return n;
  }
};

export const randomSpliting = (hand1,hand2) =>{
  while(hand1.length < hand2.length){
    let randIdx = Math.floor(Math.random() * hand2.length)
    let randPokemon = hand2.splice(randIdx,1)[0]
    hand1.push(randPokemon)
  }
}

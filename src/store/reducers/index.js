import { combineReducers } from "redux";
import pokemon from './postPokemon'
import details from './postDetails'
import myPokemon from "./postMyPokemon";
import types from "./postTypes";
import moves from "./postMoves";
import abilities from "./postAbilities";
import stats from "./postStats";
import sprites from "./postSprites";

const rootReducer = combineReducers ({
    pokemon,
    details,
    myPokemon,
    types,
    moves,
    abilities,
    stats,
    sprites
})

export default rootReducer
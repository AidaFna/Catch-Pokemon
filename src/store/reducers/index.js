import { combineReducers } from "redux";
import pokemon from './postPokemon'
import details from './postDetails'

const rootReducer = combineReducers ({
    pokemon,
    details,
})

export default rootReducer
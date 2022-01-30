import { getPokemon, setPokemon } from './getPokemon'
import { getDetails, setDetails } from './getDetails'
import { addPokemon, deletePokemon } from './fetchMyPokemon'
import { getTypes, setTypes } from './getTypes'
import { getMoves, setMoves } from './getMoves'
import { getAbilities, setAbilities } from './getAbilities'
import { getStats, setStats } from './getStats'
import { getSprites, setSprites } from './getSprites'

const allStore = {
    //all pokemon
    getPokemon,
    setPokemon,
    // details pokemon
    getDetails,
    setDetails,
    // my pokemon
    addPokemon,
    deletePokemon,
    // Types
    getTypes,
    setTypes,
    //  Moves
    getMoves,
    setMoves,
    //  Abilities
    getAbilities,
    setAbilities,
    // Stats
    getStats,
    setStats,
    //  Sprites
    getSprites,
    setSprites
}

export default allStore
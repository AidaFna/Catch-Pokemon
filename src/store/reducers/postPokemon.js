const initialState = []

const postPokemon = (state = initialState, action) => {
    if(action.type === 'SET_POKEMON'){
        return action.payload 
    }

    return state
}

export default postPokemon;
const initialState = []

const postAbilities = (state = initialState, action) => {
    if(action.type === 'SET_ABILITIES'){
        return action.payload 
    }

    return state
}

export default postAbilities;
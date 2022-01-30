const initialState = []

const postMoves = (state = initialState, action) => {
    if(action.type === 'SET_MOVES'){
        return action.payload 
    }

    return state
}

export default postMoves;
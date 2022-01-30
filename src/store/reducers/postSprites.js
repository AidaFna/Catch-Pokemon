const initialState = []

const postSprites = (state = initialState, action) => {
    if(action.type === 'SET_SPRITES'){
        return action.payload 
    }

    return state
}

export default postSprites;
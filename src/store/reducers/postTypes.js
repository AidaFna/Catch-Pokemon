const initialState = []

const postTypes = (state = initialState, action) => {
    if(action.type === 'SET_TYPES'){
        return action.payload 
    }

    return state
}

export default postTypes;
const initialState = []

const postStats = (state = initialState, action) => {
    if(action.type === 'SET_STATS'){
        return action.payload 
    }

    return state
}

export default postStats;
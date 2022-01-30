const initialState = []

const postDetails = (state = initialState, action) => {
    if(action.type === 'SET_DETAILS'){
        return action.payload 
    }

    return state
}

export default postDetails;
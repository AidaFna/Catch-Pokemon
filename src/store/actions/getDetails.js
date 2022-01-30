import axios from "axios";

export const getDetails = (id) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(({data})=>{
            // console.log(data, "action", id);
            dispatch(setDetails(data))
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }
}

export const setDetails = (payload) => {
    return{
        type: 'SET_DETAILS', payload
    }
}
import axios from "axios";

export const getTypes = (id) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(({data})=>{
            // console.log(data, "action", id);
            dispatch(setTypes(data.types))
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }
}

export const setTypes = (payload) => {
    return{
        type: 'SET_TYPES', payload
    }
}
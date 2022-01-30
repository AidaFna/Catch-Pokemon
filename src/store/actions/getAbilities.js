import axios from "axios";

export const getAbilities = (id) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(({data})=>{
            // console.log(data, "action", id);
            dispatch(setAbilities(data.abilities))
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }
}

export const setAbilities = (payload) => {
    return{
        type: 'SET_ABILITIES', payload
    }
}
import axios from "axios";

export const getMoves = (id) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(({data})=>{
            // console.log(data, "action", id);
            dispatch(setMoves(data.moves))
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }
}

export const setMoves = (payload) => {
    return{
        type: 'SET_MOVES', payload
    }
}
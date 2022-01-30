import axios from "axios";

export const getStats = (id) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(({data})=>{
            // console.log(data, "action", id);
            dispatch(setStats(data.stats))
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }
}

export const setStats = (payload) => {
    return{
        type: 'SET_STATS', payload
    }
}
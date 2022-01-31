import axios from "axios";

export const getPokemon = () => {
    return (dispatch) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0')
        .then(({data})=>{
            // console.log(data.results, "action");
            dispatch(setPokemon(data.results))
        })
        .catch((err)=>{
            console.log(err);        
        })
    }
}

export const setPokemon = (payload) => {
    return{
        type: 'SET_POKEMON', payload
    }
}
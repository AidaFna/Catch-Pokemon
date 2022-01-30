import axios from "axios";

export const getSprites = (id) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(({data})=>{
            // console.log(data.sprites, "action", id);
            dispatch(setSprites(data.sprites))
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }
}

export const setSprites = (payload) => {
    return{
        type: 'SET_SPRITES', payload
    }
}
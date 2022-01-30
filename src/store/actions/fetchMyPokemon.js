// Initial ID of contact
let currentID = 0;

export const addPokemon =(payload)=>{
  const {name, nick} = payload;
  currentID+=1
  return {
    type: "ADD_POKEMON",
    id: currentID,
    name,
    nick

  }
}

export const deletePokemon =(payload)=>{
  return{
    type: "DELETE_POKEMON",
    id:payload
  }
}
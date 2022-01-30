const initialState = []

const myPokemon =(state=initialState, action)=>{
  switch (action.type) {
    case "ADD_POKEMON":
      return[
        ...state,
        {
          id:action.id,
          name:action.name,
          nickname: action.nickname
        }
      ]  
      case "DELETE_POKEMON"    :
        return state.filter(myPokemon=>myPokemon.id !== action.id)
    default:
      return state;
  }
}

export default myPokemon


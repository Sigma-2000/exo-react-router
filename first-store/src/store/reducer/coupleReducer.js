import {COUPLE_ADD} from "../constant/action-type.js";
const initialState = {
 couples: [],
}
const coupleReducer = (state= initialState, action) =>{
  switch (action.type) {

    case COUPLE_ADD:
          return {
              ...state,
              couples: [...state.couples, { dragon: action.payload.dragon, chevalier: action.payload.chevalier }],
          }
          default:
            return state;
    }
}

export default coupleReducer

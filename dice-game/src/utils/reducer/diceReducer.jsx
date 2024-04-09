import { useReducer } from "react";

const initialState = {
  count: 0,
};

function diceReducer(state, action) {
  switch (action.type) {
    case 'ROLL_DICE': {
      const dice = Array.from({ length: 3 }, () => 1 + Math.floor(Math.random() * 6));
      const isBrelanOfSix = dice.every(val => val === 6);
      return {
        ...state,
        count: isBrelanOfSix ? state.count + 1 : state.count,
      };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
const useDiceReducer = () => useReducer(diceReducer, initialState);

export default useDiceReducer
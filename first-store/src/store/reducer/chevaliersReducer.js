import {CHEVALIERS_ADD, CHEVALIERS_SET_ERROR, CHEVALIERS_SET_VALUE, CHEVALIERS_DELETE, CHEVALIERS_SET_AGE} from "../constant/action-type.js";

const initialState = {
    name: '',
    age: '',
    chevaliers: [
        { id: 1, name: 'Chevalier Banzai', age: '35' },
        { id: 2, name: 'Chevalier Yamakazi', age: '40' }
    ],
    id: 3,
    error: ''
}

const chevaliersReducer = (state = initialState, action) => {
    switch (action.type) {

      case CHEVALIERS_SET_VALUE:
            return {
                ...state,
                name: action.payload,
                error: ''
            }
      case CHEVALIERS_SET_AGE:
              return {
                  ...state,
                  age: action.payload,
                  error: ''
              }

        case CHEVALIERS_ADD:
            return {
                ...state,
                chevaliers: [...state.chevaliers, {id: state.id, name: state.name, age: state.age}],
                name: '',
                age: '',
                id: state.id + 1,
                error: ''
            }

        case CHEVALIERS_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CHEVALIERS_DELETE:
          return{
            ...state,
            chevaliers:  state.chevaliers.filter(chevalier => chevalier.id !== action.payload)
          };
        default:
            return state;
    }
}

export default chevaliersReducer;
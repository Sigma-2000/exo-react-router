import {combineReducers, legacy_createStore as createStore} from "redux";
import chevaliersReducer from "./reducer/chevaliersReducer";
import dragonReducer from "./reducer/dragonReducer";

const store = createStore(combineReducers({
  dragon: dragonReducer,
  chevaliers: chevaliersReducer
}),)

export default store;
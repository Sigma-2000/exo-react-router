import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import chevaliersReducer from "./reducer/chevaliersReducer";
import dragonReducer from "./reducer/dragonReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import coupleReducer from "./reducer/coupleReducer";


const coupleMiddleware = store => next => action => {
  if (action.type === 'COUPLE_ADD') {
    const currentState = store.getState(); 
    console.log(currentState)
  }

  if (action.type !== 'COUPLE_ADD') {
      store.dispatch({
          type: 'COUPLE_ADD'
      })
  }
 
  next(action)
}


const store = createStore(combineReducers({
  dragon: dragonReducer,
  chevaliers: chevaliersReducer,
  couples: coupleReducer
}),
composeWithDevTools(
  applyMiddleware(
      coupleMiddleware,
  )
),
)

export default store;
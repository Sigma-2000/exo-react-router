import {DRAGON_ADD, DRAGON_DELETE, DRAGON_SET_ERROR, DRAGON_SET_VALUE, CHEVALIERS_ADD, CHEVALIERS_SET_ERROR, CHEVALIERS_SET_VALUE, CHEVALIERS_DELETE, CHEVALIERS_SET_AGE} from "../constant/action-type.js";

export const addDragon = () => ({
    type: DRAGON_ADD
})

export const setDragonName = (payload) => ({
    type: DRAGON_SET_VALUE,
    payload
})

export const setDragonError = (payload) => {
    return {
        type: DRAGON_SET_ERROR,
        payload
    }
}

export const dragonDelete = (payload) => {
  return {
      type: DRAGON_DELETE,
      payload
  }
}

export const addChevalier = () => ({
  type: CHEVALIERS_ADD
})

export const setChevalierName = (payload) => ({
  type: CHEVALIERS_SET_VALUE,
  payload
})
export const setChevalierAge = (payload) => ({
  type: CHEVALIERS_SET_AGE,
  payload
})

export const setChevalierError = (payload) => {
  return {
      type: CHEVALIERS_SET_ERROR,
      payload
  }
}

export const chevalierDelete = (payload) => {
return {
    type: CHEVALIERS_DELETE,
    payload
}
}

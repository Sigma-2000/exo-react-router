import {useReducer} from "react";

let id = 1
const initialState = {
    posts: [],
    post: {
        title: '',
        content: ''
    }
}


const postReducer = (state, action) => {
    switch(action.type) {

        case 'POST/CHANGE':
            return {
                ...state,
                post: {
                    ...state.post,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'POST/ADD':
            return {
                ...state,
                post: {
                    title: '',
                    content: ''
                },
                posts: [...state.posts, {id: id++, ...state.post}]
            }

        default:
            return state;
    }
}

const usePostReducer = () => useReducer(postReducer, initialState);

export default usePostReducer;
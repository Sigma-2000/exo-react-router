import {createContext, useContext} from "react";
import usePostReducer from "../reducer/postReducer.jsx";

const postContext = createContext()

export const usePostContext = () => useContext(postContext);

const PostContextProvider = ({children}) => {

    const [state, dispatch] = usePostReducer();

    return <postContext.Provider value={{state, dispatch}}>
        {children}
    </postContext.Provider>
}

export default PostContextProvider
import {createContext, useContext} from "react";
import useDiceReducer from "../reducer/diceReducer";

const diceContext = createContext()

export const useDiceContext = () => useContext(diceContext);

const DiceContextProvider = ({children}) => {

    const [state, dispatch] = useDiceReducer();

    return <diceContext.Provider value={{state, dispatch}}>
        {children}
    </diceContext.Provider>
}

export default DiceContextProvider
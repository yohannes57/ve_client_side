import { createContext, useContext, useReducer } from "react";
//------------------create context
const stateContext = createContext();

//setprovider for allchildren
export default function StateProvider({ reducer, initialValue, children }) {
  <stateContext.Provider value={useReducer(reducer, initialValue)}>
    {children}
  </stateContext.Provider>;
}
//export it to use without initialize
export const useStateValue = () => useContext(stateContext);

import React, { createContext, useReducer } from "react"

export const countContext = createContext({} as any);

const initialState = {
  count: 0,
}

const reducerCount = (state: { count: number }, action: { type: string, payload: number }) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    case "INCRESE":
      return { count: state.count + action.payload }
    default: return state
  }
}
type CouterContextProviderProps = {
  children: React.ReactNode;
}


const CouterContextProvider = ({ children }: CouterContextProviderProps) => {

  const [count, dispatch] = useReducer(reducerCount, initialState);
  return (
    <countContext.Provider value={{ count, dispatch }}>{children}</countContext.Provider>
  )
}

export default CouterContextProvider
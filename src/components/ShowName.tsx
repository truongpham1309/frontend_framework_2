import { useContext } from "react"
import { countContext } from "../contexts/CouterContextProvider"

const Count = () => {

  const { count, dispatch } = useContext(countContext);
  return (
    <>
      <h1>Count {count.count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
      <button onClick={() => dispatch({type: "INCRESE", payload: 10 })}>INCRESE</button>
    </>
  )
}

export default Count
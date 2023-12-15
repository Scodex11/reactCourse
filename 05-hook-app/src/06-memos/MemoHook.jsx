import { useState, useMemo} from "react";
import { useCounter } from "../hooks";

const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log("Here we go..."+ i);
    }
    
    return `${iterations} iterations done.`;
    };

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  //SOLO se ejecuta cuando el counter cambia
    const memoHeavyProcess = useMemo(   () => heavyProcess(counter), [counter]);

  
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        {" "}
        +1{" "}
      </button>

        <p>{memoHeavyProcess}</p>
        <hr />
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        {" "}
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

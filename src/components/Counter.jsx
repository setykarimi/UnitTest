import { useState } from "react";

const Counter = ({ initialState }) => {
    const [counter, setCounter] = useState(initialState)

    const incrementHandler = () => {
        setCounter(prv => ++prv)
    }

    const descrementHandler = () => {
        setCounter(prv => --prv)
    }

    const resetHandler = () => {
        setCounter(0)
    }

    const revertHandler = () => {
        setCounter(prv => prv * -1)
    }

    return (
        <div>
            <h2 >
                Counter: <b data-testid="count">{counter}</b>
            </h2>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={descrementHandler}>Decrement</button>
                <button onClick={resetHandler}>Reset</button>
                <button onClick={revertHandler}>Revert</button>
            </div>
        </div>
    );
}

export default Counter;
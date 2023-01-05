import { useCounter } from "./CounterHook";

export const Counter = ({initialValue}) => {

    const {count, onIncrement, onDecrement, onReset} = useCounter(initialValue);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={onIncrement}>Add</button>
            <button onClick={onDecrement}>Subtract</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default Counter;
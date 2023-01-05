import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => setCount(count => count + 1);
    const handleDecrement = () => setCount(count => count - 1);
    const handleReset = () => setCount(initialValue);

    return {
        count,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
} 

export default useCounter;
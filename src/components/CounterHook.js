import { useCallback, useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = useCallback(
        function handleIncrement() {setCount(count => count + 1)},
        []);
    
    const handleDecrement = useCallback(
        function handleDecrement() {setCount(count => count - 1)},
        []);
    
    const handleReset = useCallback(
        function handleReset() {setCount(initialValue)},
        [initialValue]);

    return {
        count,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
} 

export default useCounter;
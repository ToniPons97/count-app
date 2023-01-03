import React, { useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);


    
    useEffect(() => {
        console.log('Started counter.');
        const intervalId = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => {
            console.log('Stopped counter.');
            clearInterval(intervalId);
        }
    }, []);

    return <h1>Count: {count}</h1>
}
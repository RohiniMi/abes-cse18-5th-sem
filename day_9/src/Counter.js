import React, { useState } from 'react'
const Counter = () => {
    let [count,setCount] = useState(0);
    const increment = () => {
       setCount(count+1);
        // console.log(count);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Counter Application</h1>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter
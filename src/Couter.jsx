import { useState } from "react"

const Counter=()=>{
   
    const [count,setCounter]=useState(0);
    const handleCounter=()=>{
        setCounter(count+1)
    }
    return(
        <>
        <h1>counter :{count}</h1>
        <button onClick={handleCounter}>update</button>
        </>
    )
}

export default Counter;
import { useState } from "react"

const Counter=()=>{
   
    const [count,setCounter]=useState(0);
    return(
        <>
        <h1>counter :{count}</h1>
        <button onClick={()=>setCounter(count+1)}>update</button>
        </>
    )
}

export default Counter;
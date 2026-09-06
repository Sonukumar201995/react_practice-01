import { useEffect } from "react";

function Counter({count})
{

    const handleCounter=()=>{
        console.log("handleCounter calling")
    }
   
    useEffect(()=>{
        handleCounter();
    },[])
    return(
        <>
            <h2>counter value {count}</h2>
        </>
    )
}

export default Counter;
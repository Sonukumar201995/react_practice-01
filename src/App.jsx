import { useState } from "react";
import Counter from "./Counter";

function App(){

  const [count,setCount]=useState(0);
  return(
    <>
      <h1>handle props side effect</h1>
      <Counter count={count}/>
      <button onClick={()=>setCount(count+1)}>counter</button>
    </>
  )
}

export default App;
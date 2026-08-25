import { useState } from "react";
import Counter from "./Couter";

function App()
{ 
 
  const [fruit,setFruit]=useState("Apple");
  
  const handleFruit=()=>{
    setFruit("Banana")
  }
  return(
    <>
    <h1>hello,i learn State in Reactjs</h1>
    <p>{fruit}</p>
    <button onClick={handleFruit}>change</button>
    <Counter/>
    </>
  )
}
export default App;
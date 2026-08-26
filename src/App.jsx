import { useState } from "react";
// import Counter from "./Couter";

function App()
{ 
 
  const [count,setCount]=useState(0);
  
  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>counter</button>
      {
       count==0 ? <h2>condition 0</h2>
       :count==1 ? <h2>condition 1</h2>
       :count==2 ? <h2>condition 2</h2>
       :count==3 ? <h2>condition 3</h2>
       :count==4 ? <h2>condition 4</h2>
       :<h2>other condition</h2>
      }
    </>
  )
}
export default App;
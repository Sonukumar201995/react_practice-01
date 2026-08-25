import { useState } from "react";
// import Counter from "./Couter";

function App()
{ 
 
  const [display,setDisplay]=useState(true);
  
  return(
    <>
    <h1>hello,i learn State in Reactjs</h1>
    <button onClick={()=>setDisplay(!display)}>toggle</button>
      {
       display ? <h2>sonu kumar</h2> :null
      }
    </>
  )
}
export default App;
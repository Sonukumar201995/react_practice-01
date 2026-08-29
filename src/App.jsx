// import User from "./User";
// import Wrapper from "./Wrapper";

import { useState } from "react";

function App() {
  const [val,setVal]=useState("");
  return (
    <>
      <h2>Get input field value</h2>
       <input type="text"  value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Name"/> 
       <h2>{val}</h2>
       <button onClick={()=>setVal("")}>clear</button>
    </>
  );
}

export default App;
// import User from "./User";
// import Wrapper from "./Wrapper";

import { useState } from "react";

function App() {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [email,setEmail]=useState("")
  return (
    <>
      <h2>controlled component</h2>

       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/><br /><br />
       <input type="text"  value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter age"/><br /><br />
       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/><br /><br />

        <button>Submit</button>
        <button onClick={()=>{setName('');setAge('');setEmail('')}}>clear</button>

       <h2>{name}</h2>
       <h2>{age}</h2>
       <h2>{email}</h2>
    </>
  );
}

export default App;
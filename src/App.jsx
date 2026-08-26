import { useState } from "react";
import User from "./User";

function App()
{ 

  const [student,setStudent]=useState("sonu")
  return(
    <>
      <h1>props, in React js</h1>
     { student && <User name={student}/>}
     <button onClick={()=>setStudent("bhaskar")}>update student</button>
    </>
  )
}
export default App;
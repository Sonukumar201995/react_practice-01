import { useEffect, useState } from "react";

function App() {

  const [data,setData]=useState(0);
  const [counter,setCounter]=useState(0);


  useEffect(() => {
    hello();
  },[counter,data]);


 
  function hello(){
    console.log("hello is calling")
  }

  return(
    <>
    <h2>useEffect Hooks</h2>
        <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
        <button onClick={()=>setData(data+1)}>data {data}</button>
    </>
  ) 
}

export default App;
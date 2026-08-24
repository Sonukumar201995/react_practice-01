
function App()
{ 
  function handleClick()
  {
    console.log("Button Click")
  }


  let fruit=(name)=>{
    console.log(name);
  }
  return(
    <>
    <h1>hello,i learn react js</h1>
    
    <button onClick={handleClick}>Click</button>
    <button onClick={()=>fruit("apple")}>Click Me!</button>
    </>
  )
}
export default App;
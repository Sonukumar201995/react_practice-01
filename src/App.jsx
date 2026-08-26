import User from "./User";

function App()
{ 

  let collage=["ignou","du","iit"];
  return(
    <>
      <h1>props, in React js</h1>
      <User name={collage}/>
    </>
  )
}
export default App;
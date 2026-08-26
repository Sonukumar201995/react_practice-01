import User from "./User";

function App()
{ 

  let userName="sonu kumar"
  let userAge=31;
  let userEmail="sonu@gmail.com"
  return(
    <>
      <h1>props, in React js</h1>
      <User name={userName} age={userAge} email={userEmail}/>
    </>
  )
}
export default App;
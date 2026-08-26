import User from "./User";

function App()
{ 

  let userObjet={
    name:"sonu kumar",
    age:31,
    email:"sonu@gmail.com"
  }
  return(
    <>
      <h1>props, in React js</h1>
      <User user={userObjet}/>
    </>
  )
}
export default App;
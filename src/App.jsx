import Login,{add, keywork, Profile,Setting} from "./Usercomponent";


function App()
{
  return(
    <>
    <h1>hello,i learn react js</h1>
    <Login/>
    <Profile/>
    <Setting/>
    <h5>{keywork}</h5>
    <h5>{add(10,20)}</h5>
    </>
  )
}
export default App;
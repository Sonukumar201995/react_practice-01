let name="sonu kumar";
let age=31;

function fruit()
{
  return "Apple"
}

const user={
  name:"sonu",
  age:31,
  address:"New Delhi"
}

let userArry=["amit","hello","kumar"];

function operation(a,b,opt){
  if(opt=='+')
  {
    return a+b;
  }else if(opt=='-')
  {
    return a-b;
  }else if(opt=='*')
  {
    return a*b;
  }else if(opt=='/')
  {
    return a/b;
  }
}
function App()
{ 
  return(
    <>
    <h1>hello,i learn react js</h1>
    <p>Name : {name}</p>
    <p>Age : {age}</p>
    <p>{name ? name : "name not found"}</p>
    <p>{fruit()}</p>
    <p>{user.name}</p>
    <p>{userArry[0]}</p>
    <p>{operation(10,2,'+')}</p>
    </>
  )
}
export default App;
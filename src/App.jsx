import { useState } from "react";
import Skill from "./Skills";

function App()
{
  const [gender,setGender]=useState('Male')
  const [city,setCity]=useState("delhi")
  return(
    <>
    <h1>Handle Radio and DropDown </h1>

    <h2>Selected Gender :{gender}</h2>
     <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" value={"male"}
     checked={gender=='male'} id="male"/>
     <label htmlFor="male">male</label> 

     <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" value={"female"}
     checked={gender=='female'} id="female"/>
     <label htmlFor="female">female</label>

     <h4>Selected City :{city}</h4>
     <select onChange={(e)=>setCity(e.target.value)} defaultValue={'delhi'}>
        <option value="noida">Noida</option>
        <option value="gurugram">Gurugram</option>
        <option value="delhi">Delhi</option>
     </select>
    </>
  )
}
export default App;
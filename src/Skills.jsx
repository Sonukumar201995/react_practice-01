import { useState } from "react";

function Skill()
{
    const [skill,setSkill]=useState([])
    const handle=(event)=>{
        console.log(event.target.value,event.target.checked);

        if(event.target.checked)
        {
            setSkill([...skill,event.target.value])
        }else
        {
            setSkill([...skill.filter((item)=> item!=event.target.value)])
        }
    }
    return(
        <>
        <input type="checkbox" onChange={handle} id="php"  value="php"/>
        <label htmlFor="php">php</label> <br /><br />

        <input type="checkbox" onChange={handle} id="node"  value="node"/>
        <label htmlFor="node">node</label> <br /><br />

        <input type="checkbox" onChange={handle} id="java"  value="java"/>
        <label htmlFor="java">java</label> <br /><br />

        <h2>{skill.toString()}</h2>
        </>
    )
}

export default Skill;
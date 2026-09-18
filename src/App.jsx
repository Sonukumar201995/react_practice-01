import styled from "styled-components";

function App()
{

  const Heading=styled.h1`
  color:red`;
  return(
    <>
      <h1 className="heading">style with css modules</h1>
      <Heading>hello world</Heading>
       </> 
  )
}
export default App;
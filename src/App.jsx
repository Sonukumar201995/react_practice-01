import './css/style.css'

function App()
{
  return(
    <>
     <h1 className="heading">External style in react </h1>
     <div className='container'>
     <div>
      <img className="image" src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"/>
      <div>
        <h3>sonu kumar</h3>
        <p>Software Engineer</p>
      </div>
     </div>
      <div>
      <img className="image" src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"/>
      <div>
        <h3>monu kumar</h3>
        <p>Deputy Manager</p>
      </div>
     </div>
     </div>
    </>
  )
}

export default App;
import User from "./User";

function App() {
  const userData = [
    {
      id: 1,
      name: "sonu",
      email: "sonu@gmail.com",
      age: 31
    },
    {
      id: 2,
      name: "monu",
      email: "monu@gmail.com",
      age: 30
    },
    {
      id: 3,
      name: "arun",
      email: "arun@gmail.com",
      age: 30
    }
  ];

  return (
    <>
      <h2>Reuse component in loop</h2>

      {userData.map((user) => {
        return <User key={user.id} data={user} />;
      })}
    </>
  );
}

export default App;
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
      id:3,
      name:"arun",
      email:"arun@gmail.com",
      age:30
    }
  ];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>age</td>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
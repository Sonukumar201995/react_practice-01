function User({ data }) {
  return (
    <>
      <h2>Id: {data.id}</h2>
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Age: {data.age}</h2>
    </>
  );
}

export default User;
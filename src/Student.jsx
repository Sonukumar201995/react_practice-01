function Student({ college }) {
  return (
    <div>
      <h2>Student Information</h2>

      <h4>College: {college.college}</h4>
      <h4>Website: {college.website}</h4>
      <h4>City: {college.city}</h4>

      <h3>Students:</h3>

      {college.student.map((student, index) => (
        <div key={index}>
          <h4>Name: {student.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Student;
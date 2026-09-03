import Student from "./Student";

function App() {
  const collegeData = [
    {
      college: "Ignou",
      website: "ignou@gmail.com",
      city: "New Delhi",
      student: [
        {
          name: "Sonu"
        },
        {
          name: "Shekhar"
        }
      ]
    },

    {
      college: "DU",
      website: "du@gmail.com",
      city: "New Delhi",
      student: [
        {
          name: "Arun"
        },
        {
          name: "Deepak"
        }
      ]
    },

    {
      college: "JNU",
      website: "jnu@gmail.com",
      city: "New Delhi",
      student: [
        {
          name: "Pooja"
        },
        {
          name: "Jyoti"
        }
      ]
    }
  ];

  return (
    <>
      <h2>Nested Loop</h2>

      {collegeData.map((college, index) => (
        <div key={index}>
          <Student college={college} />
        </div>
      ))}
    </>
  );
}

export default App;
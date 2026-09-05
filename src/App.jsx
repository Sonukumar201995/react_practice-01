import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Effect is running");
  });

  return <h1>Hello</h1>;
}

export default App;
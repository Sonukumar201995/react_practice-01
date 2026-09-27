import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <h2>Router in React</h2>

     
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      

      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
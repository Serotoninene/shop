// React-Router Components
import { Routes, Route } from "react-router-dom";
// Frames
import Homepage from "./Homepage/Homepage";
// Components
import Navbar from "./Components/Navbar";
// Styling
import "./Scss/style.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;

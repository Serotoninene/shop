// React-Router Components
import { Routes, Route } from "react-router-dom";

// Frames
import Homepage from "./Homepage/Homepage";
import Test from "./Test3D/Test";
import IllustrationsPage from "./IllustrationsPage/IllustrationsPage";
import IllustrationPage from "./IllustrationPage/IllustrationPage";
// Components
import Navbar from "./Components/Navbar";
// Styling
import "./Scss/style.scss";

function App() {
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />{" "}
        <Route exact path="/test" element={<Test />} />{" "}
        <Route exact path="/illustrations" element={<IllustrationsPage />} />{" "}
        <Route exact path="/illustrations/:id" element={<IllustrationPage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;

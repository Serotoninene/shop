// React-Router Components
import { Routes, Route, useNavigate } from "react-router-dom";
// Frames
import Homepage from "./Homepage/Homepage";
import Test from "./Test/Test";
import IllustrationsPage from "./IllustrationsPage/IllustrationsPage";
import IllustrationPage from "./IllustrationPage/IllustrationPage";
// Components
import Navbar from "./Components/Navbar";
// Styling
import "./Scss/style.scss";
// Monitoring the frames per second
import FPSStats from "react-fps-stats";

function App() {
  const history = useNavigate();
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/test" element={<Test history={history} />} />
        <Route exact path="/illustrations" element={<IllustrationsPage />} />
        <Route exact path="/illustrations/:id" element={<IllustrationPage />} />
      </Routes>
      <FPSStats />
    </div>
  );
}

export default App;

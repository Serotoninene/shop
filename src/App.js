// React-Router Components
import { Switch, Route } from "wouter";
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
  return (
    <div id="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/test" component={Test} />
        <Route path="/illustrations" component={IllustrationsPage} />
        {/* <Route path="/illustrations/:id" component={IllustrationPage} /> */}
      </Switch>
      <FPSStats />
    </div>
  );
}

export default App;

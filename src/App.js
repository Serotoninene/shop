import { useState } from "react";
// Wouter Components
import { Switch, Route, useLocation } from "wouter";
// Components
import Navbar from "./Components/Navbar";
import Cursor from "./Components/Cursor";
// Frames
import Homepage from "./Homepage/Homepage";
import IllustrationsPage from "./IllustrationsPage/IllustrationsPage";
import IllustrationPage from "./IllustrationPage/IllustrationPage";
import IllustrationsPageResponsive from "./Test/Test_illustrations_slider";
// Utils
import useWindowSize from "./Utilitaries/Hooks/useWindowSize";
// Styling
import "./Scss/style.scss";

function App() {
  const [small, setSmall] = useState(false);
  const [location, setLocation] = useLocation();
  const { width } = useWindowSize();

  return (
    <div id="App">
      <div className="app">
        <Navbar /> {/* <TransitionPage setDisplay={setDisplay} /> */}
        {/* <Cursor /> */}
        <Switch location={location} key={location}>
          <Route key="1" path="/" component={Homepage} />
          <Route key="2" path="/test" component={IllustrationsPageResponsive} />
          <Route
            key="3"
            path="/illustrations"
            component={
              width < 900 ? IllustrationsPageResponsive : IllustrationsPage
            }
          />
          <Route
            key="4"
            path="/illustrations/:id"
            component={IllustrationPage}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import classes from "./App.module.css";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";
import PersonalityTest from "./pages/PersonalityTest/PersonalityTest";

function App() {
  return (
    <div className={classes.App}>
      <Reset />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalityTest" element={<PersonalityTest />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

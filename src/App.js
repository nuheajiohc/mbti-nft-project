import { Reset } from "styled-reset";
import classes from "./App.module.css";
import Render from "./pages/Render";

function App() {
  return (
    <div className={classes.App}>
      <Reset />
      <Render />
    </div>
  );
}

export default App;

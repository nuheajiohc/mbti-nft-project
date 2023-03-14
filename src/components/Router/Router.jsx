import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import PersonalityTest from "../PersonalityTest/PersonalityTest";
import Result from "../Result/Result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/PersonalityTest" element={<PersonalityTest />}></Route>
        <Route path="/Result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

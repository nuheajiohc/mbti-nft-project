import { useState } from "react";
import Home from "./Home/Home";
import PersonalityTest from "./PersonalityTest/PersonalityTest";
import Result from "./Result/Result";

const Render = () => {
  const [currentPage, setCurrentPage] = useState("homePage");
  const [typeResult, setTypeResult] = useState(null);

  return (
    <>
      {currentPage === "homePage" && (
        <Home onClick={() => setCurrentPage("testPage")} />
      )}
      {currentPage === "testPage" && (
        <PersonalityTest
          onClick={() => setCurrentPage("resultPage")}
          onSendTypeResult={type => setTypeResult(type)}
        />
      )}
      {currentPage === "resultPage" && <Result myPersonalType={typeResult} />}
    </>
  );
};

export default Render;

import { useEffect, useState } from "react";
import Home from "./Home/Home";
import PersonalityTest from "./PersonalityTest/PersonalityTest";
import Result from "./Result/Result";

const Render = () => {
  const [typeResult, setTypeResult] = useState();

  const moveResultPage = () => {
    setCurrentPage(<Result />);
  };

  const moveToTestPage = () => {
    setCurrentPage(
      <PersonalityTest
        onClick={moveResultPage}
        onSendTypeResult={setTypeResult}
      />
    );
  };
  console.log(typeResult);
  const [currentPage, setCurrentPage] = useState(
    <Home onClick={moveToTestPage} />
  );

  return <>{currentPage}</>;
};

export default Render;

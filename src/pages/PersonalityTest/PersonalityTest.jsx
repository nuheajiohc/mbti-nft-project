import Title from "../../components/Title/Title";
import classes from "./PersonalityTest.module.css";
import { QandAList } from "../../utils/QandAList";
import { useState } from "react";

const PersonalityTest = props => {
  const [currentQandA, setCurrentQandA] = useState(QandAList[0]);
  const [typeCount, setTypeCount] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0,
  });

  const personalType = (selectedType, questionNumber) => {
    const includedLastSeletedTypeCount = {
      ...typeCount,
      [selectedType]: typeCount[selectedType] + 1,
    };
    const typeCountEntries = Object.entries(includedLastSeletedTypeCount);
    const sortedTypeCount = typeCountEntries.sort((a, b) => b[1] - a[1]);
    let result = sortedTypeCount
      .slice(0, 4)
      .map(([key, value]) => key)
      .join("");
    return result;
  };

  const moveNextQuestion = event => {
    const selectedAnswer = event.target.dataset.answer;
    const questionNumber = currentQandA.number - 1;
    const selectedType = QandAList[questionNumber][selectedAnswer].type;
    setTypeCount({ ...typeCount, [selectedType]: typeCount[selectedType] + 1 });
    setCurrentQandA(QandAList[questionNumber + 1]);

    if (questionNumber + 1 > 11) {
      props.onClick();
      props.onSendTypeResult(personalType(selectedType, questionNumber + 1));
      return;
    }
  };

  return (
    <section>
      <Title></Title>
      <div
        className={classes["progress-rate"]}
      >{`${currentQandA.number} / 12`}</div>
      <div className={classes.progress}>
        <div
          className={classes["progress-done"]}
          style={{ width: `${(300 * currentQandA.number) / 12}px` }}
        ></div>
      </div>
      <div className={classes["question-container"]}>
        <div className={classes["question-number"]}>
          Q {currentQandA.number}.
        </div>
        <div className={classes.question}>{currentQandA.question}</div>
      </div>
      <div className={classes["answer-container"]}>
        <button
          className={classes["first-answer"]}
          data-answer="firstAnswer"
          onClick={moveNextQuestion}
        >
          {currentQandA.firstAnswer.content}
        </button>
        <button
          className={classes["second-answer"]}
          data-answer="secondAnswer"
          onClick={moveNextQuestion}
        >
          {currentQandA.secondAnswer.content}
        </button>
      </div>
    </section>
  );
};

export default PersonalityTest;

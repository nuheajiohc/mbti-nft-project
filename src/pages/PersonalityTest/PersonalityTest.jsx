import Title from "../../components/Title/Title";
import classes from "./PersonalityTest.module.css";

const PersonalityTest = () => {
  return (
    <section>
      <Title></Title>
      <div className={classes.progress}>
        <div className={classes["progress-done"]}>1 / 12</div>
      </div>
      <div className={classes["question-container"]}>
        <div className={classes["question-number"]}>Q 1.</div>
        <div className={classes.question}>
          제가 프론트엔드 개발자로 성공할 수 있을까요?
        </div>
      </div>
      <div className={classes["answer-container"]}>
        <button className={classes["first-answer"]}>
          물론입니다 대성공할 듯
        </button>
        <button className={classes["second-answer"]}>
          당연하죠 일류가 될겁니다.
        </button>
      </div>
    </section>
  );
};

export default PersonalityTest;

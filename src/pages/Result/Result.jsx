import classes from "./Result.module.css";

const Result = props => {
  return (
    <div>
      <div>
        <p>천방지축 얼렁뚱땅</p>
        <p>짱구는 못말려 짱구</p>
      </div>
      <div>
        <div>나의 성격 유형은?</div>
        <div>{props.myPersonalType}</div>
        <button>결과 나옴</button>
      </div>
    </div>
  );
};

export default Result;

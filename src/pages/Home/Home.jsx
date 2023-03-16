import Title from "../../components/Title/Title";
import classes from "./Home.module.css";

const Home = props => {
  const moveToTestPage = () => {
    props.onClick();
  };

  return (
    <section>
      <Title></Title>
      <main className={classes.content}>
        성격 유형 검사하고 <br />
        <br />
        나만의 NFT 발급받자!
      </main>
      <div>
        <button className={classes.button} onClick={moveToTestPage}>
          성격 유형 검사하러 go!
        </button>
      </div>
    </section>
  );
};

export default Home;

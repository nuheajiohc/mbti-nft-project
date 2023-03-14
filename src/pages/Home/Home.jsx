import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes["home-section"]}>
      <header className={classes.title}>나만의 민팅</header>
      <main className={classes.content}>
        성격 유형 검사하고 <br />
        <br />
        나만의 NFT 발급받자!
      </main>
      <div>
        <button className={classes.button}> 성격 유형 검사하러 go!</button>
      </div>
    </section>
  );
};

export default Home;

import Button from "../components/HomeButton.styled";

const Home = (props) => {
  return (
    <div className="home-page-container">
      <div className="home-page-bg"></div>
      <div className="home-text-container">
        <div className="main-text-container">
          <h1 id="home-text-main">Mobile </h1>
          <h1 id="home-text-main"> Vehicle</h1>
          <h1 id="home-text-main"> Verifier</h1>
        </div>

        <div className="white-box">
          <span className="underline">
            <h2 id="verify-text">Verify Your Vehicle</h2>
          </span>
          <h3 id="years-text">
            With over 30 years of experience in Southern California,
          </h3>
          <h4 id="i-can-text">
            I can inspect any non-salvaged vehicle, dealers are welcome.
          </h4>
          <div className="button-container">
            <Button onClick={() => console.log("hi")}>Contact Me</Button>
            <Button>Pricing</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

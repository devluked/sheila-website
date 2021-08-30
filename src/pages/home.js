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
            <h2 id="verify-text">I Will Verify Your Vehicle On Site</h2>
          </span>
          <h3 id="years-text">
            With over 35 years of experience in Southern California,
          </h3>
          <h4 id="i-can-text">
            I can inspect any vehicle except salvaged, junk or
            import/gray-market vehicles. Dealers are welcome.
          </h4>
          <div className="button-container">
            <a href="/contact">
              <Button>Contact Me</Button>
            </a>
            <a href="/pricing">
              <Button>Pricing</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import Button from "../components/HomeButton.styled";

const Home = (props) => {
  return (
    <div
      style={{ zIndex: props.hidden ? -1 : 1 }}
      className="home-page-container"
    >
      <div className="home-text-container">
        <h1 className="home-text-main">
          Mobile <br /> Vehicle <br /> Verifier
        </h1>
        <div className="white-box">
          <span className="underline">
            <h2 id="verify-text">Verify Your Vehicle</h2>
          </span>
          <h3>With over 30 years of experience in Southern California,</h3>
          <h4>I can inspect any non-salvaged vehicle, dealers welcome.</h4>
          <div className="button-container">
            <Button>Contact Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

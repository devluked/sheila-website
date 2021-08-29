const Pricing = () => {
  return (
    <div className="pricing-page-container">
      <div className="pricing-page-bg"></div>

      <div className="pricing-content">
        <h1 id="hover-text">Hover over the boxes below to see prices</h1>
        <section className="projects">
          <div className="projects-container">
            <div className="projects-project">
              <h1>TYPE 1</h1>
              <hr />
              <img />
              <div className="icons-container">
                <div className="icons">
                  <a target="_blank" href="https://echo-radio.herokuapp.com/">
                    <i className="eye icon"></i>Preview
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/devluked/echo-radio"
                  >
                    <i className="alternate github icon"></i>Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;

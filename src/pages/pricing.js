import venmo from "../assets/photos/icons/app-icon.png";
import zelle from "../assets/photos/icons/Zelle-Symbol.png";

const Pricing = () => {
  return (
    <div className="pricing-page-container">
      <div className="pricing-page-bg"></div>

      <div className="pricing-content">
        <h1 id="hover-text">Call for a quote</h1>
        <h2>Prices from $60 - $100</h2>
        <h2>Multi-vehicle discount</h2>
        <section className="projects">
          <div className="projects-container">
            <div className="projects-project">
              <h1 id="payment">Payment types</h1>
              <hr />
              <div className="payment-icons">
                <div className="payment-container">
                  <img id="zelle" src={zelle} />
                </div>
                <div className="payment-container">
                  <h1>Card</h1>
                </div>
                <div className="payment-container">
                  <img id="venmo" src={venmo} />
                </div>
                <div className="payment-container">
                  <h1>Cash</h1>
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

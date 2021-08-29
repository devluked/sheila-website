const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-page-bg"></div>
      <div className="contact-page-text">
        <h1 id="schedule-text">Schedule An Appointment Today</h1>
        <h4 id="list-text">
          Vintage, commercial, automobiles, trailers, motorcycles, luxury
        </h4>
        <div className="contact-row">
          <div className="contact-set">
            <i className="phone big icon" />
            <h2 id="contact-phone">949-285-5959</h2>
          </div>
          <div className="contact-set">
            <i class="mail big icon" />
            <h2 id="contact-email">sheiladmv@gmail.com</h2>
          </div>
        </div>
        <h4>
          Orange County and LA County, by appointment only. I'll go to you.
        </h4>
      </div>
    </div>
  );
};

export default Contact;

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                Welcome!
                <br />
                To My
                <br />
                Portfolio
              </h1>
              <p>
                I am a software engineer with a passion for innovation,
                specializing in creating stylish, modern websites, web services,
                desktop app and mobile app.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="assets/img/profile.jpeg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

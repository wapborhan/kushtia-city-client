import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <section className="space">
        <div className="container">
          <div className="grid grid-cols-12 gy-40">
            <div className="col-span-4 col-md-6 position-relative">
              <div className="th-team team-card active">
                <div className="box-img">
                  <img src={"/assets/img/team/team_1_1.jpg"} alt="Team" />
                </div>
                <div className="box-content">
                  <div className="box-social">
                    <div className="box-btn">
                      <i className="far fa-plus" />
                    </div>
                    <div className="th-social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com/"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com/"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <h3 className="box-title">
                    <a href="team-details.html">{user && user?.displayName}</a>
                  </h3>
                  <h4 className="box-title">{user && user?.email}</h4>
                  <p className="box-desig">
                    Best Technician of Office Repair and Maintenance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-8 col-md-6">
              <div className="about-card">
                <h2 className="mb-20 pb-1 sec-title">About Me</h2>
                <p>
                  Venenatis purus egestas lorem aenean enim bibendum. Ac
                  pharetra egestas eget gravida turpis senectus. Sed blandit
                  ipsum orci odio egestas egestas sed bibendum. Rhoncus est
                  proin euismod condimentum eget a tristique integer viverra.
                  Enim sed nunc magna consequat consectetur vestibulum odio
                  posuere. Mattis nisl aenean auctor morbi suspendisse diam
                  adipiscing. Tellus egestas amet tellus phasellus.
                  <br />
                  <br />
                  Ornare aliquam ac a pellentesque ante. Morbi maecenas odio
                  integer adipiscing ridiculus mauris. Ornare in sit et tortor
                  orci massa eu ultricies. Sit fermentum faucibu.
                </p>
                <h4 className="mt-30 mb-20">5 Years of Experiences</h4>
                <p className="mb-4">
                  Venenatis purus egestas lorem aenean enim bibendum. Ac
                  pharetra egestas eget gravida turpis senectus. Sed blandit
                  ipsum orci odio egestas egestas sed bibendum. Rhoncus est
                  proin euismod condimentum eget a tristique integer viverra.
                </p>
                <div className="team-counter-wrap">
                  <div className="team-counter">
                    <h5 className="box-title">
                      <span className="counter-number">2000</span>+
                    </h5>
                    <p className="box-text">Total Guide</p>
                  </div>
                  <div className="team-counter">
                    <h5 className="box-title">
                      <span className="counter-number">65</span>+
                    </h5>
                    <p className="box-text">Total Services</p>
                  </div>
                  <div className="team-counter">
                    <h5 className="box-title">
                      <span className="counter-number">279</span>+
                    </h5>
                    <p className="box-text">Award Won</p>
                  </div>
                  <div className="team-counter">
                    <h5 className="box-title">
                      <span className="counter-number">1200</span>+
                    </h5>
                    <p className="box-text">Total Event</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mt-5 pt-xl-2 mb-30">Contact With Me</h4>
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="team-contact">
                <div className="icon-btn">
                  <i className="fas fa-location-dot" />
                </div>
                <div className="media-body">
                  <h5 className="box-title">Our Address</h5>
                  <p className="box-text">
                    2690 Hiltona Street Victoria Road, New York, Canada
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="team-contact">
                <div className="icon-btn">
                  <i className="fas fa-phone" />
                </div>
                <div className="media-body">
                  <h5 className="box-title">Phone Number</h5>
                  <p className="box-text">
                    <a href="tel:+01234567890">+01 234 567 890</a>{" "}
                    <a href="tel:+09876543210">+09 876 543 210</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="team-contact">
                <div className="icon-btn">
                  <i className="fas fa-envelope" />
                </div>
                <div className="media-body">
                  <h5 className="box-title">Email Address</h5>
                  <p className="box-text">
                    <a href="mailto:support24@rakar.com">support24@rakar.com</a>{" "}
                    <a href="mailto:contact@rakar.com">contact@rakar.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [strokeDashoffset, setStrokeDashoffset] = useState(307.919);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;

    setIsVisible(scrollTop > 100);

    const maxDashoffset = 307.919;
    const offset = maxDashoffset - (scrolled / 100) * maxDashoffset;
    setStrokeDashoffset(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer
        className="footer-wrapper footer-layout5"
        data-bg-src="images/bg/footer_bg_5.png"
        style={{ backgroundImage: "url(assets/img/bg/footer_bg_5.png)" }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a href="home-handyman.html">
                        <img src="assets/img/logo.png" alt="Kushtia City" />
                      </a>
                    </div>
                    <p className="about-text">
                      Going forward, a new normal that has evolved from
                      generation is on the runway heading towards a streamlined
                      cloud solution.
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/icon/footer_title5.svg" alt="icon" />
                    Useful Links
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="about.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="service.html">Services</a>
                      </li>
                      <li>
                        <a href="about.html">Testimonial</a>
                      </li>
                      <li>
                        <a href="contact.html">Appointment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/icon/footer_title5.svg" alt="icon" />{" "}
                    Our Services
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="service-details.html">Refrigerator</a>
                      </li>
                      <li>
                        <a href="service-details.html">Microwave</a>
                      </li>
                      <li>
                        <a href="service-details.html">Cookware Stove</a>
                      </li>
                      <li>
                        <a href="service-details.html">Washing Machine</a>
                      </li>
                      <li>
                        <a href="service-details.html">Juicer Mixer</a>
                      </li>
                      <li>
                        <a href="service-details.html">Generator Install</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget newsletter-widget footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/icon/footer_title5.svg" alt="icon" />
                    Newsletter
                  </h3>
                  <p className="footer-text">Get latest updates and offers.</p>
                  <form className="newsletter-form">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter email address"
                      required=""
                    />
                    <button type="submit" className="th-btn style3">
                      Subscribe<i className="far fa-arrow-right ms-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row gy-2 align-items-center">
              <div className="col-md-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright"></i>{" "}
                  {new Date().getFullYear()}
                  <Link to="/"> Kushtia City </Link>. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                Developed by{" "}
                <a href="http://www.srdreamlab.com" target="__BLANK">
                  SR Dream Lab
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
      <div
        className={`scroll-top ${isVisible ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: strokeDashoffset,
            }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Footer;

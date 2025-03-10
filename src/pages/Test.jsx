import "../assets/css/fontawesome.min.css";
import "../assets/css/app.min.css";
import "../assets/css/style.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Test = () => {
  return (
    <section
      className="space"
      id="process-sec"
      data-bg-src="assets/img/bg/process_bg_2.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title2">
                <img
                  src="assets/img/theme-img/title_icon5_white.svg"
                  alt="Icon"
                />
                Working Process
              </span>
              <h2 className="sec-title text-white">Follow Great Process</h2>
              <p className="sec-text text-white">
                Our team of experts is equipped to assist you with a variety of
                pipe repair needs. Please share your email address to connect
                with us.
              </p>
            </div>
          </div>
        </div>
        <div className="process-box-wrap">
          <div className="process-box">
            <div className="box-number">01</div>
            <div className="box-content">
              <h3 className="box-title">Meet Our Team</h3>
              <p className="box-text">
                Proactively envisioned multimedia based expertisee cross-media
                growth
              </p>
            </div>
          </div>
          <div className="process-box">
            <div className="box-number">02</div>
            <div className="box-content">
              <h3 className="box-title">Get Estimation</h3>
              <p className="box-text">
                Proactively envisioned multimedia based expertisee cross-media
                growth
              </p>
            </div>
          </div>
          <div className="process-box">
            <div className="box-number">03</div>
            <div className="box-content">
              <h3 className="box-title">Start Project</h3>
              <p className="box-text">
                Proactively envisioned multimedia based expertisee cross-media
                growth
              </p>
            </div>
          </div>
          <div className="process-box">
            <div className="box-number">04</div>
            <div className="box-content">
              <h3 className="box-title">Deliver Project</h3>
              <p className="box-text">
                Proactively envisioned multimedia based expertisee cross-media
                growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;

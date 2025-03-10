import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="th-hero-wrapper hero-5 slider-area" id="hero">
        <Swiper
          className="swiper th-slider"
          id="heroSlide5"
          data-slider-options='{"effect":"fade","autoHeight":true}'
          effect={"fade"}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="hero-inner"
                data-bg-src="assets/img/hero/hero_bg_5_1.jpg"
                style={{
                  background: "url(/images/hero/hero_bg_5_1.jpg)",
                  // position: "relative",
                  // backgroundSize: "cover",
                }}
              >
                <div
                  className="de"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    background: "rgba(0,0,0,0.5)",
                  }}
                ></div>
                <div className="container">
                  <div
                    className="hero-style5"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span
                      className="sub-title2"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      <span className="line"></span>
                      <img src="assets/img/hero/battery_icon.svg" alt="shape" />
                      Welcome To Rakar
                    </span>
                    <h1 className="hero-title">
                      <span
                        className="title1"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        দুঃসময়ই এর জন্য
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        <span className="text-theme"> রক্ত </span> সঞ্চয় করুন
                      </span>
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই
                      এটা সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের
                      ৪৭%-ই আসত পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে
                      আসে ২০-২৫% এ।
                    </p>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.8s"
                    >
                      <Link to="/blood" className="th-btn rounded-12 style2">
                        বিস্তারিত
                        <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="hero-inner"
                data-bg-src="assets/img/hero/hero_bg_5_2.jpg"
                style={{ background: "url(images/hero/hero_bg_5_2.jpg)" }}
              >
                <div className="container">
                  <div className="hero-style5">
                    <span
                      className="sub-title2"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      <span className="line"></span>
                      <img src="assets/img/hero/battery_icon.svg" alt="shape" />
                      Welcome To Rakar
                    </span>
                    <h1 className="hero-title">
                      <span
                        className="title1"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        We are expert in
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        <span className="text-theme">Electrical</span> Services
                      </span>
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      We believe in providing top quality workman and are so
                      confident in our level of service that we back it up
                    </p>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.8s"
                    >
                      <a
                        href="service.html"
                        className="th-btn rounded-12 style2"
                      >
                        Our All Services
                        <i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                        className="popup-video video-btn"
                      >
                        <div className="play-btn">
                          <i className="fas fa-play"></i>
                        </div>
                        Play Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="hero-inner"
                data-bg-src="assets/img/hero/hero_bg_5_3.jpg"
                style={{ background: "url(images/hero/hero_bg_5_3.jpg)" }}
              >
                <div className="container">
                  <div className="hero-style5">
                    <span
                      className="sub-title2"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      <span className="line"></span>
                      <img src="assets/img/hero/battery_icon.svg" alt="shape" />
                      Welcome To Rakar
                    </span>
                    <h1 className="hero-title">
                      <span
                        className="title1"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        We are expert in
                      </span>
                      <span
                        className="title2"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        <span className="text-theme">Electrical</span> Services
                      </span>
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      We believe in providing top quality workman and are so
                      confident in our level of service that we back it up
                    </p>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.8s"
                    >
                      <a
                        href="service.html"
                        className="th-btn rounded-12 style2"
                      >
                        Our All Services
                        <i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                        className="popup-video video-btn"
                      >
                        <div className="play-btn">
                          <i className="fas fa-play"></i>
                        </div>
                        Play Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="slider-pagination"></div>
        </Swiper>
        <div className="icon-box">
          <button
            data-slider-prev="#heroSlide5"
            className="slider-arrow default"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#heroSlide5"
            className="slider-arrow default"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default Hero;

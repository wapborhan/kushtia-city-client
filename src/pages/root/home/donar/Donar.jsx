import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Donar = () => {
  return (
    <section
      className="overflow-hidden space"
      id="team-sec"
      style={{
        background: "url(assets/img/bg/team_bg_1.jpg)",
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title2">
                <span className="line"></span>
                <img src="assets/img/theme-img/title_icon5.svg" alt="shape" />
                রক্তের ডোনার
              </span>
              <h2 className="sec-title">আমাদের সুপার হিরো</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn mt-n3 mt-lg-0">
              <Link to="/blood" className="th-btn style4 rounded-12">
                সকল ডোনার<i className="far fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="slider-wrap text-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            // loop={true}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            // speed={1000}
            pagination={{
              el: ".slider-pagination",
              type: "fraction",
              clickable: true,
            }}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="swiper th-slider has-shadow"
          >
            {/* Slides */}
            {[
              { name: "John Simon", img: "team_5_1.png" },
              { name: "Michel Jack", img: "team_5_2.png" },
              { name: "Mackolin Smith", img: "team_5_3.png" },
              { name: "Ralph Edwards", img: "team_5_1.png" },
              { name: "Guy Hawkins", img: "team_5_2.png" },
              { name: "Jacob Jones", img: "team_5_3.png" },
            ].map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="th-team team-element">
                  <div className="box-img">
                    {/* <img src={`assets/img/team/${member.img}`} alt="Team" /> */}
                    <img
                      src="http://service.scouts.gov.bd/profile_img/1548126508-11.jpg"
                      alt="Team"
                    />
                  </div>
                  <a href="team-details.html" className="icon-btn arrow-icon">
                    <i className="far fa-arrow-up-right"></i>
                  </a>
                  <div className="box-content">
                    <h3 className="box-title">
                      <a href="team-details.html">{member.name}</a>
                    </h3>
                    <span className="box-desig">ভেরামারা কুষ্টিয়া</span>
                    <span className="icon-btn whatsapp">B+</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation and Pagination */}
          <div className="slider-controller">
            <button className="slider-arrow default slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <div className="slider-pagination"></div>
            <button className="slider-arrow default slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donar;

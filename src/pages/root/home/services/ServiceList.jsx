import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServiceList = () => {
  return (
    <div className="slider-wrap text-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
          },
        }}
        className="swiper th-slider has-shadow"
      >
        {/* Slides */}
        {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="service-block">
              <div className="box-img">
                <img
                  src={`assets/img/service/service_block_${item}.jpg`}
                  alt="Service"
                />
              </div>
              <a href="service-details.html" className="icon-btn">
                <i className="far fa-arrow-up-right"></i>
              </a>
              <div className="box-content">
                <div className="box-icon">
                  <img
                    src={`assets/img/icon/service_block_${item}.svg`}
                    alt="Icon"
                  />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    {
                      [
                        "Electrical Inspections",
                        "Lightning Installation",
                        "Wiring and Rewiring",
                        "EV Charging Station",
                      ][(item - 1) % 4]
                    }
                  </a>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="slider-controller">
        <button className="slider-arrow default text-white slider-prev">
          <i className="far fa-arrow-left"></i>
        </button>
        <div className="slider-pagination white-color"></div>
        <button className="slider-arrow default text-white slider-next">
          <i className="far fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ServiceList;

import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <div className="brand-sec3">
      <div className="brand-inner">
        <Swiper
          className="swiper th-slider"
          id="brandSlider2"
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
            1300: { slidesPerView: 5 },
            1500: { slidesPerView: 7 },
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_1.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_2.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_3.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_4.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_5.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_6.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_7.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_1.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_2.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_3.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_4.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_5.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_6.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="brand-card">
                <img src="images/brand/brand_3_7.svg" alt="Brand Logo" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;

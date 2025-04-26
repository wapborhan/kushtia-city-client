import { Link } from "react-router-dom";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section
      className="overflow-hidden space"
      id="service-sec"
      data-bg-src="assets/img/bg/service_bg_5.png"
      style={{
        backgroundImage: "url(assets/img/bg/service_bg_5.png)",
      }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="col-md-7 col-xl-6 text-center text-md-start">
            <div className="title-area">
              <span className="sub-title2 flex">
                <span className="line"></span>
                <img
                  src="assets/img/theme-img/title_icon5_white.svg"
                  alt="shape"
                />
                শীর্ষ সার্ভিস সুমুহ
              </span>
              {/* <h2 className="sec-title text-white">
                We Provide Residential & Commercial Electronic Service
              </h2> */}
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn mt-n3 mt-md-0">
              <Link to="/services" className="th-btn style2 rounded-12">
                সকল সার্ভিস <i className="far fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <ServiceList />
      </div>
    </section>
  );
};

export default Services;
``;

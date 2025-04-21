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

                    <div className="th-app" style={{ color: "#fff" }}>
                      আপনার মোবাইল ডিভাইসের জন্য কুষ্টিয়া সিটি অ্যাপটি ডাউনলোড
                      করুন এবং আপনার এলাকার সেরা পরিষেবাগুলি পান।
                      <Link to="/">
                        <img
                          src="https://cdn-shebaxyz.s3.ap-south-1.amazonaws.com/sheba_xyz/play-store.png"
                          alt=""
                          className="img-fluid mt-3"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/icon/footer_title5.svg" alt="icon" />{" "}
                    উপকারী লিংক
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/blood">ব্লাড ব্যাঙ্ক</Link>
                      </li>{" "}
                      <li>
                        <Link to="/doctor">ডাক্তার</Link>
                      </li>{" "}
                      <li>
                        <Link to="/hospital">হাসপাতাল</Link>
                      </li>{" "}
                      <li>
                        <Link to="/diagnostic">ডায়াগনস্টিক</Link>
                      </li>{" "}
                      <li>
                        <Link to="/fire-services">ফায়ার সার্ভিস</Link>
                      </li>{" "}
                      <li>
                        <Link to="/police-station">থানা-পুলিশ</Link>
                      </li>{" "}
                      <li>
                        <Link to="/">বিদ্যুৎ অফিস</Link>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/icon/footer_title5.svg" alt="icon" />{" "}
                    সেবা সমূহ
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/uddokta">উদ্যোক্তা</Link>
                      </li>{" "}
                      <li>
                        <Link to="/uddokta">ব্যাংক</Link>
                      </li>{" "}
                      <li>
                        <Link to="/">হোটেল</Link>
                      </li>{" "}
                      <li>
                        <Link to="/">রেস্টুরেন্ট</Link>
                      </li>
                      <li>
                        <Link to="/">বাসা ভাড়া</Link>
                      </li>{" "}
                      <li>
                        <Link to="/">গাড়ী ভাড়া</Link>
                      </li>
                      <li>
                        <Link to="/">সকল মিস্ত্রি</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img src="assets/img/icon/footer_title5.svg" alt="icon" />{" "}
                    সেবা সমূহ
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/">দোকান (স্থান) </Link>
                      </li>{" "}
                      <li>
                        <Link to="/">দর্শনীয় স্থান</Link>
                      </li>{" "}
                      <li>
                        <Link to="/">কুরিয়ার সার্ভিস</Link>
                      </li>{" "}
                      <li>
                        <Link to="/">শিক্ষা প্রতিষ্ঠান</Link>
                      </li>{" "}
                    </ul>
                  </div>
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
                  কপিরাইট <i className="fal fa-copyright"></i>{" "}
                  {new Date().getFullYear()}
                  <Link to="/"> Kushtia City</Link>, সর্বস্বত্ব সংরক্ষিত।
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

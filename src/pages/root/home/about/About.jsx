import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6 mb-35 mb-xl-0">
            <div className="img-box5">
              <div className="img1">
                <img src="images/normal/about_5.png" alt="About" />
              </div>
              <div className="customer-box">
                <div className="box-img">
                  <img src="images/normal/avaters.png" alt="About" />
                </div>
                <div className="media-body" title="আদমশুমারী ও গৃহগণনা ২০১১">
                  <h4 className="box-title">
                    <span className="counter-number">১৯,৪৬,৮৩৮</span>+
                  </h4>
                  <p className="box-text">মোট জনসংখ্যা</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 text-center text-xl-start">
            <div className="pe-xxl-5">
              <div className="title-area mb-37">
                <span className="sub-title2">
                  <img src="images/theme-img/title_icon5.svg" alt="shape" />
                  এক নজরে
                </span>
                <h2 className="sec-title mb-5">কুষ্টিয়া জেলা সম্পর্কে</h2>
                <p className="sec-text lh-lg" style={{ textAlign: "justify" }}>
                  সাহিত্য ও সংস্কৃতির রাজধানী হিসেবে পরিচিত কুষ্টিয়া জেলার উত্তর
                  পশ্চিম এবং উত্তরে পদ্মা নদীর অপর তীরে রাজশাহী, নাটোর ও পাবনা
                  জেলা, দক্ষিণে ঝিনাইদহ জেলা, পশ্চিমে মেহেরপুর ও চুয়াডাঙ্গা জেলা
                  এবং ভারতের নদীয়া ও মুর্শিদাবাদ জেলা এবং পূর্বে রাজবাড়ী জেলা
                  অবস্থিত। ভারতের সাথে কুষ্টিয়ার ৪৬.৬৯ কিলোমিটার সীমান্ত এলাকা
                  আছে।বিশ্বকবি রবীন্দ্রনাথ ঠাকুরের স্মৃতি বিজড়িত এই কুষ্টিয়া
                  শিল্প সাহিত্য ও সংস্কৃতিতে বাংলাদেশকে করেছে সমৃদ্ধ। এছাড়াও
                  বিষাদ সিন্ধুুর রচয়িতা মীর মশাররফ হোসেন এবং বাউল সম্রাট লালনের
                  তীর্থভূমি, পুরাতন কুষ্টিয়া হাটশ হরিপুর গ্রামে গীতিকার, সুরকার
                  ও কবি আজিজুর রহমানের বাসত ভিটা ও কবর, এ জনপদে জন্মগ্রহণকারী
                  বিশিষ্ট কবি দাদ আলী, লেখিকা মাহমুদা খাতুন সিদ্দিকা, ‘‘এই পদ্মা
                  এই মেঘনা’’ গানের রচয়িতা আবু জাফর, সাবেক প্রধানমন্ত্রী শাহ
                  আজিজুর রহমান, কুষ্টিয়ার সাহিত্য ও সংস্কৃতির প্রতিষ্ঠাতা কাঙাল
                  হরিণাথ, নীল বিদ্রোহের নেত্রী প্যারী সুন্দরী, স্বদেশী আন্দোলনের
                  নেতা বাঘা যতিন, প্রকৌশলী কামরুল ইসলাম সিদ্দিকী, সঙ্গীত শিল্পী
                  মোঃ আব্দুল জববার, ফরিদা পারভীনসহ অসংখ্য গুণীজনের পীঠস্থান
                  কুষ্টিয়াকে সমৃদ্ধ করেছে।
                </p>
              </div>
              {/* <div className="about-media-wrap">
                <div className="about-media">
                  <div className="box-icon">
                    <img src="images/icon/about_media_1.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">Highly Expert Team</h3>
                  <p className="box-text">
                    We are a team highly skill in this handyman services
                  </p>
                </div>
                <div className="about-media">
                  <div className="box-icon">
                    <img src="images/icon/about_media_2.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">24/7 Call Services</h3>
                  <p className="box-text">
                    We are a team highly skill in this handyman services
                  </p>
                </div>
              </div> */}
              <div className="btn-group justify-content-center mt-4">
                <Link to="/" className="th-btn style4 rounded-10">
                  আরো জানুন<i className="far fa-arrow-right ms-2"></i>
                </Link>
                <Link to="/" className="call-btn">
                  <div className="play-btn">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div className="media-body">
                    <p className="box-label">Join our Facebook Group</p>
                    <h6 className="box-link">
                      <b>Kushtia City</b>
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

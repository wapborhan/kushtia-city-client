import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="shape-mockup spin" data-top="5%" data-right="0%">
        <img src="assets/img/shape/lines_1.png" alt="shape" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-xl-5 col-span-5">
            <div className="img-box2">
              <div className="img1">
                <img src="assets/img/normal/why_1.jpg" alt="Why" />
              </div>
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn popup-video"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-span-7 text-left space-extra">
            <div className="ps-xl-5 pb-30 pb-lg-0">
              <div className="title-area">
                <span className="sub-title flex">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  ডোনার
                </span>
                <h2 className="sec-title">
                  ১৯ তম জন্মদিন ।। ল্যাবে এসে রক্ত দিন
                </h2>

                <p className="sec-text pe-xl-5 me-xxl-5">
                  আপনি কি জানেন, দক্ষিণ এশিয়ার দেশগুলোর মধ্যে স্বেচ্ছারক্তদানের
                  হারে বাংলাদেশ পিছিয়ে আছে, এমনকি ভুটানের চেয়েও! তবে আশার কথা,
                  আমাদের ১৮-৬০ বছর বয়সী জনগোষ্ঠীর মাত্র ৩% যদি শুধু তাদের
                  জন্মদিনে রক্ত দেন, তাহলেই আমরা আমাদের প্রয়োজনের পুরোটাই
                  মেটাতে পারি স্বেচ্ছা রক্ত দিয়ে। তাই আপনার ১৯ তম জন্মদিনকে
                  স্মরণীয় করে রাখুন প্রথম রক্তদানের মাধ্যমে।
                </p>

                <p className="sec-text pe-xl-5 me-xxl-5">
                  আর রক্ত দিন ল্যাবে এসে। ল্যাবে রক্ত দিলেই আপনার এক ব্যাগ রক্ত
                  থেকে একে উপাদানে বিভক্ত করে কমপক্ষে চারজন মানুষকে আমরা বাঁচাতে
                  সাহায্য করতে পারি। কারণ রক্তকে উপাদানে বিভক্ত করতে দানের
                  অনতিবিলম্বেই এর প্রসেসিংয়ের কাজ শুরু করতে হয় যা ক্যাম্প বা
                  অন্য কোথাও দিলে সম্ভব নয়।
                </p>
              </div>
              <Link to="/blood" className="th-btn style4">
                রক্তদাতা হন<i className="far fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

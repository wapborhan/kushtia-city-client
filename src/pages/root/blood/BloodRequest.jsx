import BloodReqCard from "../../../components/shared/BloodReqCard";
import DonarList from "./DonarList";

const BloodRequest = () => {
  const data = [
    {
      image: "http://service.scouts.gov.bd/profile_img/1548126508-11.jpg",
      name: "মোঃ সাইফুল ইসলাম",
      location: "ভেরামারা, কুষ্টিয়া",
      bloodGroup: "B+",
      connect: "0123456789",
    },
    {
      image: "assets/img/gallery/gallery_2_5.jpg",
      name: "মোঃ ইসলাম",
      location: "ভেরামারা, কুষ্টিয়া",
      bloodGroup: "A+",
      connect: "0123456789",
    },
    {
      image: "assets/img/gallery/gallery_2_2.jpg",
      name: "মোঃ ইসলাম",
      location: "ভেরামারা, কুষ্টিয়া",
      bloodGroup: "A+",
      connect: "0123456789",
    },
    {
      image: "assets/img/team/team_5_1.png",
      name: "মোঃ ইসলাম",
      location: "ভেরামারা, কুষ্টিয়া",
      bloodGroup: "A+",
      connect: "0123456789",
    },
  ];

  const cardData = data.map((member, idx) => {
    return <BloodReqCard data={member} key={idx} column={3} />;
  });

  return (
    <>
      <section className="overflow-hidden space" id="service-sec">
        <div className="shape-mockup spin" data-top="0%" data-right="0%">
          <img src="assets/img/shape/lines_1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                  রক্তের প্রয়োজন
                </span>
                <h2 className="sec-title">এখন পর্যন্ত রক্তের অনুরোধঃ ১৪ জন</h2>
                {/* <p className="sec-text">
                  সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা
                  সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত
                  পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
                </p> */}
              </div>
            </div>
          </div>
          <div className="donar">
            <div className="row">{cardData}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BloodRequest;

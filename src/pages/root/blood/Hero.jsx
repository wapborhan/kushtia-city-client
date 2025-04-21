const Hero = () => {
  return (
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
                রক্তদাতা
              </span>
              <h2 className="sec-title">দুঃসময়ের জন্য রক্ত সঞ্চয় করুন</h2>
              <p className="sec-text">
                সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা
                সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত
                পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

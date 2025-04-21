const BloodReqCard = ({ data, column }) => {
  const { image, name, location, bloodGroup, connect } = data;

  return (
    <div
      className={`th-team team-element col-lg-${column} col-md-6 col-12 text-start mt-4`}
    >
      <div className="box-img">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26383.102958827007!2d88.96914604365514!3d24.021022722381158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea4479d868235%3A0x8f55e08c481d5072!2sBheramara!5e1!3m2!1sen!2sbd!4v1745224810950!5m2!1sen!2sbd"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <img src={image} alt="Team" /> */}
      </div>
      <div className="icons">
        {/* <a href={`sms:${connect}`} className="icon-btn arrow-icon">
          <i className="fas fa-location-dot"></i>
        </a> */}

        <a href={`sms:${connect}`} className="icon-btn arrow-icon">
          <i className="fas fa-envelope"></i>
        </a>
        <a href={`tel:${connect}`} className="icon-btn arrow-icon">
          <i className="fal fa-phone"></i>
        </a>
      </div>
      <div className="box-content px-4 ">
        <span className="icon-btn whatsapp">{bloodGroup}</span>
        <h3 className="box-title">{name}</h3>
        <span className="box-desig mt-1">রক্তদানের সময়ঃ 12 Feb 2025</span>
        <span className="box-desig mt-1">রক্তের পরিমাণঃ 1 ব্যাগ</span>
        <span className="box-desig mt-1">হাসপাতালঃ {location}</span>
        <span className="box-desig mt-1">উপহারঃ </span>
        <span className="read-more position-absolute bottom-0 end-0">
          বিস্তারিতঃ
        </span>
      </div>
    </div>
  );
};

export default BloodReqCard;

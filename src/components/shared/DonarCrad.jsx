const DonarCrad = ({ name }) => {
  return (
    <div className="th-team team-element col-3 text-center mt-4">
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
        <h3 className="box-title">{name}</h3>
        <span className="box-desig">ভেরামারা কুষ্টিয়া</span>
        <span className="icon-btn whatsapp">B+</span>
      </div>
    </div>
  );
};

export default DonarCrad;

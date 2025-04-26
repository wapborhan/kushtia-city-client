import DonarCard from "../../../components/shared/DonarCard";

const DonarList = () => {
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
    return <DonarCard data={member} key={idx} />;
  });

  return (
    <div className="donar-list mt-10" style={{ marginTop: "40px" }}>
      <div className="grid grid-cols-4 gap-5">{cardData}</div>
    </div>
  );
};

export default DonarList;

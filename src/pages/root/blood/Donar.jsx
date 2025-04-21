import { useEffect, useState } from "react";
import DonarList from "./DonarList";
import useUpazila from "../../../hooks/data/useUpazila";
import Select from "../../../components/shared/Select";
import useBloodGroup from "../../../hooks/data/useBloodGroup";

const Donar = () => {
  const [upazilas] = useUpazila();
  const [bloodGroups] = useBloodGroup();
  const [upazila, setUpazila] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [filteredUpazila, setFilteredUpazila] = useState();

  useEffect(() => {
    const filteredUpazila = upazilas.filter(
      (upazila) => upazila?.district_id === "25"
    );

    setFilteredUpazila(filteredUpazila);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitData = (e) => {
    e.preventDefault();
    const searchData = {
      upazila: upazila.name.toLowerCase(),
      bloodGroup: bloodGroup.name,
    };

    console.log(searchData);
  };

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
                  রক্তদাতা খুজুন
                </span>
                <h2 className="sec-title">এখন রক্তের ডোনার সংখ্যাঃ ১৩০ জন</h2>
                <p className="sec-text">
                  সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা
                  সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত
                  পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
                </p>
              </div>
            </div>
          </div>
          <div className="donar">
            <form onSubmit={onSubmitData} className="p-4 row">
              <div className="upozila col-lg-5 col-md-4 col-12">
                <Select
                  name="Upozila"
                  setData={setUpazila}
                  data={filteredUpazila}
                  disableCon={true}
                />
              </div>
              <div className="groups col-lg-5 col-md-4 col-12">
                <Select
                  name="Blood Group"
                  setData={setBloodGroup}
                  disableCon={true}
                  data={bloodGroups}
                  className="blood-group"
                />
              </div>
              <div className="button col-lg-2 col-md-2 col-12">
                <button
                  className="w-full border-0 px-5 rounded"
                  style={{ padding: "0.8rem" }}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
            <DonarList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Donar;

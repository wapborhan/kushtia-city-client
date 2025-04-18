import { useEffect, useState } from "react";
import DonarList from "./DonarList";
import useDivision from "../../../hooks/data/useDivision";
import useDistrict from "../../../hooks/data/useDistrict";
import useUpazila from "../../../hooks/data/useUpazila";
import Select from "../../../components/shared/Select";

const Search = () => {
  const [divisions] = useDivision();
  const [districts] = useDistrict();
  const [upazilas] = useUpazila();
  //
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  //
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredUpazila, setFilteredUpazila] = useState();

  useEffect(() => {
    const filteredDistricts = divisions
      ? districts.filter((district) => district?.division_id === division?.id)
      : [];

    setFilteredDistricts(filteredDistricts);

    const filteredUpazila = districts
      ? upazilas.filter((upazila) => upazila?.district_id === district?.id)
      : [];

    setFilteredUpazila(filteredUpazila);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [division, district]);

  const onSubmitData = (e) => {
    e.preventDefault();
    const searchData = {
      division: division.name.toLowerCase(),
      district: district.name.toLowerCase(),
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
                <h2 className="sec-title">দুঃসময়ের জন্য রক্ত সঞ্চয় করুন</h2>
                <p className="sec-text">
                  সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা
                  সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত
                  পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
                </p>
              </div>
            </div>
          </div>
          <div className="donar">
            <form onSubmit={onSubmitData}>
              <div className="row grid-cols-5 gap-5">
                <div className="division col-2">
                  <Select
                    name="Division"
                    disableCon={true}
                    setData={setDivision}
                    data={divisions}
                  />
                </div>
                <div className="district col-2">
                  <Select
                    name="District"
                    setData={setDistrict}
                    disableCon={division}
                    data={filteredDistricts}
                  />
                </div>
                <div className="upozila col-2">
                  <Select
                    name="Upozila"
                    setData={setUpazila}
                    disableCon={district}
                    data={filteredUpazila}
                  />
                </div>
                <div className="group col-2">
                  <Select
                    name="Blood Group"
                    setData={setBloodGroup}
                    disableCon={true}
                    data={[
                      { id: "1", name: "A+" },
                      { id: "2", name: "A-" },
                    ]}
                  />
                </div>
                <div className="button col-2">
                  <button className=" p-2 w-full" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <DonarList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

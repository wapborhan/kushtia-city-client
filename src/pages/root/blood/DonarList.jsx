import DonarCrad from "../../../components/shared/DonarCrad";

const DonarList = () => {
  return (
    <div className="donar-list mt-10" style={{ marginTop: "40px" }}>
      <div className="row">
        <DonarCrad name="Borhan" />
        <DonarCrad />
        <DonarCrad />
        <DonarCrad />
      </div>
    </div>
  );
};

export default DonarList;

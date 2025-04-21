import useBloodGroup from "../../../hooks/data/useBloodGroup";

const StockReport = () => {
  const [bloodGroups] = useBloodGroup();

  return (
    <div>
      <div className="about space-y-4 p-4">
        <div className="box">
          {/* <h5 className="text-xl border-bottom">গ্রুপ অনুযায়ী</h5> */}
          <div className="row p-3 justify-center items-center">
            {bloodGroups.map(({ name, id }) => {
              return (
                <div
                  className="col-3 group flex gap-3 justify-center items-center p-2  border-2"
                  key={id}
                  style={{
                    border: "1px solid #fff",
                  }}
                >
                  <div className="name  font-bold">{name}</div>
                  <div className="stock ">19</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockReport;

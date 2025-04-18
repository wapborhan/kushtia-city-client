const StockReport = () => {
  const cardData = [
    { id: 1, groupName: "A+" },
    { id: 2, groupName: "B+" },
    { id: 3, groupName: "O+" },
    { id: 4, groupName: "AB+" },
    { id: 1, groupName: "A-" },
    { id: 2, groupName: "B-" },
    { id: 3, groupName: "O-" },
    { id: 4, groupName: "AB-" },
  ];

  return (
    <div>
      <div className="donar">
        <div className="about space-y-4 p-4">
          <div className="box">
            <h1 className="text-xl"> এখন রক্তের ডোনার সংখ্যাঃ ১৩০ জন</h1>
            <h5 className="text-xl border-bottom">গ্রুপ অনুযায়ী</h5>
            <div className="row p-3 justify-center items-center">
              {cardData.map(({ groupName, id }) => {
                return (
                  <div
                    className="col-3 group flex gap-3 justify-center items-center p-2 border"
                    key={id}
                  >
                    <div className="name  font-bold">{groupName}</div>
                    <div className="stock ">19</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockReport;

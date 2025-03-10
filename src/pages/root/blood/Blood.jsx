import BreadCumb from "../../../components/shared/BreadCumb";
import About from "./About";
import Hero from "./Hero";
import Search from "./Search";
import StockReport from "./StockReport";

const Blood = () => {
  return (
    <div className="">
      <BreadCumb title="রক্ত" />
      <Hero />
      <About />
      <StockReport />
      <Search />
    </div>
  );
};

export default Blood;

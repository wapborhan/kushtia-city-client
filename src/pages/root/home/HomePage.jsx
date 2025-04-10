import About from "./about/About";
import Clients from "./clients/Clients";
import Donar from "./donar/Donar";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import WhyHere from "./why/WhyHere";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <About />
      <WhyHere />
      <Services />
      <Donar />
    </>
  );
};

export default HomePage;

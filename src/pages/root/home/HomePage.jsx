import About from "./about/About";
import Clients from "./clients/Clients";
import Header from "./header/Header";
import Hero from "./hero/Hero";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <About />
    </>
  );
};

export default HomePage;

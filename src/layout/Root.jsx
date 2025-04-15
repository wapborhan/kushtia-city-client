import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect } from "react";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log("pathname", pathname);

  useEffect(() => {
    const body = document.querySelector("body");
    if (pathname === "/") {
      body.style.backgroundColor = "#fff";
    } else {
      body.style.backgroundColor = "#e1e4e5";
    }
  }, [pathname]);

  return (
    <>
      {pathname === "/" ? "" : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

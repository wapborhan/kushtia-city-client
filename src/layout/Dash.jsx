import { Outlet } from "react-router-dom";
import DashFooter from "./footer/DashFooter";
import DashHeader from "./header/DashHeader";
import DashSidebar from "./sidebar/DashSidebar";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Dash = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const [toggled, setToggled] = useState(false);
  const { loading } = useAuth();
  return (
    <div id="wrapper" className="flex">
      <div className="sidebar">
        <DashSidebar
          collapsed={collapsed}
          setBroken={setBroken}
          setToggled={setToggled}
          toggled={toggled}
          broken={broken}
        />
      </div>
      <div
        id="content-wrapper"
        className="w-full"
        style={{ height: "100dvh", overflow: "hidden" }}
      >
        <div id="content" style={{ height: "100dvh", overflowY: "scroll" }}>
          <DashHeader
            collapsed={collapsed}
            setBroken={setBroken}
            setCollapsed={setCollapsed}
            setToggled={setToggled}
            toggled={toggled}
            broken={broken}
          />
          <div className="p-5">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                {/* <Loading /> */} Loading ...
              </div>
            ) : (
              <Outlet />
            )}
          </div>
          <DashFooter />
        </div>
      </div>
    </div>
  );
};

export default Dash;

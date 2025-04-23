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
    <div id="wrapper" className="d-flex">
      <div className="sidebarre">
        <DashSidebar
          collapsed={collapsed}
          setBroken={setBroken}
          setToggled={setToggled}
          toggled={toggled}
          broken={broken}
        />
      </div>
      <div
        id="content-wrappers"
        className="w-100"
        style={{ height: "100dvh", overflow: "hidden" }}
      >
        <div id="contents" style={{ height: "100dvh", overflowY: "scroll" }}>
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

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaAlignLeft, FaBars } from "react-icons/fa";

const DashHeader = (props) => {
  const {
    handleToggle,
    isActive,
    setCollapsed,
    collapsed,
    broken,
    setToggled,
    toggled,
  } = props;

  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
    navigate("/");
  };

  return (
    <nav
      id="topbar"
      className="topbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4 py-2 items-center"
    >
      {broken ? (
        <>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            <FaAlignLeft />
          </button>
        </>
      ) : (
        <div
          className="sidebars-button text-dark cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <FaAlignLeft /> : <FaBars />}
        </div>
      )}

      <h2 id="nameTitle" className="text-center text-dark font-bold">
        {/* Rubel Auto */}Test
      </h2>
      <div className="account btn-circle w-12 flex justify-center items-center h-12 ">
        <Link
          to="/profile/view"
          className="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
        >
          <image href={user?.photoURL} className="mr-2" shape="circle" />
          <div className="flex flex-col align">
            <span className="font-bold">{user?.displayName}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default DashHeader;

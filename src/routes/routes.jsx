import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Dash from "../layout/Dash";
import HomePage from "../pages/root/home/HomePage";
import Blood from "../pages/root/blood/Blood";
import About from "../pages/root/blood/About";
import SignIn from "../layout/signin/SignIn";
import SignUp from "../layout/signup/SignUp";
import Profile from "../pages/dash/profile/Profile";
import ServicesDetails from "../pages/root/services/details/ServicesDetails";
import ErrorElement from "../layout/ErrorElement";
import CoomingSoon from "../components/CoomingSoon";
import DonarAdd from "../pages/dash/blood/DonarAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blood",
        element: <Blood />,
      },
      {
        path: "/uddokta",
        element: <CoomingSoon />,
      },
      {
        path: "/services/details/:id",
        element: <ServicesDetails />,
      },
      {
        path: "/doctor",
        element: <CoomingSoon />,
      },
      {
        path: "/hospital",
        element: <CoomingSoon />,
      },
      {
        path: "/diagnostic",
        element: <CoomingSoon />,
      },
      {
        path: "/fire-services",
        element: <CoomingSoon />,
      },
      {
        path: "/police-station",
        element: <CoomingSoon />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dash />,
    children: [
      {
        path: "",
        element: "Dashboard",
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "blood",
        children: [
          {
            path: "donar/add",
            element: <DonarAdd />,
          },
          {
            path: "donar/list",
            element: <CoomingSoon />,
          },
          {
            path: "request/list",
            element: <CoomingSoon />,
          },
        ],
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Dash from "../layout/Dash";
import HomePage from "../pages/root/home/HomePage";
import Blood from "../pages/root/blood/Blood";
import About from "../pages/root/blood/About";
import SignIn from "../layout/signin/SignIn";
import SignUp from "../layout/signup/SignUp";
import Profile from "../pages/dash/profile/Profile";
import QuestAns from "../pages/root/quest-ans/QuestAns";
import Answare from "../pages/root/quest-ans/Answare";
import Services from "../pages/root/services/Services";
import ServicesDetails from "../pages/root/services/details/ServicesDetails";
import Test from "../pages/test";
import ErrorElement from "../layout/ErrorElement";

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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/details/:id",
        element: <ServicesDetails />,
      },
      {
        path: "/quest-ans",
        element: <QuestAns />,
      },
      {
        path: "/answare/:id",
        element: <Answare />,
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
  {
    path: "/test",
    element: <Test />,
  },
]);
export default router;

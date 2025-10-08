import { createBrowserRouter } from "react-router";
import MainLayout from "./../Layout/MainLayout";
import Home from "../Pages/Home";
import AllApps from "./../Pages/AllApps";
import AppDetails from "./../Pages/AppDetails";
import InstallApp from "./../Pages/InstallApp";
import Error from "./../Pages/Error";
import "../../src/index.css";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "/install-apps",
        element: <InstallApp />,
      },
    ],
  },
]);

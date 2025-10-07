import { createBrowserRouter } from "react-router";
import MainLayout from "./../Layout/MainLayout";
import Home from "../Pages/Home";
import AppDetails from "./../Pages/AppDetails";
import AllApps from "./../Pages/AllApps";
import InstallApp from "./../Pages/InstallApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/app-details",
        element: <AppDetails />,
      },
      {
        path: "/install-apps",
        element: <InstallApp />,
      },
    ],
  },
]);

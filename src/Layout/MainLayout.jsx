import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import "../../src/index.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default MainLayout;

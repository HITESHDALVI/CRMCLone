import React from "react";
import "./ViewRepository.css";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { MainArea } from "./MainArea";
const ViewRepository = () => {
  return (
    <div className="view-repository">
      <NavBar />
      <div className="main-view">
        <Header />
        <MainArea />
      </div>
    </div>
  );
};

export default ViewRepository;

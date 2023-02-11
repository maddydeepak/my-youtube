import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <SideBar className="grid-cols-1" />
      <MainContainer className="grid-cols-11" />
    </div>
  );
};

export default Body;

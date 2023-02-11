import React from "react";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="flex col-span-1">
        <img
          src={menu}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          onClick={() => toggleMenuHandler()}
        />
        <img src={logo} className="h-8 mx-1" alt="logo-icon" />
      </div>
      <div className="border">
        <input type="text" className="border m-2 w-1/2" />
        <button className="bg-red-400 p-1">Search</button>
      </div>
      <div>
        <div>
          <img src={user} className="h-10" alt="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return "";
  }
  return (
    <div className="grid-cols-1 shadow-lg m-2 p-2 text-md">
      <div className="">
        <Link to="/">
          <h1 className="font-bold">Home</h1>
        </Link>
        <Link to="/">
          <h1 className="font-bold">Sports</h1>
        </Link>
        <Link to="/">
          <h1 className="font-bold">Subscriptions</h1>
        </Link>
        <div className="border m-2 w-auto border-b-gray-200" />
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Your Movies</li>
          <li>Watch Later</li>
        </ul>
      </div>
      <div className="border m-2 w-auto border-b-gray-200" />
      <div className="">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="border m-2 w-auto border-b-gray-200" />
      <div className="">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Tredning</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
          <li>Fashion & Beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

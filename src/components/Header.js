import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { cacheResults } from "../utils/searchSlice";
import search from "../assets/img/search.png";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-md w-full p-2 m-2">
      <div className="flex col-span-1">
        <img
          src={menu}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img src={logo} className="h-8 mx-2" alt="logo-icon" />
        </a>
      </div>
      <div className="col-span-10 mx-24">
        <div className="flex">
          <input
            type="text"
            className="w-2/3 h-10 p-2 border border-gray-400 text-gray-900 text-sm rounded-l-full focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-50 border border-gray-400 h-10 w-14 rounded-r-full p-2 font-bold justify-center">
            <img src={search} className="w-4 mx-2 my-1" alt="search" />
          </button>
        </div>
        <div className="bg-white px-2 w-[36rem] shadow-lg rounded-lg absolute">
          {
            <ul>
              {suggestions.map((item) => (
                <li className="p-1 py-1 hover:bg-gray-200 flex" key={item}>
                  <img src={search} className="w-4 mx-2 my-1" alt="search" />
                  {item}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
      <div className="col-span-1">
        <img src={user} className="h-10" alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;

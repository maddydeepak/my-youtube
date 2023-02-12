import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

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
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="flex col-span-1">
        <img
          src={menu}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img src={logo} className="h-8 mx-1" alt="logo-icon" />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="border m-2 w-96"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-red-400 p-1">Search</button>
        <div className="bg-white px-5 w-96 shadow-lg rounded-lg absolute">
          {
            <ul>
              {suggestions.map((item) => (
                <li className="px-1 py-2 hover:bg-gray-100" key={item}>
                  🔍{item}
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

import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache=useSelector((store)=>store.search)

   //in this format
  //searchcache={
  //    "ip":["iphone", "tpaa", ...]
  //}
  //searchQuery="ip"


  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        if(searchCache[searchQuery])
            setSuggestions(searchCache[searchQuery]);
        else
      handleSearch();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSearch = async () => {
    console.log(searchQuery+"API called");

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
 
    setSuggestions(json[1]);
    //update cache
    dispatch(cacheResults({
        [searchQuery]:json[1]
    }));
  };

  // DEBOUNCING

  // key-i
  // -render the Component
  // -useEffect()
  // -start timer=>make api calls after 200ms

  // key-ip
  // -destroye the component which returns clearTimeout
  // -re render component
  // -useEffect()
  // -start timer=>make api calls after 200ms

  // if key isnt pressed within 200
  // make api call of useeffect

  return (
    <div className="flex shadow-lg justify-between p-2">
      <div className="flex w-1/4 items-center">
        <img
          alt="menu"
          className="h-8 mx-2 cursor-pointer"
          onClick={() => handleClick()}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        ></img>
        <img
          alt="logo"
          className="h-16 mx-2 px-2 cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
        />
      </div>
      <div className=" w-1/2 mt-3">
        <div className="flex w-full items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="p-2 ml-4 w-3/4 border border-gray-400 rounded-l-full"
          ></input>
          <button className="border border-gray-400  rounded-r-full p-2 bg-gray-100">
            <img
              alt="search"
              className="h-6 "
              src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            ></img>{" "}
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white shadow-lg px-2 py-2 ml-5 mt-2  rounded-lg w-[37%]">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 hover:bg-gray-100 px-1 rounded-lg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex w-1/4 justify-end items-center">
        <img
          className="h-8 mx-5 "
          alt="user"
          src="https://icon2.cleanpng.com/20180802/szl/be6bb96ad3231c53524d66fe43fc0018.webp"
        ></img>
      </div>
    </div>
  );
};

export default Head;

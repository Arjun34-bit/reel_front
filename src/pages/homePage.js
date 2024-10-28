import "./homePage.css";

import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import ReelContainer from "../components/productHome/reelContainer";
import LikeContainer from "../components/homeContents/likeContainer";
import LikeMainContainer from "../components/homeContents/likeContainer";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      {/* <div className="p-3 flex justify-center bg-gray-200 dark:bg-gray-600 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-blue-500">Shopzy</h1>
        <div>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle" onClick={toggleDarkMode} />
            <span class="slider"></span>
          </label>
        </div>
      </div> */}
      <div>
        <NavBar />
      </div>
      <div>
        <LikeMainContainer />
      </div>
    </>
  );
};

export default HomePage;

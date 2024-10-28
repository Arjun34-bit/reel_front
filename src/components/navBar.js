import "./navbar.css";

import * as Yup from "yup";

import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

import { prodNames } from "../data/data.js";
import { hightlightText } from "../helpers/hightlightText.js";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  let links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Service",
      link: "#",
    },
    {
      name: "Reel",
      link: "/reel",
    },
    {
      name: "Help",
      link: "#",
    },
  ];

  const [formData, setFormData] = useState({
    search: "",
  });

  const [isOpen, setisOpen] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [count, setCount] = useState(5);
  const debouncedSearch = useDebounce(formData.search, 500);
  // console.log(debouncedSearch);

  const validationSchema = Yup.object({
    search: Yup.string(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const searchResult = debouncedSearch
    ? prodNames.filter((names) =>
        names.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : [];

  const handleLoad = () => {
    setCount(count + 5);
  };

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div className="shadow-md w-full">
      <div className="md:px-10 sm:hidden py-4 px-7 md:flex justify-between items-center bg-white dark:bg-gray-800 tranisition-colors duration-300">
        <div>
          <form onChange={handleChange}>
            <div className="w-2/5 md:w-full flex justify-center items-center p-1 shadow-md rounded transform tranisition duration-300 hover:transform-100">
              <input
                type="text"
                name="search"
                value={formData.search}
                // onChange={}
                placeholder="Search Product...."
                className="border-none p-1 w-full outline-none dark:bg-gray-800 dark:text-white tranisition-colors duration-300"
              />
              <MagnifyingGlassIcon className="w-7 h-7 text-center cursor-pointer dark:text-white" />
            </div>
          </form>
          {formData.search ? (
            <div className="md:w-56 w-72 h-auto bg-gray-300 dark:bg-gray-600 shadow-md absolute mt-1 rounded">
              {!searchResult ? (
                <span className="flex justify-center items-center text-black dark:text-white mt-24">
                  No Result
                </span>
              ) : (
                searchResult
                  .slice(0, count)
                  .map((s) => (
                    <span className="text-black dark:text-white block p-1 text-center text-base font-bold">
                      {hightlightText(s?.name, debouncedSearch)}
                    </span>
                  ))
              )}
              {searchResult.length > 5 ? (
                <p
                  className="mt-1 font-semibold text-center cursor-pointer dark:text-white"
                  onClick={handleLoad}
                >
                  Load More..
                </p>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Menu Icon with External css  */}
        <div onClick={() => setisOpen(!isOpen)} className="icon-class">
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex md:pl-0 md:item-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${isOpen ? "top-15" : "top-[-490px]"}`}
        >
          {links.map((link) => (
            <li
              className="font-semibold my-7 md:my-0 md:ml-8 dark:text-white cursor-pointer"
              key={link.name}
              onClick={() => handleNavigate(link.link)}
            >
              <a href={link.link} />
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

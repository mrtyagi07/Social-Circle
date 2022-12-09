import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
//import { IoIoArrowForward } from "react-icons/io";

import logo from "../assets/logo.png";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const categories = [
  { name: "Animals" },
  { name: "Wallapapers" },
  { name: "Photogaphy" },
  { name: "Gaming" },
  { name: "Coding" },
  { name: "Other" },
];

const Sidebar = ({ user, closetoggle }) => {
  const handleCloseSidebar = () => {
    if (closetoggle) closetoggle(false);
  };

  return (
    <div className="oveflow-y-scroll min-w-210 hide-scrollbar flex h-full flex-col justify-between bg-white">
      <div className="flex flex-col">
        <Link
          to="/"
          className="w-190 my-6 flex items-center gap-2 px-5 pt-1"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-24" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="tet-base mt-2 px-5 2xl:text-xl">
            Discover categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* my-5 mb-3 flex gap-2 */}
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className=" my-5 mx-3 mb-3 flex items-center gap-2 rounded-lg bg-white p-2 shadow-lg"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            className="h-10 w-10 rounded-full"
            alt="user=profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;

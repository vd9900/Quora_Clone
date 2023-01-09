import React from "react";
import { IoMdHome, IoIosArrowDown } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";
import { RxPencil2 } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
// const options = [
//     {
//         logo
//     }
// ]

const Navbar = () => {
  return (
    <div>
      <nav className=" z-40 w-full h-14 shadow-md  bg-white  fixed">
        <div className="w-3/4 mx-auto h-full flex items-center  gap-5 justify-center ">
          <div className="flex items-center  justify-between ">
            <span className="text-3xl  font-medium mr-5 text-red-700">
              Quora
            </span>
            <div className="flex md:w-full lg:gap-4 items-center justify-evenly text-gray-600">
              <span className="p-3">
                <a href="/">
                  <IoMdHome fontSize={25} />
                </a>
              </span>
              <span className="p-3">
                <RiPagesFill fontSize={25} />
              </span>
              <span className="p-3">
                <RxPencil2 fontSize={25} />
              </span>
              <span>
                <HiUserGroup fontSize={25} />
              </span>
              <span className="p-3">
                <a href="/notifications">
                  <BsBell fontSize={25} />
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5   ">
            <div className="hover:border hover:border-blue-600 text-gray-500 text-xs flex items-center justify-start border  border-gray-200 rounded-sm pl-2 h-9 md:w-60 sm:50 lg:w-72 gap-1">
              <span>
                <BiSearch fontSize={20} />
              </span>
              <input
                type="text"
                className=" bg-transparent focus:outline-none"
                placeholder="Search Quora"
              />
            </div>
            <div className="md:hidden lg:flex flex items-center justify-center rounded-full border-2 font-medium text-gray-500 text-sm cursor-pointer h-8 py-1 w-28">
              Try Quora+
            </div>
            <div className="bg-blue-600 w-8 h-8 font-medium flex items-center cursor-pointer justify-center rounded-full text-white">
              V
            </div>
            <span className="md:hidden block lg:block cursor-pointer">
              <TfiWorld fontSize={24} />
            </span>
            <div className="bg-red-700 flex p-1 cursor-pointer text-white items-center w-36 h-8 rounded-full  justify-center">
              <span className="p-1">Add question</span>
              <span className=" pt-1 h-full ">
                <IoIosArrowDown fontSize={18} />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

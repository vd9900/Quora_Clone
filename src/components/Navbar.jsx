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
      <nav className=" z-40 w-full h-14 shadow-sm  bg-white  fixed">
        <div className="w-3/4 mx-auto h-full flex items-center ">
          <div className="flex items-center justify-between bg-gray-600">
            <span>Quora</span>
            <div className="flex items-center justify-around">
              <span>
                <a href="/">
                  <IoMdHome fontSize={25} />
                </a>
              </span>
              <span>
                <RiPagesFill fontSize={25} />
              </span>
              <span>
                <RxPencil2 fontSize={25} />
              </span>
              <span>
                <HiUserGroup fontSize={25} />
              </span>
              <span>
                <a href="/notifications">
                  <BsBell fontSize={25} />
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex">
              <span>
                <BiSearch />
              </span>
              <input
                type="text"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                placeholder="Search Quora"
              />
            </div>
            <div className="text-center w-10">Try Quora+</div>
            <div className="bg-blue-600 text-white">V</div>
            <span>
              <TfiWorld />
            </span>
            <div className="bg-red-700 flex  text-white items-center w-32 h-7">
              <span>Add question</span>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

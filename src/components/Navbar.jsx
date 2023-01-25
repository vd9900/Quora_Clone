import React, { useRef, useState } from "react";
import { IoMdHome, IoIosArrowDown } from "react-icons/io";
import { RiPagesFill, RiQuestionnaireLine } from "react-icons/ri";
import { RxPencil2 } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import Addquestion from "./Addquestion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../context/filterContext/FilterContext";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const inputRefB = useRef();
  const inputRefS = useRef();

  const activeValue = useContext(FilterContext)

  function toggle() {
    setOpen(!open);
  }



  const clickedButtonBorderS = (e) => {
    for (let i = 0; i < inputRefS.current.children.length; i++) {
      inputRefS.current.children[i].classList.remove("border-b-4");
    }
    e.currentTarget.classList.add("border-b-4");
    activeValue.setsearchValue('')
    
    // console.log(inputRef.current.children[0].classList );
  };
  
  const clickedButtonBorderB = (e) => {
    for (let i = 0; i < inputRefB.current.children.length; i++) {
      inputRefB.current.children[i].classList.remove("border-b-4");
    }
    e.currentTarget.classList.add("border-b-4");
    activeValue.setsearchValue('')
    // console.log(inputRef.current.children[0].classList );
  };
  return (
    <div>
      <nav className=" z-40 w-full sm:h-14 shadow-md  bg-white  fixed">
        {/* component for big width devices (more then sm) */}
        <div className="hidden w-3/4 mx-auto h-full sm:flex items-center  gap-5 justify-center ">
          <div className="flex items-center  justify-between ">
            <span className="text-3xl  font-medium mr-5 text-red-700">
              Quora
            </span>
            <div ref={inputRefB} className="flex md:w-full lg:gap-4 items-center justify-evenly text-gray-600">
              <span onClick={clickedButtonBorderB} className="border-b-red-600 p-3">
                <Link to={"/"}>
                  <IoMdHome fontSize={25} />
                </Link>
              </span>
              <span onClick={clickedButtonBorderB} className="border-b-red-600 p-3">
                <Link to={"/following"}>
                  <RiPagesFill fontSize={25} />
                </Link>
              </span>
              <span onClick={clickedButtonBorderB} className="border-b-red-600 cursor-pointer p-3">
                <RxPencil2 fontSize={25} />
              </span>
              <span onClick={clickedButtonBorderB} className="p-3 border-b-red-600 cursor-pointer">
                <HiUserGroup fontSize={25} />
              </span>
              <span onClick={clickedButtonBorderB} className="border-b-red-600 p-3">
                <Link to={"/notifications"}>
                  <BsBell fontSize={25} />
                </Link>
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
            <div
              onClick={() => toggle()}
              className="bg-red-700 flex p-1 cursor-pointer text-xs text-white items-center w-36 h-8 rounded-full justify-evenly font-medium"
            >
              <span className="">Add question</span>
              <span className=" pt-1 h-full ">
                <IoIosArrowDown fontSize={18} />
              </span>
            </div>
          </div>
        </div>
        {/* component for small size device */}
        <div className="block sm:hidden">
          <div className="flex h-10 items-center justify-between px-4 text-white bg-red-700">
            <span className="flex items-center gap-1 cursor-pointer">
              <BiSearch fontSize={22} />
              Search
            </span>
            <span className="text-2xl p-1 cursor-pointer">Quora</span>
            <span
              onClick={() => toggle()}
              className="flex items-center gap-1 cursor-pointer"
            >
              <RiQuestionnaireLine fontSize={22} />
              Add
            </span>
          </div>
          <div className="flex h-10 text-gray-500 flex-1" ref={inputRefS}>
            <div
              onClick={clickedButtonBorderS}
              className=" grow  rounded-sm  border-b-4 border-b-red-600 flex items-center justify-center border-r border-r-gray-200"
            >
              <Link to={"/"}>
                <IoMdHome fontSize={26} />
              </Link>
            </div>
            <span
              onClick={clickedButtonBorderS}
              className=" grow  rounded-sm   border-red-700 flex items-center justify-center border-r border-r-gray-200"
            >
              <Link to={"/following"}>
                <RiPagesFill fontSize={26} />
              </Link>
            </span>
            <span
              onClick={clickedButtonBorderS}
              className="grow  rounded-sm   border-red-700 flex items-center justify-center border-r border-r-gray-200"
            >
              <RxPencil2 fontSize={26} />
            </span>
            <span
              onClick={clickedButtonBorderS}
              className="grow  rounded-sm   border-red-700 flex items-center justify-center border-r border-r-gray-200"
            >
              <HiUserGroup fontSize={26} />
            </span>
            <span
              onClick={clickedButtonBorderS}
              className="grow  rounded-sm   border-red-700 flex items-center justify-center border-r border-r-gray-200"
            >
              <Link to={"/notifications"}>
                <BsBell fontSize={26} />
              </Link>
            </span>
            <span
              onClick={clickedButtonBorderS}
              className="grow  rounded-sm   border-red-700 flex items-center justify-center border-r border-r-gray-200"
            >
              <div className="bg-blue-600 w-7 h-7 font-medium flex items-center cursor-pointer justify-center rounded-full text-white">
                V
              </div>
            </span>
            <span
              onClick={clickedButtonBorderS}
              className="grow  rounded-sm   border-red-700 flex items-center justify-center border-r border-r-gray-200"
            >
              <TfiWorld fontSize={26} />
            </span>
          </div>
        </div>
      </nav>
      {/* <Addquestion /> */}
      {open ? (
        <div className="fixed z-40 top-0 right-0 bg-black bg-opacity-50 w-screen h-screen">
          <Addquestion close={toggle} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

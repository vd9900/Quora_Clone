import React from "react";
import CreateSpace from "./CreateSpace";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BsPencilSquare, BsThreeDots } from "react-icons/bs";
import { RxPencil1 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SlShareAlt } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineCached } from "react-icons/md";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import Addquestion from "./Addquestion";

const Home = () => {
  return (
    <div className="mx-auto h-auto pt-20 lg:w-8/12 flex ">
      <div className="hidden sm:block w-44  mr-0">
        <CreateSpace />
      </div>
      {/* <Addquestion /> */}
      <div className="mx-auto sm:mx-0 lg:w-7/12 sm:px-4">
        <div className="text-gray-400 h-auto flex gap-3 p-2 px-6  flex-col items-center  border border-gray-300 sm:rounded-md">
          <div className="flex items-center justify-evenly w-full gap-4">
            <div className="w-9 h-8 cursor-pointer rounded-full flex items-center justify-center  text-white  bg-blue-700">
              V
            </div>
            <div className="cursor-pointer flex bg-gray-100  py-1   items-center px-2 border border-gray-300 rounded-full w-full lg:pr-6 ">
              What do you want to ask or share?
            </div>
          </div>
          <div className="flex text-sm w-full items-center justify-between text-gray-500">
            <span className="w-1/3  flex items-center gap-1 font-medium justify-center cursor-pointer  border-r-2  border-gray-400">
              <RiQuestionnaireLine />
              Ask
            </span>
            <span className="w-1/3  flex items-center gap-1 font-medium justify-center cursor-pointer border-r-2   border-gray-400">
              <BsPencilSquare />
              Answer
            </span>
            <span className="w-1/3  flex items-center gap-1 font-medium justify-center cursor-pointer">
              <RxPencil1 />
              Post
            </span>
          </div>
        </div>
        {/* Post section */}
        <div className="my-4 pt-2  shadow-lg border border-gray-300 rounded-md">
          <div className="flex px-4 items-center justify-between w-full py-1">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9"><img className="rounded-md" src="https://www.amazingscience.news/wp-content/uploads/2017/11/brain2.jpg" alt="" /></span>
              <div className="text-xs pb-1">
                <div className="flex gap-2">
                  <p className="font-medium hover:underline hover:underline-offset-1 cursor-pointer">
                    Memes Memers & more
                  </p>
                  <span className="text-blue-700 cursor-pointer">Follow</span>
                </div>
                <div className="flex gap-1 text-gray-500">
                  <span>Answered by Saraveran</span>
                  <span>• Dec 27</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 text-gray-500">
              <span className="cursor-pointer">
                <BsThreeDots fontSize={22} />
              </span>
              <span className="cursor-pointer">
                <IoMdClose fontSize={22} />
              </span>
            </div>
          </div>
          {/* Question */}
          <div className="py-2 px-4">
            <p className="font-bold hover:underline cursor-pointer">
              Which Pictures deserves 16284900k Views and upvotes?
            </p>
          </div>
          {/* img section */}
          <div className="">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a442db624817eb61be76531279c2f5ef-lq"
              alt=""
            />
          </div>
          {/* <div className="flex gap-1 text-gray-500">
            <span>17.7k views</span>
            <span>View 2399 upvotes</span>
            <span>View 336 share</span>
          </div> */}
          <div className="flex px-4 py-2 gap-5 items-center text-gray-500">
            <div className="flex px-3 h-7  border rounded-full  border-gray-300">
              <button className="flex border-r gap-1 border-gray-300 items-center py-1 pr-1">
                <TbArrowBigTop fontSize={18} />
                <span className="text-xs">Upvote 6.3k</span>
              </button>
              <button className="pl-1">
                <TbArrowBigDown fontSize={18} />
              </button>
            </div>
            <span className="flex gap-1 cursor-pointer items-center">
              <FaRegComment />
              <span className="text-xs">125</span>
            </span>
            <span className="flex gap-1 cursor-pointer items-center">
              <MdOutlineCached  fontSize={20}/>
              <span className="text-xs">125</span>
            </span>
            <span className="ml-auto cursor-pointer">
              <BsThreeDots fontSize={22} />
            </span>
          </div>
          {/* <div className="">
            <div className="">V</div>
            <div className="">
              <input type="text" placeholder="Add a comment..." />
            </div>
            <button className="cursor-pointer text-white bg-blue-700">
              Add comment
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

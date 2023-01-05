import React from "react";
import CreateSpace from "./CreateSpace";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BsPencilSquare, BsThreeDots } from "react-icons/bs";
import { RxPencil1 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SlShareAlt } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import Addquestion from "./Addquestion";

const Home = () => {
  return (
    <div className="mx-auto h-screen pt-16  w-3/4 flex ">
      <CreateSpace />
      <Addquestion />
      <div className="w-3/4 ">
        <div className="flex flex-col items-center">
          <div className="flex">
            <span className="bg-blue-700">V</span>
            <div className="flex items-center justify-center border-0 ">
              What do you want to ask or share
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center justify-center">
              <RiQuestionnaireLine />
              Ask
            </span>
            <span className="flex items-center justify-center">
              <BsPencilSquare />
              Answer
            </span>
            <span className="flex items-center justify-center">
              <RxPencil1 />
              Post
            </span>
          </div>
        </div>
        {/* Post section */}
        <div className="my-4">
          <div className="">
            <span className="bg-blue-700">logo</span>
            <div className="">
              <div className="">
                <p>Memes Memers & more</p>
                <span className="text-blue-700">Follow</span>
              </div>
              <div className="flex gap-1 text-gray-500">
                <span>Answered by Sarveran</span>
                <span>Dec 27</span>
              </div>
            </div>
            <div className="text-gray-500">
              <span>
                <BsThreeDots fontSize={22} />
              </span>
              <span>
                <IoMdClose fontSize={22} />
              </span>
            </div>
          </div>
          {/* Question */}
          <div className="">
            <p className="bold">
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
          <div className="flex gap-1 text-gray-500">
            <span>17.7k views</span>
            <span>View 2399 upvotes</span>
            <span>View 336 share</span>
          </div>
          <div className="flex">
            <div className="flex">
              <button>
                <TbArrowBigTop />
                Upvote 2399
              </button>
              <button>
                <TbArrowBigDown />
              </button>
            </div>
            <span>
              <FaRegComment />
            </span>
            <span>
              <SlShareAlt /> 336
            </span>
          </div>
          <div className="">
            <div className="">V</div>
            <div className="">
              <input type="text" placeholder="Add a comment..." />
            </div>
            <button className="cursor-pointer text-white bg-blue-700">
              Add comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { MdPlayArrow } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { FaImages } from "react-icons/fa";

const Addquestion = (props) => {
  const toggle = props.close;
  const [addBorderToBottom, setaddBorderToBottom] = useState(false);
  return (
    <div className="flex flex-col pt-4  bg-white bg-opacity-100 absolute  rounded-md w-11/12 h-4/6  md:w-6/12 md:h-5/6  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="px-4 flex justify-start">
        <span
          onClick={() => toggle()}
          className="cursor-pointer text-gray-500 font-sm"
        >
          <IoMdClose className={""} fontSize={25} />
        </span>
      </div>
      <div className="flex justify-between items-center px-1">
        <div
          onClick={() => setaddBorderToBottom(false)}
          className={`${
            !addBorderToBottom ? "border-b-4 border-blue-500" : ""
          } cursor-pointer p-4    font-semibold  w-full h-10 flex items-center justify-center`}
        >
          Add question
        </div>
        <div
          onClick={() => setaddBorderToBottom(true)}
          className={`${
            addBorderToBottom ? "border-b-4 border-blue-500" : ""
          } cursor-pointer p-4    font-semibold  w-full h-10 flex items-center justify-center`}
        >
          Create post
        </div>
      </div>
      {/* Add question components */}
      <div className={`${!addBorderToBottom ? "flex":"hidden"}  flex-col h-full`}>
        <div className="p-4">
          <div className="bg-blue-100 p-4 text-blue-600">
            <p className="font-bold">Tip on getting good answers quickly</p>
            <ul className="text-sm list-disc list-inside">
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
        </div>
        <div className="flex px-4 items-center">
          <span className="bg-blue-700 h-5 w-5 rounded-full text-xs flex text-white items-center justify-center">
            V
          </span>
          <div className="flex gap-1 items-center p-1 text-gray-500">
            <MdPlayArrow />
            <span className="w-20 flex border border-gray-300 rounded-full text-sm font-semibold items-center p-1 gap-1">
              <RiGroupLine />
              <span>
                <select className="outline-none">
                  <option className="option">Public</option>
                  <option className="option">Friends</option>
                </select>
              </span>
            </span>
          </div>
        </div>
        <div className="px-4  w-full h-auto text-gray-500 text-lg">
          <div className="py-2 hover:border-b border-blue-600">
            <input
              type="text"
              className="w-full outline-none"
              placeholder={`Start your question with "What", "How", "Why", etc.`}
            />
          </div>
        </div>
        <div className="flex px-4 items-center justify-end gap-3 h-16 border-t border-gray-300 mt-auto ">
          <span className="text-gray-500 font-medium cursor-pointer">
            Cancel
          </span>
          <div className="w-32  h-10 rounded-full flex items-center justify-center  py-4 px-3  bg-blue-700 text-white cursor-pointer">
            Add question
          </div>
        </div>
      </div>
      {/* Create post component */}
      <div className={`${addBorderToBottom ? "flex":"hidden"}  flex-col h-full`}>
        <div className="p-4 flex w-full  gap-2 items-center">
          <div className="w-10 h-10 text-2xl font-medium rounded-full bg-blue-500 text-white flex items-center justify-center">
            V
          </div>
          <div className="flex flex-col gap-1 items-center justify-start ">
            <span className="font-semibold mr-auto text-xs ">VIN</span>
            <div
              className="w-36 h-7 rounded-full text-xs px-3
             text-gray-500 border border-gray-300 flex font-medium items-center"
            >
              Choose credential <BiChevronRight fontSize={20} />
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <input
            type="text"
            className="outline-none text-gray-500 "
            placeholder="Say something..."
          />
        </div>
        <div className="border-t border-gray-300 h-14 w-full mt-auto flex items-center justify-between px-4">
          <div className="text-gray-500 flex items-center gap-2">
            <span className="flex items-center justify-center  p-1 hover:border border-blue-600 cursor-pointer rounded-sm w-8 h-8 font-medium ">Aa</span>
            <span className="flex items-center justify-center p-1 hover:border border-blue-600 cursor-pointer rounded-sm w-8 h-8 font-medium ">
              <FaImages />
            </span>
          </div>
          <div className="w-16 cursor-pointer text-white bg-blue-600 rounded-full px-2 py-2 flex items-center justify-center">
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addquestion;

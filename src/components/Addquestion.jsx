import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { MdPlayArrow } from "react-icons/md";

const Addquestion = (props) => {
  const toggle = props.close;
  // const [Close, setClose] = useState(false);
  return (
    <div className="py-4  bg-white bg-opacity-100 absolute  rounded-md w-6/12 h-3/4  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="px-4 flex justify-start">
        <span
          onClick={() => toggle()}
          className="cursor-pointer text-gray-500 font-sm"
        >
          <IoMdClose fontSize={25} />
        </span>
      </div>
      <div className="flex justify-between items-center px-1">
        <div className="p-4  border-b-4 border-blue-500  font-semibold  w-full flex items-center justify-center">
          Add question
        </div>
        <div className="p-4  font-semibold  w-full flex items-center justify-center">
          Create post
        </div>
      </div>
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
    </div>
  );
};

export default Addquestion;

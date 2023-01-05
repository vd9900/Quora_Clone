import React from "react";
import { IoMdClose } from "react-icons/io";

const Addquestion = () => {
  return (
    <div className="fixed z-40 top-0 right-0 bg-black bg-opacity-50 w-screen h-screen">
      <div className="p-3   bg-white bg-opacity-100 absolute  w-10/12 md:w-8/12 lg:w-7/12 h-3/5 sm:h-4/6  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="flex justify-end">
          <span className="cursor-pointer hover:text-red-700">
            <IoMdClose fontSize={28} />
          </span>
        </div>
        <div className="flex justify-between items-center">
            <div className="p-4 text-3xl font-semibold  w-full flex items-center justify-center">Add question</div>
            <div className="p-4 text-3xl font-semibold  w-full flex items-center justify-center">Create question</div>
        </div>
      </div>
    </div>
  );
};

export default Addquestion;

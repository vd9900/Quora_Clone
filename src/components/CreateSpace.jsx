import React from "react";
import Spaces from "../json/Createspace.json";

import { AiOutlinePlus } from "react-icons/ai";

const CreateSpace = () => {
  return (
    <div className=" w-44 p-4 mr-8">
      <div className="fixed">
        <div className="flex items-center gap-1 p-1 justify-center text-gray-600 bg-gray-200">
          <AiOutlinePlus />
          Create Space
        </div>
        <ul>
          {Spaces.map((space, index) => {
            return (
              <li
                className="flex gap-1 px-5 my-3 text-gray-600 items-center "
                key={space.id}
              >
                <span>
                  <img className="w-7" src={space.image} alt="" />
                </span>
                <p>{space.spaceName}</p>
              </li>
            );
          })}
        </ul>
        <div className="">
          <span></span>
          Discover Spaces
        </div>
      </div>
    </div>
  );
};

export default CreateSpace;

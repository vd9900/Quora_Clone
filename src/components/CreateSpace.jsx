import React from "react";
import Spaces from "../json/Createspace.json";

import { AiOutlinePlus, AiOutlineCompass } from "react-icons/ai";
import { useContext } from "react";
import { FilterContext } from "../context/filterContext/FilterContext";

const CreateSpace = () => {
  const value = useContext(FilterContext)
  const getData = (e)=>{
    value.setsearchValue(e.currentTarget.children[1].innerText)
  }
  return (
    <div className="fixed w-40">
      <div className="flex items-center gap-1 px-4 py-2 justify-start text-gray-600 bg-gray-100 text-sm rounded-sm cursor-pointer hover:bg-gray-200">
        <AiOutlinePlus />
          Create Space
      </div>
      <ul>
        {Spaces.map((space, index) => {
          return (
            <li
            onClick={getData}
              className="hover:bg-gray-100 cursor-pointer text-xs flex gap-1 px-4 py-2 my-3 rounded-sm text-gray-600 items-center "
              key={space.id}
            >
              <span>
                <img className="w-6 rounded-sm" src={space.image} alt="" />
              </span>
              <p>{space.spaceName}</p>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center text-gray-500 text-xs gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100">
        <span>
          <AiOutlineCompass />{" "}
        </span>
        Discover Spaces
      </div>
    </div>
  );
};

export default CreateSpace;

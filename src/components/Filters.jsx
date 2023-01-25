import React, { useContext, useRef } from "react";
import classNames from 'classnames';
import notifications from "../json/notifications.json";
import { FilterContext } from "../context/filterContext/FilterContext";

const Filter = () => {
  const inputRef = useRef();

  const value = useContext(FilterContext)

  const addBorderToCo = (e) => {
    for (let i = 0; i < inputRef.current.children.length; i++) {
      inputRef.current.children[i].classList.remove('border-r-4', "bg-red-50")
      // inputRef.current.children[i].classList.remove("bg-red-50 ")
    }
    e.currentTarget.classList.add('border-r-4', 'bg-red-50')
    value.setsearchValue(e.currentTarget.innerText)
    console.log(e.currentTarget.innerText)

  };
  return (
    <div className="px-4">
      <div className="border-b border-gray-300 px-3 py-2 font-medium">
        Filters
      </div>
      <ul ref={inputRef}>
        {notifications.map((noti) => {
          return (
            <li
              key={noti.id}
              onClick={addBorderToCo}
              className="border-r-red-600 text-xs text-gray-500 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              {noti.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;

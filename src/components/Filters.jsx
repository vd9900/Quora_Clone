import React from "react";
import notifications from "../json/notifications.json";

const Filter = () => {
  return (
    <div className="w-48 px-4">
      <div className="border-b border-gray-300 px-3 py-2 font-medium">Filters</div>
      <ul>
        {notifications.map((noti) => {
          return <li key={noti.id} className="text-xs text-gray-500 px-3 py-2 cursor-pointer hover:bg-gray-100" >
            {noti.type}
            </li>;
        })}
      </ul>
    </div>
  );
};

export default Filter;

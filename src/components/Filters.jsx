import React from "react";
import notifications from "../json/notifications.json";

const Filter = () => {
  return (
    <div className="w-40 bg-blue-400">
      <span className="">Filters</span>
      <ul>
        {notifications.map((noti) => {
          return <li key={noti.id}>
            {noti.type}
            </li>;
        })}
      </ul>
    </div>
  );
};

export default Filter;

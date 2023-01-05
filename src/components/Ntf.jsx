import React from "react";
import Filter from "./Filters";
// import { IoNotificationsOffCircleSharp } from "react-icons/io";

const Notification = () => {
  return (
    <div className="pt-20 mx-auto   w-3/4">
      <div className="flex">
        <Filter />
        <div className="">
          <div className="flex">
            <span>Comments and mentions</span>
            <span>Settings</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>{/* <IoNotificationsOffCircleSharp /> */}</span>
            <span>No New Notifications</span>
            <span>
              Notifications you recevied in the last 30 days will show up here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

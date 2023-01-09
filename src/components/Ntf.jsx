import React from "react";
import Filter from "./Filters";
import { BsFillBellSlashFill } from "react-icons/bs";

const Notification = () => {
  return (
    <div className="pt-20 mx-auto   w-3/4">
      <div className="flex">
        <Filter />
        <div className="w-6/12 md:mt-2">
          <div className="flex  justify-between items-center border-b pb-2 border-gray-300">
            <span className="font-medium">Notifications</span>
            <div className="flex text-xs text-gray-500 gap-2">
              <span className="hover:underline cursor-pointer">
                Mark All As Read
              </span>
              <span className="hover:underline cursor-pointer">Settings</span>
            </div>
          </div>
          {/* no message component */}
          <div className="flex flex-col text-gray-500 h-full items-center justify-center">
            <span>
              <BsFillBellSlashFill fontSize={60} />
            </span>
            <span className="font-bold">No New Notifications</span>
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

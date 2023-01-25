import React from "react";
import Filter from "./Filters";
import notifications from '../json/notifications.json'
import { BsFillBellSlashFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineGroupOff } from "react-icons/md";
import { useContext } from "react";
import { FilterContext } from "../context/filterContext/FilterContext";


const Notification = () => {
  const value = useContext(FilterContext)
  return (
    <div className="pt-20 mx-auto  md:w-3/4">
      <div className="flex">
        <div className="w-48 hidden md:block">
          <Filter />
        </div>
        <div className=" max-md:mx-auto w-full md:w-9/12 lg:w-6/12 md:mt-2">
          <div className="flex  justify-between items-center border-b pb-2 border-gray-300 max-md:px-3">
            <span className="font-medium">Notifications</span>
            <div className="flex text-xs text-gray-500 gap-2">
              <span className="hover:underline cursor-pointer">
                Mark All As Read
              </span>
              <span className="hover:underline cursor-pointer">Settings</span>
            </div>
          </div>

          {/* no message component */}
          <div className="hidden px-3 flex flex-col text-gray-500 h-full items-center justify-center">
            <span>
              <BsFillBellSlashFill fontSize={60} />
            </span>
            <span className="font-bold">No New Notifications</span>
            <span>
              Notifications you recevied in the last 30 days will show up here
            </span>
          </div>

          {/* Question components */}
          {notifications.filter((notification) => {
            return notification.type.includes(value.searchValue)
          }).map(notification => {
            return (
              <>
                {notification.title === 'no' ? (
                  <div className="px-3 flex flex-col text-gray-500 h-full items-center justify-center">
                    <span>
                      <BsFillBellSlashFill fontSize={60} />
                    </span>
                    <span className="font-bold">No New Notifications</span>
                    <span>
                      Notifications you recevied in the last 30 days will show up here
                    </span>
                  </div>
                ) : (<div key={notification.notificationId} className=" p-3 cursor-pointer bg-gray-200 flex gap-3">
                  <span className="w-12 h-12 cover-fit">
                    <img
                      className="rounded-md"
                      src={notification.profile}
                      alt=""
                    />
                  </span>
                  <div className="w-full text-sm">
                    <div className="flex text-xs text-gray-500 gap-1 item-center">
                      {notification.name} <span>{notification.date}</span>
                      <span className="ml-auto cursor-pointer">
                        <BsThreeDots fontSize={22} />
                      </span>
                    </div>
                    <div className="font-bold">{notification.title}</div>
                    <div>{notification.body}</div>
                  </div>
                </div>
                )
                }
              </>
            )
          })

          }

          {/* Question & Answer components */}
          <div className="hidden p-3 cursor-pointer bg-gray-200 flex gap-3">
            <span className="w-12 h-12 cover-fit">
              <img
                className="rounded-md"
                src="https://images.indianexpress.com/2020/10/148841-clraytzonv-1602133322.jpg"
                alt=""
              />
            </span>
            <div className="w-full">
              <div className="flex text-xs text-gray-500 gap-1 item-center">
                All about CAT Posted in a Spaces you might like{" "}
                <span>• December 30</span>
                <span className="ml-auto cursor-pointer">
                  <BsThreeDots fontSize={22} />
                </span>
              </div>
              <div className="font-bold">
                Will you be getting a call from IIFT this year?
              </div>
              <div className="text-sm text-gray-500 ">
                Hello Folks , Do join/ Follow our LinkedIn page to get more
                updates regarding job openings. https://www.linkedin.co...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Notification;

import React from "react";
import CreateSpace from './CreateSpace'
import {MdOutlineGroupOff} from 'react-icons/md'

const Following = () => {
  return (
    <div className="py-20  h-screen md:w-3/4 mx-auto flex">
      <div className="hidden sm:block w-44  mr-0">
        <CreateSpace />
      </div>
      {/* no following component */}
      <div className="md:w-7/12 w-full max-md:mx-auto h-full flex flex-col text-gray-500 items-center justify-center">
        <span>
          <MdOutlineGroupOff fontSize={60} />
        </span>
        <span className="font-bold">Build your new following feed</span>
        <span>
          Follow some Spaces to start discovering stories in your feed.
        </span>
      </div>
    </div>
  );
};

export default Following;

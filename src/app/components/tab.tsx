import React from "react";

const Tab = () => {
  return (
    <nav className="my-1 ">
      <div className="container mx-auto  justify-between text-center  ">
        <div className="grid grid-cols-7 gap-1">
          <div className="bg-black p-3"></div>
          <div className="bg-black p-3"></div>
          <div className="bg-black col-span-3 p-3 flex flex-row justify-evenly  ">
            <a href="" className="hover:bg-yellow-200 hover:rounded duration-150 ease-linear">
              <div className=" text-yellow-300 hover:text-black border border-yellow-500 rounded flex items-center justify-center w-24 h-12">
                Manual
              </div>
            </a>
            <a href="" className="hover:bg-yellow-200 hover:rounded duration-150 ease-linear">
              <div className="text-yellow-300  hover:text-black border border-yellow-500 rounded flex items-center justify-center w-24 h-12">
                BITE
              </div>
            </a>
            <a href="" className="hover:bg-yellow-200 hover:rounded duration-150 ease-linear">
              {" "}
              <div className="text-yellow-300  hover:text-black border border-yellow-500 rounded flex items-center justify-center w-24 h-12">
                Standby
              </div>
            </a>
            <a href="" className="hover:bg-yellow-200 hover:rounded duration-150 ease-linear">
              {" "}
              <div className="text-yellow-300  hover:text-black border border-yellow-500 rounded flex items-center justify-center w-24 h-12">
                Intercept
              </div>
            </a>
            <a href="" className="hover:bg-yellow-200 hover:rounded duration-150 ease-linear">
              <div className="text-yellow-300  hover:text-black border border-yellow-500 rounded flex items-center justify-center w-24 h-12">
                Targeting
              </div>
            </a>
            <a href="" className="hover:bg-yellow-200 hover:rounded duration-150 ease-linear">
              <div className="text-yellow-300  hover:text-black border border-yellow-500 rounded flex items-center justify-center w-24 h-12">
                Jamming
              </div>
            </a>
          </div>
          <div className="bg-black p-3"></div>
          <div className="bg-black p-3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Tab;

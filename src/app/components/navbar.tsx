import React from "react";

const Navbar = () => {
  return (
    <nav className="my-1">
      <div className="container mx-auto  justify-evenly text-center items-center ">
        <div className="grid grid-cols-8 gap-1">
          <div className="bg-black hover:bg-gray-800  p-4">
            <a href="#" className="text-red-500 text-2xl font-bold">
              FFFF
            </a>
          </div>
          <a
            href="#"
            className="bg-black  hover:bg-gray-800  p-4 rounded flex flex-row justify-center items-center "
          >
            <img src="/assests/folder.png" className="w-6 h-6" alt="" />
            <div className="text-white pl-1">File</div>
          </a>
          <a
            href="#"
            className="bg-black  hover:bg-gray-800  p-4 flex flex-row justify-center items-center"
          >
            <img
              src="/assests/local-area-network.png"
              className="w-6 h-6"
              alt=""
            />
            <div className="text-white pl-1">Connection</div>
          </a>
          <a
            href="#"
            className="bg-black hover:bg-gray-800   p-4 flex flex-row justify-center items-center"
          >
            <img
              src="/assests/control_5294238.png"
              className="w-6 h-6"
              alt=""
            />
            <div className="text-white pl-1">Control Unit</div>
          </a>
          <a
            href="#"
            className="bg-black hover:bg-gray-800   p-4 flex flex-row justify-center items-center"
          >
            <img src="/assests/gear.png" className="w-6 h-6" alt="" />
            <div className="text-white pl-1">Setting</div>
          </a>
          <a
            href="#"
            className="bg-black hover:bg-gray-800   p-4 flex flex-row justify-center items-center"
          >
            <img src="/assests/placeholder.png" className="w-6 h-6" alt="" />
            <div className="text-white pl-1">Map</div>
          </a>
          <a
            href="#"
            className="bg-black hover:bg-gray-800   p-4 flex flex-row justify-center items-center"
          >
            <img src="/assests/question.png" className="w-6 h-6" alt="" />
            <div className="text-white pl-1">Help</div>
          </a>
          <div className="bg-black hover:bg-gray-800   p-4">
            <a
              href="#"
              className="text-white font-bold bg-red-500 hover:bg-red-700 duration-100 ease-linear p-2 rounded-md"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

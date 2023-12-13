import React from "react";
import CollapseComponent from "./collapse";

const Targeting = () => {
  const content = (
    <>
      <div className="grid grid-cols-6 gap-3 my-2">
        <p className="font-bold ">AD :</p> <span className="text-red-600 font-bold">0</span>
        <p className="font-bold">ED :</p> <span className="text-red-600 font-bold">0</span>
        <p className="font-bold">B :</p> <span className="text-red-600 font-bold">0</span>
        
      </div>
      <div className="flex flex-row text-black">
        <p className="font-bold">please select B</p>
        <button
          className="mx-2  bg-[#575506] hover:bg-[#575606db] text-white font-bold px-5 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Start
        </button>
      </div>
    </>
  );
  return (
    <CollapseComponent title="Targeting" content={content}></CollapseComponent>
  );
};

export default Targeting;

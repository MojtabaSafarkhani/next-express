import React from "react";
import CollapseComponent from "./collapse";

const Standby = () => {
  const form = (
    <form>
      <div className=" flex flex-row items-center mb-1">
        <label className="block text-gray-700 text-sm font-bold mr-1 ">
          Center:
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-1"
          type="text"
        />
      </div>
    </form>
  );
  return <CollapseComponent title="Standby" content={form}></CollapseComponent>;
};

export default Standby;

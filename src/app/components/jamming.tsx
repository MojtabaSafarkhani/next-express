import React from "react";
import CollapseComponent from "./collapse";
import BaseExpand from "./BaseExpand";
import PowerButtons from "./PowerButtons";

const Jamming = () => {
  const SelectBForm = (
    <form action="" className=" text-white text-center">
      <div className="flex flex-row mb-1 items-center border-b border-b-2 border-[#089800]">
        <label className="block text-sm font-bold m-2">B:</label>
        <select className="block appearance-none w-1/2 mb-2  border p-1 border-gray-400 rounded leading-tight focus:outline-none ">
          <option>B1</option>
          <option>B2</option>
          <option>B3</option>
        </select>
      </div>
      <div className=" flex flex-row items-center mb-2 border-b border-b-2 border-[#089800]">
        <label className="block text-sm font-bold mr-1 ">Center:</label>
        <input
          className="shadow appearance-none my-2 border rounded w-1/4 py-1 px-1  leading-tight focus:outline-none focus:shadow-outline mr-1"
          type="text"
        />
      </div>
      <div className=" flex flex-row items-center mb-2 border-b border-b-2 border-[#089800]">
        <label className="block text-sm font-bold mr-1 my-2 ">ERIP : 0</label>
      </div>
    </form>
  );

  const items = (
    <>
      <BaseExpand title="Select B" content={SelectBForm}></BaseExpand>
      <BaseExpand
        title="Power Display"
        content={<PowerButtons></PowerButtons>}
      ></BaseExpand>
    </>
  );
  return (
    <CollapseComponent title="Jamming" content={items}></CollapseComponent>
  );
};

export default Jamming;

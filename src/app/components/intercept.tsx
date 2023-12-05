import React from "react";
import CollapseComponent from "./collapse";

const Intercept = () => {
  const form = (
    <form className="w-full max-w-md mx-auto">
      <div className="flex flex-row border-b border-b-4 border-green-500 mb-1">
        <div className=" flex flex-row items-center mb-1">
          <label className="block text-gray-700 text-sm font-bold mr-1 ">
            Sector:
          </label>

          <input
            type="radio"
            className="form-radio mr-1"
            name="sector"
            value="Sector"
          />
        </div>
        <div className=" flex flex-row items-center mb-1">
          <label className="block text-gray-700 text-sm font-bold mr-1 ">
            Center:
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-1"
            type="text"
          />
        </div>
        <div className=" flex flex-row items-center mb-1 ">
          <label className="block text-gray-700 text-sm font-bold mr-1">
            Span:
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-1"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-row border-b border-b-4 border-green-500 mb-1">
        <div className=" flex flex-row items-center mb-1">
          <label className="block text-gray-700 text-sm font-bold mr-1 ">
            Fix:
          </label>

          <input
            type="radio"
            className="form-radio mr-3"
            name="sector"
            value="Fix"
          />
        </div>
        <div className=" flex flex-row items-center mb-1">
          <label className="block text-gray-700 text-sm font-bold mr-1 ">
            Center:
          </label>
          <input
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-1"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-row border-b border-b-4 border-green-500 mb-1">
        <div className=" flex flex-row items-center mb-1">
          <label className="block text-gray-700 text-sm font-bold mr-1 ">
            Speed:
          </label>
          <input
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-1"
            type="text"
          />
          <span className="font-bold mr-3">/ Sec</span>
          <div className="">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Start
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-b-4 border-green-500 mb-1">
        <label className="inline-flex items-center">
          <span className="mr-2">Auto select B</span>
          <input type="checkbox" className="form-checkbox" />
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline m-2"
          type="text"
        />
        <span className="font-bold">ms</span>
      </div>
      <div className="flex flex-row border-b border-b-4 border-green-500 mb-1 items-center">
        <label className="block text-gray-700 text-sm font-bold m-2">
          B:
        </label>
        <select className="block appearance-none w-1/2  border p-1 border-gray-400 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>B1</option>
          <option>B2</option>
          <option>B3</option>
        </select>
      </div>
    </form>
  );
  return (
    <CollapseComponent title="Intercept" content={form}></CollapseComponent>
  );
};

export default Intercept;

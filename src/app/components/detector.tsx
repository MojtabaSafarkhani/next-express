import React from "react";
import CollapseComponent from "./collapse";

const Detector = () => {
  const table = (
    <table className=" table table-xs border-collapse border border-black table-fixed">
      <thead className="w-full">
        <tr className="font-bold text-black text-center ">
          <th className="Iborder-black w-11 p-1 ">Detectionn</th>
          <th className="Iborder-black w-6 p-1">COG</th>
          <th className="Iborder-black w-10 p-1">AMP</th>
          <th className="Iborder-black w-6 p-1">Beam</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="text-center">
          <td className=""></td>
          <td className="Iborder-black-bold text-black">0.8'</td>
          <td className="Iborder-black-bold text-black">-93.5 db</td>
          <td className="Iborder-black-bold text-black">2</td>
        </tr>
        <tr className="text-center">
          <td className="text-red-700 items-center font-bold">
            <input type="checkbox" className="align-middle" />{" "}
            <span className="align-middle">Target</span>
          </td>
          <td className="Iborder-black-bold text-red-700">0.0'</td>
          <td className="Iborder-black-bold text-red-700">-300 db</td>
          <td className="Iborder-black-bold text-red-700">0</td>
        </tr>
      </tbody>
    </table>
  );
  return (
    <CollapseComponent title="detector" content={table}></CollapseComponent>
  );
};

export default Detector;

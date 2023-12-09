import React from "react";

const PowerButtons = () => {
  const buttons = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <>
      <div className="grid grid-cols-4 gap-1">
        {buttons.map((button) => (
          <button
            key={button}
            className="bg-[#343c22] text-white font-bold py-2 px-4 rounded"
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1 my-1">
        <button className="bg-[#d6a327] col-span-2 text-white  py-2 px-4 rounded">Turn On All</button>
        <button className="bg-[#d6a327] col-span-2 text-white  py-2 px-4 rounded">Turn Off All</button>
      </div>
    </>
  );
};

export default PowerButtons;

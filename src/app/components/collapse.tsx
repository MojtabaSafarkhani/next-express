import React, { ReactNode, useState } from "react";

interface Props {
  title: string;
  content: ReactNode;
}

const CollapseComponent = ({ title, content }: Props) => {
  const [isClose, setIsClose] = useState(true);
  const toggle = (title: string) => {
    setIsClose(!isClose);
    // TODO: send request for backend toggle
    console.log("isClose", title, !isClose);
  };
  return (
    <main className="flex flex-row p-1">
      <div className="collapse collapse-arrow bg-[#c1c01b] text-black hover:bg-[#c1c11bc5] ">
        <input type="checkbox" onClick={() => toggle(title)} />
        <div className="collapse-title text-xs font-bold">{title}</div>
        <div className="collapse-content">{content}</div>
      </div>
    </main>
  );
};

export default CollapseComponent;

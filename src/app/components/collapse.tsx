import React, { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode;
}

const CollapseComponent = ({ title, content }: Props) => {
  return (
    <main className="flex flex-row p-1">
      <div className="collapse collapse-arrow bg-yellow-200 text-black hover:bg-yellow-300 custom-size">
        <input type="checkbox" />
        <div className="collapse-title text-xs font-bold">{title}</div>
        <div className="collapse-content">{content}</div>
      </div>
    </main>
  );
};

export default CollapseComponent;
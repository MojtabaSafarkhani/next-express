import React, { ReactNode } from "react";

interface ExpandProps {
  title: string;
  content: ReactNode;
}

const BaseExpand = ({ title, content }: ExpandProps) => {
  return (
    <div className="collapse  bg-[#575506] mb-1 py-0 text-white">
      <input type="checkbox" />
      <div className="collapse-title text-center text-base ">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
};

export default BaseExpand;

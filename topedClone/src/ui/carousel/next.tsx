import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="text-2xl active:scale-95 bg-white rounded-full shadow-md p-3 cursor-pointer top-2/4 absolute -right-6 -translate-y-2/4 text-gray-600 duration-300 hover:scale-110"
      style={{ ...style }}
    >
      <AiOutlineRight />
    </div>
  );
};

export default Next;

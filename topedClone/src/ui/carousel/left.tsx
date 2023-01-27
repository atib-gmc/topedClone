import React from "react";
import "./style.css";
import { AiOutlineLeft } from "react-icons/ai";

const Left = (props) => {
  const { style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ ...style, overflow: "visible" }}
      className="left text-2xl active:scale-95 bg-white rounded-full shadow-md p-3 z-10 cursor-pointer top-2/4 absolute -left-6 -translate-y-2/4 text-gray-600 duration-300 hover:scale-110"
    >
      <AiOutlineLeft />
    </div>
  );
};

export default Left;

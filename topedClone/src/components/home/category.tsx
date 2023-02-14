import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

import { MdPets } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { RiFilePaper2Line, RiFlightTakeoffFill } from "react-icons/ri";

const Category = () => {
  return (
    <div className="card-wrapper flex gap-3 w-full mt-4 ">
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <BiCategory />
        <span className="text-gray-500">Kategori</span>
      </div>
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <ImMobile />
        <span className="text-gray-500">Handphone & tablet</span>
      </div>
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <RiFilePaper2Line />
        <span className="text-gray-500">Top Up & Tagihan </span>
      </div>
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <RiFlightTakeoffFill />
        <span className="text-gray-500">Travel & Entertaiment</span>
      </div>
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <MdPets />
        <span className="text-gray-500">Perawatan Hewan</span>
      </div>
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <FaMoneyCheck />
        <span className="text-gray-500">Keuangan</span>
      </div>
      <div className="card   flex items-center p-2 rounded-full gap-2 border-[1px]">
        <GrPersonalComputer />
        <span className="text-gray-500">Komputer & Laptop</span>
      </div>
    </div>
  );
};

export default Category;

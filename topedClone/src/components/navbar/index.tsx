import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="fixed flex bg-white w-full py-2 px-10 gap-4 top-0">
      <div className="logo self-start flex-1 flex items-center gap-4 text-main text-3xl font-semibold ">
        <div className="logo">tokoPaedi</div>
        <span className="text-gray-400 text-sm font-semibold ">kategori</span>
      </div>
      <div className="righ w-full flex flex-col gap-2">
        <div className="w-full top flex">
          <div className="center flex gap-5 items-center basis-[560px]">
            <label
              htmlFor=""
              className="bg-[#F3F4F5] group overflow-hidden focus-within:border-main w-full border-[1px]   flex-2 rounded-md flex"
            >
              <input
                type="text"
                placeholder="cari di tokopedia"
                className=" p-4 border-none w-full placeholder:font-sm placeholder:text-sm h-4 group outline-none ring-main"
              />
              <span className="text-2xl duration-300 hover:bg-gray-300 px-2 cursor-pointer bg-gray-200 grid place-items-center  text-gray-400 ">
                <AiOutlineSearch />
              </span>
            </label>
          </div>
          <div className="ctas divide-x-2 flex items-center flex-1">
            <div className="cart px-5 text-gray-600">
              <FaShoppingCart />
            </div>
            <div className="buttons [&>*]:p-[4px] font-bold text-sm [&>*]:px-4 flex gap-3 justify-around px-3">
              <button className="btn rounded-md   border-main border-[1px]  text-main">
                Masuk
              </button>
              <button className="btn rounded-md  bg-main text-white">
                Daftar
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  flex">
          <div className="top-search max-w-2.4 text-sm text-gray-500">
            <ul className="flex capitalize gap-2 text-ellipsis  [&>*]:whitespace-nowrap [&>*]:overflow-hidden">
              <li className="w-16 text-ellipsis ">racun tikus</li>
              <li className="w-16 text-ellipsis ">sepatu sandal</li>
              <li className="w-16 text-ellipsis ">celana jeans</li>
              <li className="w-16 text-ellipsis ">printer epson</li>
              <li className="w-16 text-ellipsis ">samsung galaxy</li>
              <li className="w-16 text-ellipsis ">xiaomi 12 pro max</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

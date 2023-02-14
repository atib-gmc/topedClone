import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="fixed z-20 flex bg-white w-full py-2 px-10 gap-4 top-0 shadow-md ">
      <div className="logo self-start flex-1 flex items-center gap-4 text-main text-3xl font-semibold ">
        <div className="logo text-main">tokoPaedi</div>
        <span className="text-gray-400 text-sm font-semibold ">kategori</span>
      </div>
      <div className="righ w-full flex flex-col gap-2">
        <div className="w-full top flex">
          <div className="center flex gap-5 items-center w-full">
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
            <div className="cart px-5 text-gray-600 ">
              <button className="btn p-2 hover:bg-gray-300 duration-300 rounded-md">
                <FaShoppingCart />
              </button>
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
        <div className="w-full  flex ">
          <div className="top-search max-w-2.4 text-sm text-gray-500">
            <ul className="flex capitalize xl:gap-5 gap-3  xl:text-clip  [&>*]:duration-300">
              <li className="xl:w-auto w-16 truncate xl:text-inherit hover:text-main cursor-pointer">
                racun tikus
              </li>
              <li className="xl:w-auto w-16 truncate xl:text-inherit hover:text-main cursor-pointer">
                sepatu sandal
              </li>
              <li className="xl:w-auto w-16 truncate xl:text-inherit hover:text-main cursor-pointer">
                celana jeans
              </li>
              <li className="xl:w-auto w-16 truncate xl:text-inherit hover:text-main cursor-pointer">
                printer epson
              </li>
              <li className="xl:w-auto w-16 truncate xl:text-inherit hover:text-main cursor-pointer">
                samsung galaxy
              </li>
              <li className="xl:w-auto w-16 truncate xl:text-inherit hover:text-main cursor-pointer">
                xiaomi 12 pro max
              </li>
            </ul>
          </div>
          <div className="location text-sm self-end justify-end text-gray-600 w-full flex b">
            <div className="self-end flex items-center gap-2">
              <CiLocationOn />
              <span>
                Dikirim Ke <strong>Jakarta Pusat</strong>
              </span>

              <BsChevronDown
                //@ts-ignore
                className="text-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

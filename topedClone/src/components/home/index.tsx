import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Next from "../../ui/carousel/next";
import Left from "../../ui/carousel/left";
//@ts-ignore
import img1 from "../../assets/img1.jpg";
//@ts-ignore
import img2 from "../../assets/img2.webp";
//@ts-ignore
import img3 from "../../assets/img3.webp";
import { cardsCategory } from "../../data";
const Home = () => {
  const items = [img1, img2, img3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Left />,
  };
  return (
    <div className=" lg:px-14 px-20 scroll-pt-20 mt-32">
      <div className="jumbotron relative group rounded-xl ">
        <Slider {...settings}>
          {items.map((e) => (
            <div className="cards rounded-xl h-[300px] bg-gray-500">
              <img
                src={e}
                alt="img"
                className="w-full h-full object-cover cursor-pointer rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
      <section className="category-top-up p-3 mt-8 flex row shadow-md rounded-md gap-5 ">
        <div className="col">
          <h3 className="text-2xl font-semibold">Kategori pilihan</h3>
          <div className="cards flex gap-3 mt-4 ">
            {cardsCategory.map((e) => (
              <div className="card max-w-[130px] text-center border-[2px] rounded-md   ">
                <img src={e.img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="col w-2/4">
          <h3 className="text-2xl font-semibold ">
            Top Up & Tagihan{" "}
            <span className="text-main text-base">Lihat Semua</span>
          </h3>
          <div className="wrapper border-[1px] mt-4 rounded-md  w-full">
            <nav className="nav w-full border-b-[1px]">
              <ul className="flex text-center gap-3 justify-between text-gray-200 w-full">
                <li className=" w-full p-2 active text-main border-b-2 border-main">
                  Pulsa
                </li>
                <li className="text-gray-400 w-full p-2 ">Paket</li>
                <li className="text-gray-400 w-full p-2 ">Flight</li>
                <li className="text-gray-400 w-full p-2 ">Listrik PLN</li>
                <li className="text-gray-400 p-2 border-l-[1px] max-w-5 grid place-items-center">
                  <SlOptionsVertical />
                </li>
              </ul>
            </nav>
            <div className="p-2 flex gap-3">
              <label htmlFor="">
                <h5 className="text-sm font-semibold mb-2">Nomer Telepon</h5>
                <input
                  type="text"
                  className="p-2 border-[1px] rounded-md"
                  placeholder="0859960464920"
                />
              </label>
              <label htmlFor="" className="w-full">
                <h5 className="text-sm font-semibold mb-2">Nominal</h5>
                <select
                  name=""
                  id=""
                  className="bg-gray-200 p-2 w-full rounded-md"
                >
                  <option value=""></option>
                </select>
              </label>
              <button className="btn p-2 rounded-md Beli bg-gray-200 self-end">
                Beli
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

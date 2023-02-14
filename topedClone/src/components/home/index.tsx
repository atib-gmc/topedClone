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
//@ts-ignore
import leftImg from "../../assets/daa96270-97bc-43c7-b959-85ff7b06cf11.png.webp";
import { cardsCategory } from "../../data";
import Category from "./category";
import MainCards from "../../ui/cards/mainCards";
import { useInView } from "react-intersection-observer";
import Footer from "../footer";

const Home = () => {
  const { entry, ref, inView } = useInView({
    threshold: 1,
  });
  // console.log(inView);

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
    <div className=" lg:px-14 px-20 scroll-pt-20 mt-32  ">
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
      <section className="category-top-up p-3 mt-8 shadow-md rounded-md  ">
        <div className="main flex gap-5">
          <div className="col">
            <h3 className="text-2xl font-semibold">Kategori pilihan</h3>
            <div className="cards flex gap-3 mt-4 relative">
              {cardsCategory.map((e) => (
                <div className="card max-w-[130px] text-center border-[2px] rounded-md   ">
                  <img src={e.img} alt="" />
                </div>
              ))}
              <Next />
            </div>
          </div>
          <div className="col w-2/4">
            <h3 className="text-2xl font-semibold">
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
              <div className="p-2 flex gap-3 ">
                <label htmlFor="" className="w-2/4">
                  <h5 className="text-sm font-semibold mb-2">Nomer Telepon</h5>
                  <input
                    type="text"
                    className="p-2 border-[1px] rounded-md w-full"
                    placeholder="0859960464920"
                  />
                </label>
                <label htmlFor="" className="w-2/4">
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
        </div>
        <Category />
      </section>
      <section className="pengguna-baru mt-8  overflow-x-hidden">
        <h2 className="text-2xl font-semibold ">Traktiran Pengguna Baru</h2>
        <div className="card-wrapper relative h-[400px] mt-4">
          <div className="left  absolute top-2/4 -translate-y-2/4 bg-[#175016] h-[400px] w-[25vw] rounded-xl">
            <img
              src={leftImg}
              className="main-img object-cover h-full"
              alt=""
            />
          </div>
          <div className="cards w-full h-20 gap-5 p-2 translate-x-40  flex absolute top-[10%]">
            <MainCards length={5} />
          </div>
        </div>
      </section>
      <hr className="h-3 my-10 bg-gray-200 scale-x-110" />
      <div className="ctas flex  gap-10 sticky top-[75px] z-20   bg-white p-3 w-full">
        <div className="cards bg-gradient-to-br relative from-violet-400 to-violet-600 p-2 rounded-md w-52 h-14">
          <span className="font-bold text-white ">For You</span>
          <span className="font-bold absolute h-[3px] left-2 top-2 w-14 bg-white text-white "></span>
        </div>
        <div className="cards bg-gradient-to-br relative from-green-400 to-green-600 p-2 rounded-md w-52 h-14">
          <span className="font-bold text-white ">Spesial Wib</span>
        </div>
        <div className="cards bg-gradient-to-br relative from-yellow-400 to-yellow-600 p-2 rounded-md w-52 h-14">
          <span className="font-bold text-white ">Galeri Fasion</span>
        </div>
        <div className="cards bg-gradient-to-br relative from-blue-400 to-blue-600 p-2 rounded-md w-52 h-14">
          <span className="font-bold text-white ">Special Discount</span>
        </div>
        <div className="cards bg-gradient-to-br relative from-yellow-400 to-yellow-600 p-2 rounded-md w-52 h-14">
          <span className="font-bold text-white ">Kerajinan Tangan</span>
        </div>
      </div>
      <section className="">
        <h2 className="text-2xl font-semibold  my-3">For You</h2>
        <div className="main flex flex-wrap justify-between items-stretch gap-8">
          <MainCards length={15} />
          <MainCards length={7} />
        </div>
      </section>
      <div className="w-full  grid place-items-center p-5">
        <button
          ref={ref}
          className="btn border-main border-[1px] font-bold px-32 w-50 p-3 mx-auto rounded-xl text-main text-center"
        >
          Muat Lebih Banyak
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

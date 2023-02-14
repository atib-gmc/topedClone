import React from "react";
import { BsFillBagCheckFill, BsFillStarFill } from "react-icons/bs";
import { mainCard } from "../../data";
const MainCards = ({ length }: { length: number }) => {
  return (
    <>
      {mainCard.slice(0, length).map((e, i) => (
        <div
          key={i}
          className="rounded-md w-[200px] overflow-hidden shadow-md bg-white min-h-[300px] "
        >
          <img src={e.img} className="w-[200px] h-[150px] bg-gray-600" />
          <div className="main p-2">
            <h4>{e.name}</h4>
            <p className="price font-semibold">{e.price}</p>
            <span className="text-sm discounted h-8 w-8 text-pink-700 rounded-md bg-pink-300">
              68%
            </span>
            {e.discounted && (
              <span className="text-sm discounted text-gray-500 line-through">
                Rp {e.discounted.originl}
              </span>
            )}
            <div className="store-location flex items-center gap-2">
              <BsFillBagCheckFill />{" "}
              <span className="text-gray-500">Jakarta</span>
            </div>
            <div className="ratings flex items-center  gap-2">
              <BsFillStarFill />

              <span className="text-gray-500 text-sm">
                {e.ratings} | Terjual {e.sold} rb +
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainCards;

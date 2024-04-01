import React from "react";
import { MdOutlineStar } from "react-icons/md";

function FoodCart({ id, price, name, desc, rating, img }) {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg shadow-md gap-1">
      <img
        src={img}
        className="w-auto h-[130px] hover:scale-110 ease-in-out duration-500 cursor-grab transition-all"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">${price}</span>
      </div>
      <p className="text-sm font-semibold">{desc.slice(0, 55) + "..."}</p>
      <div className="flex justify-between mt-1">
        <span className="flex justify-center items-center ">
          <MdOutlineStar className="text-yellow-400 mr-1" /> {rating}
        </span>
        <button className="p-1 text-white bg-green-500 rounded-lg hover:bg-green-600 text-sm font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCart;

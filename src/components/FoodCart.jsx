import React from "react";
import { MdOutlineStar } from "react-icons/md";

function FoodCart() {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg shadow-md gap-1">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        className="w-auto h-[130px] hover:scale-110 ease-in-out duration-500 cursor-grab transition-all"
      />
      <div className="text-sm flex justify-between">
        <h2>Onion Pizza</h2>
        <span className="text-green-500 ">$10.99</span>
      </div>
      <p className="text-sm font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        assumenda.
      </p>
      <div className="flex justify-between mt-1">
        <span className="flex justify-center items-center ">
          <MdOutlineStar className="text-yellow-400 mr-1" /> 4.5
        </span>
        <button className="p-1 text-white bg-green-500 rounded-lg hover:bg-green-600 text-sm font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCart;

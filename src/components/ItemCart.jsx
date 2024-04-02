import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function ItemCart() {
  return (
    <div className="flex gap-3 items-center shadow-md rounded-lg p-2 mb-3">
      <MdDeleteForever className="absolute right-7 text-gray-600 cursor-pointer mb-5" />
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold ">$150</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaPlus className="border-2 border-gray-600 text-grey-600 hover:bg-green-600 hover:border-none hover:text-white rounded-md cursor-pointer ease-linear p-1 transition-all text-xl" />
            <span>1</span>
            <FaMinus className="border-2 border-gray-600 text-grey-600 hover:bg-green-600 hover:border-none hover:text-white rounded-md cursor-pointer ease-linear p-1 text-xl transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;

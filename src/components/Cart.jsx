import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import ItemCart from "./ItemCart";

function Cart() {
  return (
    <>
      <div className="fixed right-0 top-0 w-[60%] lg:w-[20vw] p-5 bg-white h-full">
        <div className="flex justify-between my-2 items-center">
          <span className="text-xl font-bold text-grey-600">My Order</span>
          <FaRegWindowClose className="hover:border-red-600 hover:text-red-600 cursor-pointer" />
        </div>

        <ItemCart />

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : </h3>
          <h3 className="font-semibold text-gray-800">Total Amount : </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5 hover:bg-green-700">
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;

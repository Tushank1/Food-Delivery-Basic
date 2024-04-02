import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi2";

function Cart() {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-[60%] lg:w-[20vw] p-5 bg-white h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="flex justify-between my-2 items-center">
          <span className="text-xl font-bold text-grey-600">My Order</span>
          <FaRegWindowClose
            onClick={() => setActiveCart(!activeCart)}
            className="hover:border-red-600 hover:text-red-600 cursor-pointer"
          />
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
      <HiShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4"
      />
    </>
  );
}

export default Cart;

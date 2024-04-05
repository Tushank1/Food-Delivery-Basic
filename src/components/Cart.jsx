import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQuantity = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

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

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center font-bold text-xl text-gray-800">
            Your Cart is Empty!!!
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">
            Items : {totalQuantity}{" "}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5 hover:bg-green-700"
          >
            CheckOut
          </button>
        </div>
      </div>
      <HiShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQuantity > 0 &&
          "animate-bounce delay-500 duration-500 transition-all"
        }`}
      />
    </>
  );
}

export default Cart;

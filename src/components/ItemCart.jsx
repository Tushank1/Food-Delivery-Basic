import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  IncrementQty,
  DecrementQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function ItemCart({ id, name, price, qty, img }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 items-center shadow-md rounded-lg p-2 mb-3">
      <MdDeleteForever
        onClick={() => {
          dispatch(removeFromCart({ id, name, img, price, qty }));
          toast.success(`${name} Removed`);
        }}
        className="absolute right-7 text-gray-600 cursor-pointer mb-5"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold ">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaMinus
              onClick={() =>
                qty > 1 ? dispatch(DecrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-grey-600 hover:bg-green-600 hover:border-none hover:text-white rounded-md cursor-pointer ease-linear p-1 text-xl transition-all"
            />
            <span>{qty}</span>
            <FaPlus
              onClick={() =>
                qty >= 1 ? dispatch(IncrementQty({ id })) : (qty = 1)
              }
              className="border-2 border-gray-600 text-grey-600 hover:bg-green-600 hover:border-none hover:text-white rounded-md cursor-pointer ease-linear p-1 transition-all text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;

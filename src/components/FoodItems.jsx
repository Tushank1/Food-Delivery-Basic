import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function FoodItems() {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((Food) => {
          if (category === "All") {
            return Food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === Food.category &&
              Food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((Food) => (
          <FoodCart
            key={Food.id}
            id={Food.id}
            name={Food.name}
            price={Food.price}
            desc={Food.desc}
            rating={Food.rating}
            img={Food.img}
            handleToast={handleToast}
          />
        ))}

        {/* {FoodData.map((Food) => {
          return (
            
          );
        })} */}
      </div>
    </>
  );
}

export default FoodItems;

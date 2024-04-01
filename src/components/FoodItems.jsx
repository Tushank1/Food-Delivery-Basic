import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../Data/FoodData";

function FoodItems() {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {FoodData.map((Food) => {
        return (
          <FoodCart
            key={Food.id}
            id={Food.id}
            name={Food.name}
            price={Food.price}
            desc={Food.desc}
            rating={Food.rating}
            img={Food.img}
          />
        );
      })}
    </div>
  );
}

export default FoodItems;

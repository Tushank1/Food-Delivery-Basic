import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const listUnique = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUnique();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the Best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-400 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer ${
            selectedCategory === "All" && "bg-green-600 text-white"
          } `}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 bg-gray-400 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer ${
              selectedCategory === category && "bg-green-600 text-white"
            } `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;

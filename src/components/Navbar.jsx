import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div className="text-xl font-bold text-gray-600">
        <h3>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="font-bold text-2xl text-black">Flavaroo Foods</h1>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search for food..."
          name="search"
          autoComplete="off"
          className="p-3 border border-black text-sm rounded-xl outline-none lg:w-[25vw] w-full "
        />
      </div>
    </nav>
  );
}

export default Navbar;

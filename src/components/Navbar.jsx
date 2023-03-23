import React from "react";
import { Link } from "react-router-dom";
import { CustomStateContext } from "../Context/StateContext";

const Navbar = () => {
  const { search, setSearch } = CustomStateContext();
  const {
    state: { cart },
  } = CustomStateContext();

  return (
    <div className=" container mx-auto flex justify-between items-center py-4 px-5 mb-5 bg-slate-300">
      <Link to={"/"}>
        <h1>Brand</h1>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={"/cart"}>
          <button className=" px-3 py-1 ml-2 rounded bg-purple-600 text-white">
            {cart.length}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

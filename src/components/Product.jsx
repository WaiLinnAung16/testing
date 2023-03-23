import React from "react";
import { CustomStateContext } from "../Context/StateContext";

const Product = (props) => {
  const { title, price, thumbnail } = props;
  const { dispatch } = CustomStateContext();
  return (
    <div className=" flex flex-col items-center gap-3 rounded p-5 shadow-md">
      <div>
        <img src={thumbnail} alt="" className=" h-[150px] object-cover" />
      </div>
      <div className="text-center">
        <h1>{title}</h1>
        <p>${price}</p>
      </div>
      <div className=" flex gap-2">
        <button
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: props });
          }}
          className=" px-7 py-1 bg-purple-600 text-white"
        >
          Add to cart
        </button>
        <button className=" px-7 py-1 bg-purple-600 text-white">Detail</button>
      </div>
    </div>
  );
};

export default Product;

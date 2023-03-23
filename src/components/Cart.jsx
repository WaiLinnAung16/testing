import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { CustomStateContext } from "../Context/StateContext";

const Cart = ({ item, increaseTotal, decreaseTotal }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = CustomStateContext();
  const plus = () => {
    setQuantity(quantity + 1);
    increaseTotal(item.price);
  };
  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseTotal(item.price);
    }
  };
  const delBtn = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    decreaseTotal(price);
  };
  const price = item.price * quantity;
  return (
    <div className="flex items-center gap-5">
      <div>
        <img src={item?.thumbnail} className="w-[350px]" />
      </div>
      <div className=" flex justify-between w-full">
        <div>
          <h1 className=" text-2xl font-bold">{item?.title}</h1>
          <p className=" text-md my-2">{item?.description}</p>
          <p className=" text-xl font-bold">${price}</p>
          <button
            onClick={() => delBtn()}
            className=" px-8 py-1 border border-red-600 rounded-md mt-4 font-bold text-red-600 hover:bg-red-600 hover:text-white"
          >
            Remove
          </button>
        </div>
        <div className=" flex flex-col items-center text-3xl">
          <button onClick={() => plus()}>
            <TiArrowSortedUp className="text-teal-500  hover:scale-110 hover:text-teal-700" />
          </button>
          <p>{quantity}</p>
          <button onClick={() => minus()}>
            <TiArrowSortedDown className="text-red-500  hover:scale-110 hover:text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

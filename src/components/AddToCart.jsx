import React, { useState } from "react";
import { CustomStateContext } from "../Context/StateContext";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const {
    state: { cart },
  } = CustomStateContext();
  const [quantity, setQuantity] = useState(1);

  const plus = () => {
    setQuantity(quantity + 1);
  };
  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const total = cart.reduce((pv, cv) => pv + cv.price, 0);
  //   console.log(total);
  return (
    <>
      {cart?.length === 0 ? (
        <div className=" text-center">
          <h1 className=" text-3xl">Your cart is empty</h1>
          <Link to={"/"}>
            <button className=" px-8 py-1 bg-purple-600 text-white rounded-md mt-4 font-bold">
              Go Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className=" container mx-auto flex flex-col gap-8">
            {cart?.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-5">
                  <div>
                    <img src={item?.thumbnail} className="w-[350px]" />
                  </div>
                  <div className=" flex justify-between w-full">
                    <div>
                      <h1 className=" text-2xl font-bold">{item?.title}</h1>
                      <p className=" text-md my-2">{item?.description}</p>
                      <p className=" text-xl font-bold">
                        ${`${item.price * quantity}`}
                      </p>
                      <button className=" px-8 py-1 border border-red-600 rounded-md mt-4 font-bold text-red-600 hover:bg-red-600 hover:text-white">
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
            })}
            <div className="flex justify-between text-3xl border-t-2 p-5">
              <h1>Total</h1>
              <p className=" font-bold">{total}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddToCart;

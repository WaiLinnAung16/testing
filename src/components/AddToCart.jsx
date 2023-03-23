import React, { useEffect, useState } from "react";
import { CustomStateContext } from "../Context/StateContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const AddToCart = () => {
  const {
    state: { cart },
  } = CustomStateContext();

  const [mainTotal, setMainTotal] = useState(0);

  const total = () => {
    return cart.reduce((pv, cv) => pv + cv.price, 0);
  };
  useEffect(() => {
    setMainTotal(total);
  }, []);
  const increaseTotal = (price) => {
    return setMainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    return setMainTotal(mainTotal - price);
  };
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
                <Cart
                  key={item.id}
                  item={item}
                  increaseTotal={increaseTotal}
                  decreaseTotal={decreaseTotal}
                />
              );
            })}
            <div className="flex justify-between text-3xl border-t-2 p-5">
              <h1>Total</h1>
              <p className=" font-bold">{mainTotal}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddToCart;

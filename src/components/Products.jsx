import React from "react";
import { CustomStateContext } from "../Context/StateContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { productLists },
  } = CustomStateContext();
  // console.log(productLists);
  return (
    <div className=" grid grid-cols-4 gap-3 container mx-auto py-5">
      {productLists?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;

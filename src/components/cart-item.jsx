import React from "react";
import Product from "./product";

const CartItem = ({
  id,
  products,
  total,
  discountedTotal,
  userId,
  totalProducts,
  totalQuantity,
}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <section id="products" className="w-4/5 mx-auto">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
      <section>
        <p className="2xl my-6">Total Products: {totalProducts}</p>
        <p className="2xl">Total Quantity: {totalQuantity}</p>
        <p className="2xl">Total: {total}</p>
        <p className="2xl">Total Discounted Total: {discountedTotal}</p>
      </section>
    </div>
  );
};

export default CartItem;

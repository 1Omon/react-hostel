import React from "react";

const Product = ({
  id,
  title,
  price,
  quantity,
  total,
  discountPercentage,
  discountTotal,
  thumbnail,
}) => {
  return (
    <div className="flex flex-col p-4">
      <img
        src={thumbnail}
        alt={`${title} image`}
        className="w-80 h-60 object-cover"
      />
      <h3 className="text-xl font-semibold">{title}</h3>

      <span className="text-sm">Quantity: {quantity}</span>
      <span className="text-sm">Price: ${price}</span>
      <span className="text-sm">Discounted %: {discountPercentage}</span>
      <span className="text-sm">Discounted Total: ${discountTotal}</span>
    </div>
  );
};

export default Product;

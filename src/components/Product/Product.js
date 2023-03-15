import React from "react";

const Product = () => {
  const products = [
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
    { title: "Nike Air Max Tw", image: "https://t.ly/Ez3z", price: 799 },
  ];
  return (
    <div className="max-w-[1440px] grid grid-cols-2">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className=" border flex flex-col items-center gap-2 px-1 py-6 "
          >
            <img src={product.image} alt="" className="mb-4" />
            <h1 className="text-lg font-bold">{product.title}</h1>
            <div className="flex gap-1 text-neutral-600 text-xs">
              <p>Men Shoes</p>
              <span>&bull;</span>
              <p>Black-Baltic-Iron Grey</p>
            </div>
            <p className="text-xl ">
              <span>{product.price},- </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Product;

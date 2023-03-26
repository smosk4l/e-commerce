function ProductCard({ product }) {
  const calcPriceAfterDiscount = () => {
    if (product.discount) {
      return (
        "$" + (((100 - product.discount) / 100) * product.price).toFixed(2)
      );
    }
  };
  return (
    <div className=" font-rubik shadow-2xl flex flex-col items-center justify-center gap-2  rounded-lg overflow-hidden hover:scale-105 ease-in-out duration-300 mb-6 ">
      <img
        src={product.image}
        alt={product.image + "image"}
        className="my-12 w-[140px] h-[107px]  "
      />
      <div className="bg-[#2f333a] text-white w-full h-full px-4 py-6 flex flex-col justify-around">
        <h1 className="text-[14px]  font-medium uppercase ">{product.title}</h1>
        <p className="text-xl item flex  justify-start items-center ">
          <span
            className={`font-medium text-red-400 text-lg mr-4 ${
              product.discount ? "inline" : "hidden"
            }`}
          >
            {calcPriceAfterDiscount()}
          </span>
          <span
            className={`font-medium text-base decoration-gray-700 decoration-2  ${
              product.discount ? "line-through" : ""
            }`}
          >
            ${product.price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

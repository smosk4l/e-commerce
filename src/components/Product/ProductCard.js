function ProductCard({ product }) {
  const calcPriceAfterDiscount = () => {
    if (product.discount) {
      return (
        "$" + (((100 - product.discount) / 100) * product.price).toFixed(2)
      );
    }
  };
  return (
    <div className=" font-rubik shadow-2xl flex flex-col items-center justify-center gap-2  rounded-lg overflow-hidden ease-in-out duration-300 mb-6 mr-2 z-10 hover:scale-105 ">
      <img
        src={product.images.cover}
        alt={product.images.cover + "image"}
        className="my-12 w-[140px] h-[75px]"
      />

      <div className="bg-black-400 text-white w-full h-full px-4 py-6 flex flex-col justify-around font-medium">
        <h1 className="text-[14px]   uppercase ">{product.title}</h1>
        <p className="text-lg item flex  justify-start items-center  ">
          <span
            className={` text-red-400 text-lg mr-4 ${
              product.discount ? "inline" : "hidden"
            }`}
          >
            {calcPriceAfterDiscount()}
          </span>
          <span
            className={`decoration-gray-700 decoration-2  ${
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

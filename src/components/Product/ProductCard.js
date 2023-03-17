function ProductCard({ product }) {
  return (
    <div className=" border flex flex-col items-center justify-center gap-2 px-1 py-6 ">
      <img
        src={product.image}
        alt={product.image + "image"}
        className="pb-8 w-[140px] h-[107px]"
      />
      <h1 className="text-md font-medium text-center">{product.title}</h1>
      <p className="text-xl item flex w-full justify-center items-end h-full">
        <span className="font-medium text-2xl">${product.price} </span>
      </p>
    </div>
  );
}

export default ProductCard;

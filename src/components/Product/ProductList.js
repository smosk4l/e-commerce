import ProductCard from "./ProductCard";
import products from "./ProductsData";
const Product = () => {
  // console.log(
  //   products.sort((a, b) => {
  //     return b.price - a.price;
  //   })
  // );
  return (
    <div className="md:col-start-3 col-end-9">
      <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-3 ">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Product;

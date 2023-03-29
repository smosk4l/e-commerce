import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <>
      <div className="md:col-start-3 col-end-9">
        <div className="max-w-[1440px] grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 ">
          {props.products.map((product) => {
            return (
              <div key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="inline-grid h-full w-full"
                >
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;

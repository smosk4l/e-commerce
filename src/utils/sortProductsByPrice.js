import Data from "../components/Product/ProductsData";
const sortProductsByPrice = (products, order) => {
  let sortedProducts = [...products];
  if (order === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (order === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    sortedProducts = Data;
  }

  return sortedProducts;
};

export default sortProductsByPrice;

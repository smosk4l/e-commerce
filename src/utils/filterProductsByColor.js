const filterProductsByColor = (products, color) => {
  if (!color) return products;
  return products.filter((product) => product.color === color);
};

export default filterProductsByColor;

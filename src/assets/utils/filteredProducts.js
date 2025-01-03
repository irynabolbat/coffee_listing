export const filteredProducts = (products, productsStatus) => {
  if (productsStatus === "all") return products;
  if (productsStatus === "available")
    return products.filter((product) => product.available === true);
};

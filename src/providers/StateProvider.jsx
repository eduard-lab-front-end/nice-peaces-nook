import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [needRefresh, setNeedRefresh] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/furnitureShop`
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error getting products", error);
    }
  };

  useEffect(() => {
    if (needRefresh) {
      fetchProducts();
      setNeedRefresh(false);
    }
  }, [needRefresh]);

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        setNeedRefresh,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

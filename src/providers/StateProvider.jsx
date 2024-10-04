import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
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
  const fetchCartProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`);
      if (response.ok) {
        const data = await response.json();
        setCartData(data);
      } else if (response === 500) {
        alert("Already in your cart");
      }
    } catch (error) {
      console.error("Error getting products", error);
    }
  };
  const fetchFavoriteProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/favorite`);
      if (response.ok) {
        const data = await response.json();
        setFavoriteData(data);
      } else if (response === 500) {
        alert("Already in your cart");
      }
    } catch (error) {
      console.error("Error getting products", error);
    }
  };
 
  useEffect(() => {
    if (needRefresh) {
      fetchProducts();
      fetchCartProducts();
      fetchFavoriteProducts();
      setNeedRefresh(false);
    }
  }, [needRefresh]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cartData,
        favoriteData,
        fetchProducts,
        setNeedRefresh,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

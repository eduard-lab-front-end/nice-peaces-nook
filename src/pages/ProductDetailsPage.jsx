import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
("react-icons/fa6");
import {
  IconEditCircle,
  IconHeart,
  IconHeartFilled,
  IconShoppingCartPlus,
  IconShoppingCartX,
} from "@tabler/icons-react";
import { ProductContext } from "../providers/StateProvider";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();
  const { setNeedRefresh } = useContext(ProductContext);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/furnitureShop/${productId}`
      );
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    } catch (error) {
      console.error("Error fetching the product", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const toggleProductCart = async () => {
    try {
      const updatedProduct = { ...product, inCart: !product.inCart };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/furnitureShop/${product.id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (response.ok) {
        setProduct(updatedProduct);
        setNeedRefresh(true);
      }
    } catch (error) {
      console.error("Failed to add a product", error);
    }
  };
  const toggleProductFavorite = async () => {
    try {
      const updatedProduct = { ...product, isFavorite: !product.isFavorite };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/furnitureShop/${product.id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (response.ok) {
        setProduct(updatedProduct);
        setNeedRefresh(true);
      }
    } catch (error) {
      console.error("Failed to add a product", error);
    }
  };

  return (
    <section className="flex flex-col mt-28 mb-10 mx-auto pb-8 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 rounded-lg overflow-hidden max-h-[600px] max-w-lg">
      <div className="relative min-h-[300px]">
        <img
          src={product.url}
          alt=""
          className="absolute object-cover h-full w-full"
        />
      </div>
      <div className="px-4 grow">
        <div className="space-x-1 flex justify-center mt-5">
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <h1 className="text-3xl my-5">{product.title}</h1>
        <p className="mb-5">{product.subDescription}</p>
        <h2 className="font-semibold mb-5">${product.price}</h2>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={toggleProductCart}
            className={`p-2 bg-purple-500
             text-white rounded-md hover:bg-purple-600`}
          >
            {!product.inCart ? (
              <IconShoppingCartPlus stroke={1.25} />
            ) : (
              <IconShoppingCartX stroke={1.25} />
            )}
          </button>
          <Link to={`/products/update/${product.id}`}>
            <button
              type="button"
              className=" ml-2 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              <IconEditCircle stroke={1.25} />
            </button>
          </Link>
          <button
            type="button"
            onClick={toggleProductFavorite}
            className="p-2 bg-purple-500
             text-white rounded-md hover:bg-purple-600 ml-2 "
          >
            {product.isFavorite ? (
              <IconHeartFilled color="#ff0000bd" />
            ) : (
              <IconHeart stroke={1.25} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;

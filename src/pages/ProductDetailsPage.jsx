import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { ProductContext } from "../providers/StateProvider";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  console.log(product);
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

  const addProductToCart = async () => {
    try {
      const postResponse = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product),
      });
      if (postResponse.ok) {
        const updatedProduct = { ...product, inCart: true };
        setProduct(updatedProduct);
        await fetch(`${import.meta.env.VITE_API_URL}/cart/${product.id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(updatedProduct),
        });
        setNeedRefresh(true);
      }
    } catch (error) {
      console.error("Failed to add a product", error);
    }
  };
  return (
    // <section className="grid grid-cols-1 justify-items-center w-full mt-32 my-24">

    // </section> <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
    <section className="flex flex-col my-24 mx-auto pb-8 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-lg overflow-hidden max-h-[600px] max-w-lg">
      <div className="relative min-h-[300px] ">
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
        <button
          type="button"
          onClick={addProductToCart}
          disabled={!product.inCart ? false : true}
          className={`p-2 px-6 ${
            product.inCart ? "bg-[#a855f766]" : "bg-purple-500"
          } text-white rounded-md hover:bg-purple-600`}
        >
          Add To Cart
          {product.inCart ? <FaCartPlus className="inline ml-2" /> : ""}
        </button>
        <Link to={`/products/update/${product.id}`}>
          <button
            type="button"
            // onClick={addProductToCart}
            className=" ml-2 p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          >
            Update
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductDetailsPage;

{
  /* <section className="container w-2/4 my-16 mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            alt=""
            className="object-cover"
          />
          <div className="space-x-1 flex justify-center mt-10">
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
          <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-5">$29.99</h2>
          <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Add To Cart
          </button>
        </section>
    </section> */
}

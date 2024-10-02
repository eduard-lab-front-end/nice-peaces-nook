import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  console.log(productId);

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

  return (
    <section className="container max-w-sm my-10 mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
        <div className="relative">
          <img className="w-full" src={product.url} alt="Product Image" />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${product.price}</span>
            <button className="bg-[#ddaf92] hover:bg-[#d7966e] text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
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

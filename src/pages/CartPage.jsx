import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const subTotal = cartProducts.reduce(
    (acc, currentProduct) => acc + currentProduct.price,
    0
  );
  const avrDiscount = Math.floor(
    cartProducts.reduce(
      (acc, currentProduct) => acc + currentProduct.discount,
      0
    ) / cartProducts.length
  );
  const taxes = Math.floor(subTotal * (5 / 100));
  const discountSum = Math.floor(subTotal * (avrDiscount / 100)) | 0;

  const fetchCartProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setCartProducts(data);
      } else if (response === 500) {
        alert("Already in your cart");
      }
    } catch (error) {
      console.error("Error getting products", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cart/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchCartProducts();
      } else {
        alert("Failed to delete the product");
      }
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <div className="font-sans my-20 max-w-4xl max-md:max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="md:col-span-2 space-y-4">
          {cartProducts.map((currentProduct) => (
            <div
              key={currentProduct.id}
              className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"
            >
              <div className="flex gap-4">
                <div className="w-36 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <img
                    src={currentProduct.url}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {currentProduct.title}
                    </h3>
                    <p className="text-sm font-semibold mt-2 flex items-center gap-2 text-red-300">
                      Discount: {currentProduct.discount}%
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-3">
                    <button
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <AiOutlineMinus size={12} color="white" />
                    </button>
                    <span className="font-bold text-sm leading-[18px]">1</span>
                    <button
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <FaPlus size={10} color="white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="ml-auto flex flex-col">
                <div className="flex items-start gap-4 justify-end">
                  <CiHeart color="red" size={20} />
                  <RiDeleteBin6Line
                    size={20}
                    onClick={() => deleteProduct(currentProduct.id)}
                  />
                </div>
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  ${currentProduct.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
          <ul className="text-gray-800 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal <span className="ml-auto font-bold">${subTotal}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Discount <span className="ml-auto font-bold">${discountSum}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">${taxes}</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total{" "}
              <span className="ml-auto">${subTotal - discountSum + taxes}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
            >
              Buy Now
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
            >
              Continue Shopping{" "}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <img
              src="https://readymadeui.com/images/master.webp"
              alt="card1"
              className="w-10 object-contain"
            />
            <img
              src="https://readymadeui.com/images/visa.webp"
              alt="card2"
              className="w-10 object-contain"
            />
            <img
              src="https://readymadeui.com/images/american-express.webp"
              alt="card3"
              className="w-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

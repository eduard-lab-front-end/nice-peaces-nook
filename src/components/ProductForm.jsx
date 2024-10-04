import { Button } from "@mantine/core";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../providers/StateProvider";

const FormProduct = ({
  product = {
    id: uuid(),
    title: "",
    price: "",
    description: "",
    subDescription: "",
    url: "",
    discount: "",
    new: true,
    favorite: false,
    inCart: false,
  },
  isUpdate = false,
}) => {
  const { setNeedRefresh } = useContext(ProductContext);

  const [formValues, setFormValues] = useState({
    ...product,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/furnitureShop/${
          isUpdate ? product.id : ""
        }`,
        {
          method: isUpdate ? "PUT" : "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );
      if (response.ok) {
        setNeedRefresh(true);
        navigate(`/products/${formValues.id}`);
      }
    } catch (error) {
      console.error("Failed to add a product", error);
    }
  };

  return (
    <div className="max-w-lg my-28 mx-auto border rounded-xl p-10 bg-[#ddaf92]/40">
      {!isUpdate ? <h2 className="text-xl text-center mb-8 font-semibold">Thank you for choosing to work with us</h2> : <h2 className="text-xl text-center mb-8 font-semibold">Update your product</h2>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formValues.title}
            className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-[#ddaf92] focus:border-[#ddaf92] block w-full p-2.5"
            placeholder="Input placeholder"
            onChange={handleChange}
            name="title"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#ddaf92] focus:border-[#ddaf92] block w-full p-2.5"
            id="price"
            type="number"
            value={formValues.price}
            label="Price"
            placeholder="Input placeholder"
            onChange={handleChange}
            name="price"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-[#ddaf92] focus:border-[#ddaf92] block w-full p-2.5"
            type="text"
            id="description"
            value={formValues.description}
            placeholder="Input placeholder"
            onChange={handleChange}
            name="description"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subDescription"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Snippet
          </label>
          <input
            className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-[#ddaf92] focus:border-[#ddaf92] block w-full p-2.5"
            type="text"
            id="subDescription"
            value={formValues.subDescription}
            placeholder="Input placeholder"
            onChange={handleChange}
            name="subDescription"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your image
          </label>
          <input
            className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-[#ddaf92] focus:border-[#ddaf92] block w-full p-2.5"
            type="text"
            id="url"
            value={formValues.url}
            placeholder="Type some url..."
            onChange={handleChange}
            name="url"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="discount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Discount in %
          </label>
          <input
            className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-[#ddaf92] focus:border-[#ddaf92] block w-full p-2.5 mb-7"
            value={formValues.discount}
            id="discount"
            placeholder="Input placeholder"
            onChange={handleChange}
            name="discount"
            required
          />
        </div>
        <Button type="submit" color="#ddaf92">{isUpdate ? "Update" : "Add new product"}</Button>
      </form>
    </div>
  );
};

export default FormProduct;

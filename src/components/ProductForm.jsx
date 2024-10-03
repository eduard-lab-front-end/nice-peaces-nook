import { Button, NumberInput, TextInput } from "@mantine/core";
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
    // console.log(event);
    // console.log(event.target);
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
    <div className="max-w-lg my-28 mx-auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          value={formValues.title}
          label="Title"
          placeholder="Input placeholder"
          onChange={handleChange}
          name="title"
          required
        />
        <input
          type="number"
          value={formValues.price}
          label="Price"
          placeholder="Input placeholder"
          onChange={handleChange}
          name="price"
          required
        />
        <TextInput
          value={formValues.description}
          label="Description"
          placeholder="Input placeholder"
          onChange={handleChange}
          name="description"
          required
        />
        <TextInput
          value={formValues.subDescription}
          label="Snippet"
          placeholder="Input placeholder"
          onChange={handleChange}
          name="subDescription"
          required
        />
        <TextInput
          value={formValues.url}
          label="Url"
          placeholder="Input placeholder"
          onChange={handleChange}
          name="url"
          required
        />
        <input
          value={formValues.discount}
          label="Discount in %"
          placeholder="Input placeholder"
          onChange={handleChange}
          name="discount"
          required
        />
        <Button type="submit">{isUpdate ? 'Update' : 'Add new product'}</Button>
      </form>
    </div>
  );
};

export default FormProduct;

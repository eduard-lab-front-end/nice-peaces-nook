import { useParams } from "react-router-dom";
import FormProductPage from "../components/ProductForm";
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";

const UpdateProductPage = () => {
  const [product, setProduct] = useState(undefined);
  const { productId } = useParams();

  const fetchProduct = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/furnitureShop/${productId}`
    );
    if (response.ok) {
      const productData = await response.json();
      setProduct(productData);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return !product ? (
    <Loader color="rgba(224, 151, 105, 1)" />
  ) : (
    <FormProductPage product={product} isUpdate />
  );
};

export default UpdateProductPage;

import { useContext } from "react";
import { ProductContext } from "../providers/StateProvider";
import { Link, useNavigate } from "react-router-dom";

const ProductsList = () => {
  // const data = [
  //   {
  //     title: "item 1",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 2",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 3",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://plus.unsplash.com/premium_photo-1682582243285-8478309a7cdb?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 4",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://plus.unsplash.com/premium_photo-1682484702952-e3bb37dfec97?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 1",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 2",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 3",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://plus.unsplash.com/premium_photo-1682582243285-8478309a7cdb?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "item 4",
  //     description: "Some description",
  //     price: "100$",
  //     url: "https://plus.unsplash.com/premium_photo-1682484702952-e3bb37dfec97?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  const { products } = useContext(ProductContext);
  const navigate = useNavigate()
  return (
    <>
      <h2 className="text-center text-4xl mt-10 mb-16">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {products.slice(0, 8).map((card) => (
          <Link key={card.id} to={`/products/${card.id}`}>
          <div  className="bg-[#f4f5f7] hover:bg-[#d9dadb] ease-in duration-300 hover:scale-110">
            <div className="relative h-[250px] grid place-items-center rounded-lg">
              <img
                src={card.url}
                alt=""
                className="absolute object-cover h-full w-full rounded-t-lg"
                radius="md"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-slate-500">{card.subDescription}</p>
              <p className="font-semibold">${card.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <button
      onClick={() => navigate('/products')}
        type="button"
        className="block px-10 py-2 mx-auto border border-[#e89f71] hover:bg-[#e89f71]/20 rounded-md"
        >
        Show More
      </button>
    </>
  );
};

export default ProductsList;

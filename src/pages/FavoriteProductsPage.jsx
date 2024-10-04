import { useContext } from "react";
import { ProductContext } from "../providers/StateProvider";

const FavoriteProductsPage = () => {
  const { products, setNeedRefresh } = useContext(ProductContext);
  const isFavorite = products.filter(
    (currentProduct) => currentProduct.isFavorite == true
  );
  const toggleProductFavorite = async (productId) => {
    const findProduct = products.find((product) => product.id === productId);
    try {
      const updatedProduct = { ...findProduct, isFavorite: false };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/furnitureShop/${findProduct.id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (response.ok) {
        setNeedRefresh(true);
      }
    } catch (error) {
      console.error("Failed to add a product", error);
    }
  };
  return (
    <section className="mt-24 mb-10">
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        {isFavorite.map((currentItem) => (
          <li
            key={currentItem.id}
            className="relative flex flex-col sm:flex-row xl:flex-col items-start  rounded-lg shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="order-1 sm:ml-2 xl:ml-0 px-4 pb-4 sm: py-4 xl:pt-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">
                  {currentItem.title}
                </span>
                {currentItem.subDescription}
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>{currentItem.description}</p>
              </div>
              <button
                type="button"
                onClick={() => toggleProductFavorite(currentItem.id)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-[#ddaf92]/50 text-slate-700 hover:bg-[#ddaf92]/80 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Remove from favorite
                <span className="sr-only">
                  , Completely unstyled, fully accessible UI components
                </span>
                
              </button>
            </div>
            <div className="mb-5 sm:mb-0 xl:mb-5 h-64 w-full sm:max-w-[450px]">
            <img
              src={currentItem.url}
              alt=""
              className="object-cover h-full w-full rounded-lg"
              width="1216"
              height="640"
            />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoriteProductsPage;

import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import AddProductPage from "./pages/AddProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import FavoriteProductsPage from "./pages/FavoriteProductsPage";

function App() {
  return (
    <div className="">
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/products/new" element={<AddProductPage />} />
        <Route path="/products/update/:productId" element={<UpdateProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavoriteProductsPage />} />
        <Route path="*" element={<h2>404 Error</h2>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

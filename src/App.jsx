import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h2>404 Error</h2>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

{
  /* <AppShell header={{ height: 80 }} padding="lg" withBorder={false}>
      <AppShell.Header>
        <Navbar />
     </AppShell.Header>

     <AppShell.Main className="min-h-screen bg-gradient-to-r from-[#f9d9b2] to-[#f7e3cb]">
        <section className="flex justify-center items-center">
          <Carouse /> 
        </section>
      </AppShell.Main>
     </AppShell>  */
}

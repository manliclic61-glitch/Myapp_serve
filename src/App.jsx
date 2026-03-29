import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import EcommerceUI from "./components/products";
import hero_1_logo_doodle from "./assets/hero_1_logo_doodle.jpg";

function Products() {
  return <EcommerceUI products={products} />;
}

function Cart() {
  return <h1 className="text-center mt-10">Cart Page</h1>;
}

function Home() {
  return (

    <>

   <img src={hero_1_logo_doodle} alt="Hero"  className="w-full" />
      <div className="text-center mt-10">
        <h1 className="text-4xl mb-4">Welcome to Quality Clothing</h1>

        <p className="text-gray-400 mb-6">Your one-stop shop for stylish apparel</p>
        <p className="text-gray-400">Discover our latest collection and find the perfect piece for your style.</p>
        

      </div>
   
    </>

  );
}

const products = [
  { id: 1, name: "Headphones", price: "$99" },
  { id: 2, name: "Keyboard", price: "$79" },
  { id: 3, name: "Mouse", price: "$49" },
  { id: 4, name: "Monitor", price: "$199" },
  { id: 5, name: "Monitor", price: "$199" },
  { id:6, name: "Monitor", price: "$199" },
];

function App() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen mx-0 lg:mx-50">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;